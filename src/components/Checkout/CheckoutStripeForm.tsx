import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import Lottie from 'react-lottie-player';
import cakeAnimation from '../../assets/lotties/cakerun.json';
import cardAnimation from '../../assets/lotties/card.json';
import LabelButton from '../Button/LabelButton';
import Label from '../utils/Label';
import { useTranslation } from 'react-i18next';

interface CheckoutStripeFormProps {
  clientEmail: string;
  orderId: string;
}

const CheckoutStripeForm: React.FC<CheckoutStripeFormProps> = ({
  clientEmail,
  orderId,
}) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [email] = useState(clientEmail);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const redirectBaseUrl = process.env.REACT_APP_BASE_URL as string;

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe, orderId]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${redirectBaseUrl}/checkout/success/${orderId}`,
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error?.message ? error.message : 'Something went wrong.');
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="xl:col-start-3 xl:col-end-5 md:col-start-2 md:col-end-6  col-start-1 col-end-7">
          <div
            className="credit-card w-full shadow-lg mx-auto rounded-xl bg-white flex flex-col"
            x-data="creditCard"
          >
            <div className="grid grid-cols-3">
              <Lottie
                className="col-start-2 h-auto w-fit"
                loop={false}
                animationData={cardAnimation}
                play
              />
            </div>
            <form className="p-10" id="payment-form" onSubmit={handleSubmit}>
              <PaymentElement id="payment-element" />
              <div className="grid grid-cols-3">
                <div className="col-start-2">
                  <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                  >
                    <span id="button-text">
                      {isLoading ? (
                        <Lottie
                          className="h-16 w-auto"
                          loop
                          animationData={cakeAnimation}
                          play
                        />
                      ) : (
                        <div className="w-fit h-fit py-5">
                          <div className=" flex justify-center">
                            <LabelButton
                              label={t('checkout.payment.payButton')}
                              svg="add"
                            />
                          </div>
                        </div>
                      )}
                    </span>
                  </button>
                  {/* Show any error or success messages */}
                  {message && <Label status="Error" message={message} />}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutStripeForm;
