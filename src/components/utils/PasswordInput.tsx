import React, { useState } from 'react';

interface PasswordInputProps {
  id: string;
  label?: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  placeholder,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {label ? (
        <div className="pb-6">
          <span className="font-bold font-pompiere text-2xl">{label}</span>
        </div>
      ) : (
        <></>
      )}
      <div className="flex items-center">
        <input
          className="shadow appearance-none -mr-8 border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
          id={id}
          type={passwordShown ? 'text' : 'password'}
          placeholder={placeholder}
          required={true}
        />
        <svg
          style={!passwordShown ? { display: 'block' } : { display: 'none' }}
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={togglePassword}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>

        <svg
          style={passwordShown ? { display: 'block' } : { display: 'none' }}
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={togglePassword}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </div>
    </>
  );
};

export default PasswordInput;
