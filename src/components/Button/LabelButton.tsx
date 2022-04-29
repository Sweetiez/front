import React from 'react';
import getSvg from '../../assets/icons';

interface ButtonProps {
  label?: string;
  svg?: string;
  onClick?: () => void;
}

const LabelButton: React.FC<ButtonProps> = ({ label, svg, onClick }) => {
  return (
    <>
      <button
        className="grid grid-flow-col auto-cols-max transform transition duration-200 hover:scale-105 r-0 bg-gold-100 items-center text-white font-bold text-xs px-3 py-1 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 h-8"
        type="button"
        onClick={onClick}
      >
        <span className="text-xs content-center">{label}</span>
        {svg && getSvg(svg)}
      </button>
    </>
  );
};

export default LabelButton;
