import React, { ReactNode } from 'react';
import '@styles/globals.css';
import '@styles/mobile.css';
import Nav from './components/Nav';

export const metadata = {
  title: 'Agrodaily',
  description: 'The new tech in agriculture',
};

interface LayoutProps {
  children: ReactNode; // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Agrodaily</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gradient">
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
