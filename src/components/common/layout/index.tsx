import { FC, ReactNode } from 'react';
import Navbar from '@/components/common/navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;