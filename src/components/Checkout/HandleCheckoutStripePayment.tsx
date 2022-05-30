import React, { useEffect, useState } from 'react';
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutStripeForm from './CheckoutStripeForm';
import { useParams } from 'react-router-dom';
import { createPaymentIntent, getTempEmail } from '../../hooks/orders/orders';
import CheckoutSteps from './CheckoutSteps';
import Page from '../Page/Page';

const HandleCheckoutStripePayment: React.FC = () => {
  let { orderId } = useParams();
  const [clientSecret, setClientSecret] = useState('');
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string,
  );
  const clientEmail = getTempEmail();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    (async () => {
      const response = await createPaymentIntent(orderId ? orderId : '');
      setClientSecret(response.clientSecret);
    })();
  }, [orderId]);

  const appearance: Appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#dba970',
    },
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <Page>
      <CheckoutSteps stepName={'payment'} />
      <>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutStripeForm
              clientEmail={clientEmail ? clientEmail : ''}
              orderId={orderId ? orderId : ''}
            />
          </Elements>
        )}
      </>
    </Page>
  );
};

export default HandleCheckoutStripePayment;
