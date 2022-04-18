import React from 'react';
import Page from '../Page/Page';
import CheckoutSteps from './CheckoutSteps';
import CheckoutCustomerInfo from './CheckoutCustomerInfo';
import CheckoutCart from './CheckoutCart';
import CheckoutPayment from './CheckoutPayment';

const Checkout: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['cart', 'address', 'payment', 'finished'];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  let component;

  switch (steps[activeStep]) {
    case 'cart':
      component = <CheckoutCart handleNext={handleNext} />;
      break;
    case 'address':
      component = <CheckoutCustomerInfo handleNext={handleNext} />;
      break;
    case 'payment':
      component = <CheckoutPayment />;
      break;
    case 'finished':
      component = <CheckoutCustomerInfo handleNext={handleNext} />;
      break;
    default:
      break;
  }

  return (
    <Page>
      <CheckoutSteps stepName={steps[activeStep]} />
      <>{component}</>
    </Page>
  );
};

export default Checkout;
