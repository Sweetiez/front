import React from 'react';
import getSvg from '../../assets/icons';

interface ButtonProps {
  label?: string;
  svg?: string;
  onClick?: () => void;
  disabled?:boolean;
  color?: string;
}

const LabelButton: React.FC<ButtonProps> = ({ label, svg, onClick, disabled=false, color }) => {
    const classicClass = "grid grid-flow-col auto-cols-max transform transition duration-200 hover:scale-105 r-0 items-center text-white font-bold text-xs px-3 py-1 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 h-8 "
    const className = classicClass+ (color ? color :  ' bg-gold-100')
    return (
    <>
      <button
        className={className}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-xs content-center mr-1">{label}</span>
        {svg && getSvg(svg)}
      </button>
    </>
  );
};

export default LabelButton;
