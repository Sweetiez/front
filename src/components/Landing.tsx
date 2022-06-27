import Page from './Page/Page';
import NavMenu from './NavMenu/NavMenu';
import Shop from './Shop/Shop';
import React from 'react';

const Landing: React.FC = () => {
  return (
    <Page>
      <NavMenu />
      <Shop />
    </Page>
  );
};

export default Landing;
