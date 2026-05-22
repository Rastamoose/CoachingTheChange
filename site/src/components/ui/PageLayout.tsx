import type { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-lato">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
