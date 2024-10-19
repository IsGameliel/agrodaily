import React from 'react';
import '@styles/globals.css'

export const metadata = {
  title: 'Agrodaily',
  description: 'The new tech in agriculture'
}

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Agrodaily</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gradient">
        <nav>
          
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
