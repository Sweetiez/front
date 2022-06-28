import React from 'react';
import Socials from "../Contacts/Socials";
import frenchFlag from './../../assets/icons/frenchFlag.png'
import englishFlag from './../../assets/icons/englishFlag.png'
import i18n from "i18next";

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-gray-900 text-white">
      <div className="grid place-items-center justify-items-center pt-6">
        <Socials color={""}/>
      </div>
        <div className="flex justify-center mt-3">
            <img src={frenchFlag} alt="French Flag" style={{width:'25px', height:'15px'}} className="mr-2"
            onClick={() => i18n.changeLanguage('fr-FR')}/>
            <img src={englishFlag} alt="English Flag" style={{width:'25px', height:'15px'}}
                 onClick={() => i18n.changeLanguage('en-EN')}/>
        </div>
      <div className="justify-items-center p-4">© 2022 - FI-Sweets</div>
    </footer>
  );
};

export default Footer;
