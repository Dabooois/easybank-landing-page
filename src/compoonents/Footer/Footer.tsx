import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Youtube } from '../../assets/images/icon-youtube.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as IG } from '../../assets/images/icon-instagram.svg';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className='relative top-[21rem] bg-darkBlue flex flex-col items-center gap-12 py-16'>
      <LogoIcon className='icon-bike text-white bg-transparent mx-auto  text-regular' />
      <div className='icons flex gap-8 items-center justify-center'>
        <Facebook />
        <Youtube />
        <Twitter />
        <Pinterest />
        <IG />
      </div>

      <nav>
        <ul className='flex flex-col gap-4 text-lightGreyishBlue text-normal text-center'>
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
      <Button />
      <p className='text-normal text-greyishBlue'>
        &#169; Easybank. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
