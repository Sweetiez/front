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

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  let component;

  switch (steps[activeStep]) {
    case 'cart':
      component = <CheckoutCart handleNext={handleNext} />;
      break;
    case 'address':
      component = (
        <CheckoutCustomerInfo
          handleNext={handleNext}
          handlePrevious={handleBack}
        />
      );
      break;
    // case 'payment':
    //   component = (
    //     <CheckoutPayment handleNext={handleNext} handlePrevious={handleBack} />
    //   );
    //   break;
    // case 'finished':
    //   component = <CheckoutSuccess />;
    //   break;
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
