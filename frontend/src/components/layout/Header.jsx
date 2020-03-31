import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { HeaderCard } from '../functions/HeaderCard';

// Modals
import { CurrencyModal } from '../modals/CurrencyModal';
import { LanguageModal } from '../modals/LanguageModal';

import { RegisterModal } from '../modals/RegisterModal';
import { HelpModal } from '../modals/HelpModal';

import { OptionModal } from '../modals/OptionModal.jsx';

// Images
const background = require('../../../public/img/high/airbnb-background.jpg');

// interface Props {
//   switchMenuModal: () => void;
// }

export const Header = ({ switchMenuModal }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false);
  const [optionModal, setOptionModal] = useState(false);
  const [currency, setCurrency] = useState({ sign: '$', name: 'CAD' });

  const [languageModal, setLanguageModal] = useState(false);
  const [currencyModal, setCurrencyModal] = useState(false);
  // const [currency, setCurrency] = useState('$ CAD');

  const switchCurrencyModal = () => {
    setCurrencyModal(!currencyModal);
  };

  const switchLanguageModal = () => {
    setLanguageModal(!languageModal);
  };

  const [type, setType] = useState('');

  const switchRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const switchHelpModal = () => {
    setHelpModal(!helpModal);
  };

  const switchOptionModal = () => {
    setOptionModal(!optionModal);
  };

  const switchType = (type) => {
    setType(type);
  };

  const switchCurrency = (currency) => {
    setCurrency(currency);
  };

  const configureScroll = (name) => {
    document.body.style.overflow = name;
  };

  return (
    <header
      style={{
        backgroundImage: `url(${background})`,
        maxHeight: '80rem'
      }}
      className='w-screen md:h-screen md:min-h-80 relative bg-cover bg-no-repeat'>
      <div className='max-w-10.5xl mx-auto'>
        <div className='h-20 flex flex-wrap items-center justify-between'>
          <div className='flex items-center'>
            <a href='/'>
              <svg
                width='102'
                height='32'
                role='presentation'
                aria-hidden='true'
                focusable='false'
                style={{ fill: '#ffffff' }}
                className='h-full w-full block'>
                <path d='M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z'></path>
              </svg>
            </a>
          </div>
          <div className='lg:hidden ml-6 mt-6 flex items-center'>
            <button
              className='flex items-center'
              onClick={() => {
                switchMenuModal();
              }}>
              <svg
                viewBox='0 0 1000 1000'
                role='presentation'
                aria-hidden='true'
                focusable='false'
                className='h-8 w-8 block'
                style={{ fill: '#ffffff' }}>
                <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
              </svg>
              <div className='h-2 w-2 ml-2'>
                <svg
                  className='h-full w-full'
                  style={{ fill: '#ffffff' }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 491.996 491.996'>
                  <g>
                    <g>
                      <path
                        d='M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z'
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div className='hidden lg:block relative'>
            <nav
              style={{ fontFamily: 'airbnb-medium' }}
              className='flex items-center justify-around flex-wrap text-white'>
              <NavItem>
                <button
                  onClick={() => switchOptionModal()}
                  className='py-3 px-2 rounded-full'>
                  <div className='flex items-center justify-start text-sm mx-2'>
                    <div className='w-4'>
                      <svg
                        className='block relative w-full h-full'
                        aria-hidden='true'
                        style={{ fill: '#ffffff', right: 5 }}
                        viewBox='0 0 16 16'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M7.99985 0.349976C3.78135 0.349976 0.349854 3.78148 0.349854 7.99998C0.349854 12.2185 3.78135 15.65 7.99985 15.65C12.2184 15.65 15.6499 12.2185 15.6499 7.99998C15.6499 3.78148 12.2184 0.349976 7.99985 0.349976ZM1.68285 8.64997H3.86735C3.90085 9.42497 3.99535 10.1625 4.14085 10.85H2.33335C1.98351 10.1627 1.76301 9.41698 1.68285 8.64997ZM8.74985 3.84998V1.90748C9.25785 2.24998 9.74385 2.92348 10.1204 3.84998H8.74985ZM10.5274 5.14998C10.6859 5.81348 10.7954 6.54998 10.8339 7.34998H8.74985V5.14998H10.5274ZM7.24985 1.90748V3.84998H5.87985C6.25585 2.92348 6.74235 2.24998 7.24985 1.90748ZM7.24985 5.14998V7.34998H5.16585C5.20435 6.54998 5.31385 5.81348 5.47235 5.14998H7.24985ZM3.86735 7.34998H1.68285C1.76285 6.56498 1.99285 5.82498 2.33285 5.14998H4.14085C3.98937 5.87454 3.89789 6.61037 3.86735 7.34998ZM5.16585 8.64997H7.24985V10.85H5.47235C5.30192 10.1278 5.1993 9.39125 5.16585 8.64997ZM7.24985 12.15V14.0925C6.74235 13.7495 6.25585 13.0765 5.87985 12.15H7.24985ZM8.74985 14.0925V12.15H10.1204C9.74385 13.0765 9.25785 13.75 8.74985 14.0925ZM8.74985 10.85V8.64997H10.8339C10.8004 9.39125 10.6978 10.1278 10.5274 10.85H8.74985ZM12.1324 8.64997H14.3169C14.2369 9.43497 14.0069 10.175 13.6669 10.85H11.8589C12.0044 10.1625 12.0989 9.42497 12.1324 8.64997ZM12.1324 7.34998C12.1018 6.61037 12.0103 5.87454 11.8589 5.14998H13.6664C14.0074 5.82498 14.2364 6.56498 14.3169 7.34998H12.1324ZM12.7954 3.84998H11.5014C11.3192 3.31162 11.0813 2.7938 10.7914 2.30498C11.5556 2.68104 12.2369 3.20638 12.7949 3.84998H12.7954ZM5.20835 2.30498C4.91844 2.7938 4.68047 3.31162 4.49835 3.84998H3.20485C3.76298 3.20632 4.44439 2.68099 5.20885 2.30498H5.20835ZM3.20485 12.15H4.49935C4.69735 12.7245 4.93635 13.242 5.20935 13.695C4.44453 13.3191 3.76278 12.7937 3.20435 12.15H3.20485ZM10.7919 13.695C11.0818 13.2061 11.3197 12.6883 11.5019 12.15H12.7959C12.2377 12.7936 11.5563 13.319 10.7919 13.695Z' />
                      </svg>
                    </div>
                    <div className='h-2 w-2'>
                      <svg
                        className='h-full w-full'
                        style={{ fill: '#ffffff' }}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 491.996 491.996'>
                        <g>
                          <g>
                            <path
                              d='M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z'
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
              </NavItem>
              <NavItem>
                <div className='mx-2 flex items-center justify-center py-3 px-2'>
                  <Link href='/host/homes'>
                    <a className='text-sm  tracking-wide'>Host your home</a>
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className='mx-2 flex items-center justify-center py-3 px-2'>
                  <Link href='/host/experiences'>
                    <a className='text-sm  tracking-wide'>Host an experience</a>
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className='mx-2 flex items-center justify-center py-3 px-2'>
                  <button
                    onClick={() => setHelpModal(!helpModal)}
                    className='text-sm  tracking-wide'>
                    Help
                  </button>
                </div>
              </NavItem>
              <NavItem>
                <div className='mx-2 flex items-center justify-center py-3 px-2'>
                  <button
                    onClick={() => {
                      switchType('Log in');
                      switchRegisterModal();
                    }}
                    className='text-sm tracking-wide'>
                    Log in
                  </button>
                </div>
              </NavItem>
              <SignUp>
                <div className='mx-2 flex items-center justify-center py-3 px-2'>
                  <button
                    onClick={() => {
                      switchType('Sign up');
                      switchRegisterModal();
                    }}
                    className='text-sm  tracking-wide'>
                    Sign up
                  </button>
                </div>
              </SignUp>
            </nav>
            {optionModal & !languageModal & !currencyModal ? (
              <>
                <div style={{ left: -140, top: 60 }} className='absolute z-50'>
                  <OptionModal
                    switchLanguageModal={switchLanguageModal}
                    switchCurrencyModal={switchCurrencyModal}
                    currency={currency}
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div>
          <h3 className='md:hidden px-4 pb-4 pt-16 text-white inline-block font-sans text-3xl font-bold leading-tight w-5/6'>
            Book unique places to stay and things to do.
          </h3>
          <HeaderCard />
        </div>
      </div>

      {registerModal ? (
        <>
          {typeof window !== 'undefined' ? configureScroll('hidden') : null}
          {type == 'Log in' ? (
            <RegisterModal
              setRegisterModal={setRegisterModal}
              type='Log in'
              nottype='Sign up'
              phrase={`Don\'t`}
              setType={switchType}
            />
          ) : (
            <RegisterModal
              setRegisterModal={setRegisterModal}
              type='Sign up'
              nottype='Log in'
              phrase='Already'
              setType={switchType}
            />
          )}
        </>
      ) : (
        <>{typeof window !== 'undefined' ? configureScroll('auto') : null}</>
      )}
      {helpModal ? <HelpModal setHelpModal={switchHelpModal} /> : null}
      {currencyModal ? (
        <>
          {typeof window !== 'undefined' ? configureScroll('hidden') : null}
          <CurrencyModal
            location='Canada'
            setCurrencyModal={switchCurrencyModal}
            setCurrency={switchCurrency}
          />
        </>
      ) : null}
      {languageModal ? (
        <>
          {typeof window !== 'undefined' ? configureScroll('hidden') : null}
          <LanguageModal
            location='Canada'
            setLanguageModal={switchLanguageModal}
          />
        </>
      ) : null}
    </header>
  );
};

const NavItem = styled.div`
  background-color: transparent;
  &:hover {
    background-color: rgb(206, 206, 206, 0.2);
  }
  border-radius: 9999rem;
`;

const SignUp = styled.div`
  border-radius: 9999rem;
  background: rgb(84, 79, 79);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 4px;

  &:hover {
    box-shadow: 5px 15px 15px -12px rgba(0, 0, 0, 0.6);
    transition: 0.2s ease 0s;
  }
`;