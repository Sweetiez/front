import React from 'react';

interface CheckoutStepsProps {
  stepName: string;
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ stepName }) => {
  const steps = ['cart', 'address', 'payment', 'finished'];

  const iconBgWhite =
    'w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center';
  const iconBgGreen =
    'w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center';
  const iconColorWhite = 'text-center text-gray-600 w-full';
  const iconColorGreen = 'text-center text-white w-full';

  const styleIndex = steps.indexOf(stepName);
  const styles = [
    {
      step: 'cart',
      bar1Completion: '0%',
      bar2Completion: '0%',
      bar3Completion: '0%',
      cart: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
      address: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
      payment: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
      finished: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
    },
    {
      step: 'address',
      bar1Completion: '80%',
      bar2Completion: '0%',
      bar3Completion: '0%',
      cart: {
        iconBack: iconBgGreen,
        iconColor: iconColorGreen,
      },
      address: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
      payment: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
      finished: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
    },
    {
      step: 'payment',
      bar1Completion: '100%',
      bar2Completion: '80%',
      bar3Completion: '0%',
      cart: {
        iconBack: iconBgGreen,
        iconColor: iconColorGreen,
      },
      address: {
        iconBack: iconBgGreen,
        iconColor: iconColorGreen,
      },
      payment: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
      finished: {
        iconBack: iconBgWhite,
        iconColor: iconColorWhite,
      },
    },
    {
      step: 'finished',
      bar1Completion: '100%',
      bar2Completion: '100%',
      bar3Completion: '100%',
      cart: {
        iconBack: iconBgGreen,
        iconColor: iconColorGreen,
      },
      address: {
        iconBack: iconBgGreen,
        iconColor: iconColorGreen,
      },
      payment: {
        iconBack: iconBgGreen,
        iconColor: iconBgGreen,
      },
      finished: {
        iconBack: iconBgGreen,
        iconColor: iconBgGreen,
      },
    },
  ];

  return (
    <div className="w-full py-6">
      <div className="flex">
        <div className="w-1/4">
          <div className="relative mb-2">
            {/*// @ts-ignore*/}
            <div className={styles[styleIndex].cart.iconBack}>
              {/*// @ts-ignore*/}
              <span className={styles[styleIndex].cart.iconColor}>
                <svg
                  className="w-full fill-current ml-1 mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                >
                  <path
                    d="M91.8,27.3L81.1,61c-0.8,2.4-2.9,4-5.4,4H34.4c-2.4,0-4.7-1.5-5.5-3.7L13.1,19H4c-2.2,0-4-1.8-4-4
	s1.8-4,4-4h11.9c1.7,0,3.2,1.1,3.8,2.7L36,57h38l8.5-27H35.4c-2.2,0-4-1.8-4-4s1.8-4,4-4H88c1.3,0,2.5,0.7,3.2,1.7
	C92,24.7,92.2,26.1,91.8,27.3z M36.4,70.3c-1.7,0-3.4,0.7-4.6,1.9c-1.2,1.2-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6
	c1.2,1.2,2.9,1.9,4.6,1.9s3.4-0.7,4.6-1.9c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6C39.8,71,38.1,70.3,36.4,70.3z M72.3,70.3
	c-1.7,0-3.4,0.7-4.6,1.9s-1.9,2.9-1.9,4.6c0,1.7,0.7,3.4,1.9,4.6c1.2,1.2,2.9,1.9,4.6,1.9c1.7,0,3.4-0.7,4.6-1.9
	c1.2-1.2,1.9-2.9,1.9-4.6c0-1.7-0.7-3.4-1.9-4.6S74,70.3,72.3,70.3z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Cart</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: `calc(100% - 2.5rem - 1rem)`,
                top: `50%`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  // @ts-ignore
                  style={{ width: styles[styleIndex].bar1Completion }}
                />
              </div>
            </div>

            {/*// @ts-ignore*/}
            <div className={styles[styleIndex].address.iconBack}>
              {/*// @ts-ignore*/}
              <span className={styles[styleIndex].address.iconColor}>
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Address</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: `calc(100% - 2.5rem - 1rem)`,
                top: `50%`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  // @ts-ignore
                  style={{ width: styles[styleIndex].bar2Completion }}
                />
              </div>
            </div>

            {/*// @ts-ignore*/}
            <div className={styles[styleIndex].payment.iconBack}>
              {/*// @ts-ignore*/}
              <span className={styles[styleIndex].payment.iconColor}>
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100.353 100.353"
                >
                  <g>
                    <path
                      d="M85.527,22.357H14.474c-3.676,0-6.666,2.989-6.666,6.662v4.357v9.384v28.219
		c0,3.675,2.99,6.664,6.666,6.664h71.053c3.676,0,6.666-2.989,6.666-6.664V42.76v-9.384v-4.357
		C92.193,25.346,89.203,22.357,85.527,22.357z M14.474,25.357h71.053c2.021,0,3.666,1.643,3.666,3.662v2.857H10.808v-2.857
		C10.808,26.999,12.453,25.357,14.474,25.357z M89.193,41.26H10.808v-6.384h78.385V41.26z M85.527,74.643H14.474
		c-2.021,0-3.666-1.644-3.666-3.664V44.26h78.385v26.719C89.193,72.999,87.549,74.643,85.527,74.643z"
                    />
                    <path
                      d="M21.036,59.875c-2.683,0-4.865,2.183-4.865,4.865s2.183,4.865,4.865,4.865s4.865-2.183,4.865-4.865
		S23.719,59.875,21.036,59.875z M21.036,66.605c-1.028,0-1.865-0.837-1.865-1.865s0.837-1.865,1.865-1.865s1.865,0.837,1.865,1.865
		S22.064,66.605,21.036,66.605z"
                    />
                    <path
                      d="M69.253,63.397H31.126c-0.829,0-1.5,0.672-1.5,1.5s0.671,1.5,1.5,1.5h38.127
		c0.828,0,1.5-0.672,1.5-1.5S70.081,63.397,69.253,63.397z"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Payment</div>
        </div>

        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: `calc(100% - 2.5rem - 1rem)`,
                top: `50%`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  // @ts-ignore
                  style={{ width: styles[styleIndex].bar3Completion }}
                />
              </div>
            </div>

            {/*// @ts-ignore*/}
            <div className={styles[styleIndex].finished.iconBack}>
              {/*// @ts-ignore*/}
              <span className={styles[styleIndex].finished.iconColor}>
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="text-xs text-center md:text-base">Finished</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
