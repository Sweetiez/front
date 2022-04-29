import { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageProps {
  children: React.ReactElement | ReactElement[];
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
