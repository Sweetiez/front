import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 z-40 min-w-full h-8 container bg-beige-100 shadow">
        <div className="grid grid-cols-6 justify-between items-center h-full">
          <div className="invisible md:visible lg:visible xl:visible z-50 col-start-4 ">
            <Link to={'/'}>
              <img
                className="object-cover -ml-16 w-32 h-32 rounded-full shadow"
                src="https://media.discordapp.net/attachments/548183152376545306/955953631805452349/logo.jpg"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
