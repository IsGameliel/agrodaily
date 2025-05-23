'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex items-center justify-between w-full mb-1 pt-3'>
      {/* Logo on the left */}
      <Link href="/" className='flex gap-2 flex-center logo'>
        AgroDaily
      </Link>

      {/* Hamburger for mobile */}
      <div className='sm:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-2xl'>
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icons */}
        </button>
      </div>

      {/* Centered menu for desktop */}
      <div className='hidden sm:flex flex-1 justify-center'>
        <div className='flex gap-5'>
          <Link href='/' className=''>
            Product
          </Link>
          <Link href='/market' className=''>
            Market place
          </Link>
          <Link href='/community' className=''>
            Community
          </Link>
          <Link href='/resources' className=''>
            Resources
          </Link>
          <Link href='/pricing' className=''>
            Pricing
          </Link>
          <Link href='/contact' className=''>
            Contact
          </Link>
        </div>
      </div>

      {/* Sign In/Sign Up on the right (desktop) */}
      <div className='hidden sm:flex gap-5'>
        {isUserLoggedIn ? (
          <Link href='/profile' className='auth_btn'>
            Profile
          </Link>
        ) : (
          <>
            <Link href='/signin' className='auth_btn'>
              Sign In
            </Link>
            <Link href='/signup' className='auth_btn'>
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white shadow-md p-6 sm:hidden z-50 mobile_menu'>
          {/* Close button */}
          <button 
            onClick={toggleMenu} 
            className='absolute top-4 right-4 text-3xl hover:rotate-90 transition-transform duration-300 ease-in-out'>
            <FaTimes />
          </button>
          
          <div className='flex flex-col gap-4 mt-12 mobile_menu'>
            <Link href='/' className='' onClick={toggleMenu}>
              Products
            </Link>
            <Link href='/market' className='' onClick={toggleMenu}>
              Market place
            </Link>
            <Link href='/community' className='' onClick={toggleMenu}>
              Community
            </Link>
            <Link href='/resources' className='' onClick={toggleMenu}>
              Resources
            </Link>
            <Link href='/pricing' className='' onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href='/contact' className='' onClick={toggleMenu}>
              Contact
            </Link>
            {isUserLoggedIn ? (
              <Link href='/profile' className='auth_btn' onClick={toggleMenu}>
                Profile
              </Link>
            ) : (
              <>
                <Link href='/signin' className='auth_btn' onClick={toggleMenu}>
                  Sign In
                </Link>
                <Link href='/signup' className='auth_btn' onClick={toggleMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
