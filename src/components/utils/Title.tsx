import React from 'react';

interface TitleProps {
  label: String;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <>
      <div className="py-6">
        <span className="font-bold font-pompiere text-3xl">{label}</span>
      </div>
    </>
  );
};

export default Title;
