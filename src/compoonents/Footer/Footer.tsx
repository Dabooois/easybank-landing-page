import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/images/logo-footer.svg';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Youtube } from '../../assets/images/icon-youtube.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as IG } from '../../assets/images/icon-instagram.svg';
import Button from '../Button/Button';
import { StyledButton } from '../Button/button.styles';

const Footer = () => {
  return (
    <footer className=' relative bg-darkBlue '>
      <div className='container grid md:grid-cols-footer items-center gap-12 py-16'>
        <div className='icons flex  flex-col  gap-12  '>
          <LogoIcon className='icon-bike mx-auto md:mx-0  text-regular' />
          <div className='flex flex-row gap-4 items-center justify-center md:justify-start '>
            <Facebook className='cursor-pointer' />
            <Youtube className='cursor-pointer' />
            <Twitter className='cursor-pointer' />
            <Pinterest className='cursor-pointer' />
            <IG />
          </div>
        </div>
        <nav>
          <ul className='grid gap-4 md:grid-rows-3 md:grid-flow-col text-lightGreyishBlue text-normal text-center md:text-justify'>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </nav>
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
