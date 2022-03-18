import React from 'react';
import Socials from "../Contacts/Socials";

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-gray-900 text-white">
      <div className="justify-items-center pt-6">
        <Socials color={""}/>
      </div>

      <div className="justify-items-center p-4">© 2022 - FI-Sweets</div>
    </footer>
  );
};

export default Footer;
