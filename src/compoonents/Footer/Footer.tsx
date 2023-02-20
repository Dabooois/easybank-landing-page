import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/images/logo-footer.svg';

import { ReactComponent as IG } from '../../assets/images/icon-instagram.svg';
import { StyledButton } from '../Button/button.styles';
import { Navigation } from '../Header/header.style';
import { FaceBook, Youtube, Twitter, Pinterest } from './footer.styles';
// hover:fill-[#31d35c]
const Footer = () => {
  return (
    <footer className=' relative bg-darkBlue '>
      <div className='container grid md:grid-cols-footer items-center gap-12 py-16'>
        <div className='icons flex  flex-col  gap-12  '>
          <LogoIcon className='icon-bike mx-auto md:mx-0  text-regular' />
          <div className='flex flex-row gap-4 items-center justify-center md:justify-start '>
            <FaceBook className='cursor-pointer' />
            <Youtube className='cursor-pointer' />
            <Twitter className='cursor-pointer' />
            <Pinterest className='cursor-pointer' />
            <IG />
          </div>
        </div>
        <Navigation>
          <ul className='grid gap-4 md:grid-rows-3 md:grid-flow-col text-lightGreyishBlue text-normal text-center md:text-justify'>
            <li className='mr-auto'>
              <a href='#'>About Us</a>
            </li>
            <li className='mr-auto'>
              <a href='#'>Contact</a>
            </li>
            <li className='mr-auto'>
              <a href='#'>Blog</a>
            </li>
            <li className='mr-auto'>
              <a href='#'>Careers</a>
            </li>
            <li className='mr-auto'>
              <a href='#'>Support</a>
            </li>
            <li className='mr-auto'>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </Navigation>
        <div className='flex flex-col gap-12 '>
          <StyledButton className='mx-auto md:mr-0'>
            Request Invites
          </StyledButton>
          <p className='text-normal text-center md:text-right text-greyishBlue md:text-[1.4rem] lg:text-normal'>
            &#169; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
