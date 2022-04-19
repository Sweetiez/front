import React, { useState } from 'react';
import { DateTime } from 'luxon';

const CheckoutPayment: React.FC = () => {
  const [cardSide, setCardSide] = useState(true);
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardholder, setCardholder] = useState('Your Name');
  const [expiredMonth, setExpiredMonth] = useState('MM');
  const [expiredYear, setExpiredYear] = useState('YY');
  const [securityCode, setSecurityCode] = useState('');
  const cardYears = [];
  // Just to not write the same things over and over again
  const cardMonths = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  // Initialize card years expiration (may be changed in the future)
  for (let i = 0; i < 6; i++) {
    cardYears.push(DateTime.local().year + i);
  }

  function handleCardNumerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCardNumber(value);
  }

  return (
    <div className="grid grid-cols-6">
      <div className="col-start-3 col-end-5 xs:col-start-1 xs:col-end-7">
        <div
          className="credit-card w-full shadow-lg mx-auto rounded-xl bg-white flex flex-col"
          x-data="creditCard"
        >
          <header className="flex flex-col justify-center items-center">
            {cardSide ? (
              <div className="relative">
                <img
                  className="w-full h-auto"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                  alt="front credit card"
                />
                <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-24">
                  <p className="number mb-5 sm:text-xl">
                    {formatCardNumber(cardNumber)}
                  </p>
                  <div className="flex flex-row justify-between">
                    <p>{cardholder}</p>
                    <div className="">
                      <span x-text="expired.month">{expiredMonth}</span>
                      <span x-show="expired.month !== ''">/</span>
                      <span x-text="expired.year">{expiredYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <img
                  className="w-full h-auto"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                  alt=""
                />
                <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
                  <div className="border border-white w-16 h-9 flex justify-center items-center">
                    <p>{securityCode}</p>
                  </div>
                </div>
              </div>
            )}
          </header>
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Card payment
            </h1>
            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Card holder"
                  x-model="cardholder"
                  onSelect={() => setCardSide(true)}
                  onChange={(e) => setCardholder(e.target.value)}
                />
              </div>
              <div className="my-3">
                <input
                  type="tel"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Card number"
                  onSelect={() => setCardSide(true)}
                  maxLength={16}
                  onChange={(e) => handleCardNumerChange(e)}
                />
              </div>
              <div className="my-3 flex flex-col">
                <div className="mb-2">
                  <label className="text-gray-700">Expired</label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <select
                    name=""
                    id=""
                    className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    x-model="expired.month"
                    onChange={(e) => setExpiredMonth(e.target.value)}
                  >
                    <option value="" disabled>
                      MM
                    </option>
                    {cardMonths.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name=""
                    id=""
                    className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    onChange={(e) => setExpiredYear(e.target.value)}
                    defaultValue="YY"
                  >
                    <option value="" disabled>
                      YY
                    </option>
                    {cardYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    placeholder="Security code"
                    onSelect={() => setCardSide(false)}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-6 p-4">
            <button className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
              Pay now
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function verifyCardNumber(cardNumber: string) {
  const regex = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/;
  return regex.test(cardNumber);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function verifySecurityCode(securityCode: string) {
  const regex = /^[0-9]{3}$/;
  return regex.test(securityCode);
}

function formatCardNumber(cardNumber: string) {
  cardNumber = cardNumber.replace(/\s/g, '');
  return (
    cardNumber.substring(0, 4) +
    ' ' +
    cardNumber.substring(4, 8) +
    ' ' +
    cardNumber.substring(8, 12) +
    ' ' +
    cardNumber.substring(12, 16)
  );
}
