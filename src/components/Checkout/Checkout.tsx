import React from 'react';
import Page from '../Page/Page';
import CheckoutSteps from './CheckoutSteps';
import CheckoutCustomerInfo from './CheckoutCustomerInfo';
import CheckoutCart from './CheckoutCart';

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
      component = <CheckoutCustomerInfo />;
      break;
    case 'payment':
      component = <CheckoutCustomerInfo />;
      break;
    case 'finished':
      component = <CheckoutCustomerInfo />;
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
