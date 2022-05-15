import React from 'react';

interface TextButtonProps {
  setModalContent: () => void;
  label: String;
  small?: Boolean;
  underline?: Boolean;
  color?: String;
  bold?: Boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  setModalContent,
  label,
  small,
  underline,
  color,
  bold,
}) => {
  return (
    <>
      <button
        className={`${small ? 'text-sm' : ''} ${underline ? 'underline' : ''} ${
          color ? color : ''
        } ${
          bold ? 'font-semibold' : ''
        } background-transparent ml-1 outline-none hover:text-gold-100 focus:outline-none`}
        type="button"
        onClick={setModalContent}
      >
        {label}
      </button>
    </>
  );
};

export default TextButton;
