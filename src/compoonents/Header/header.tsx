import React, { useState } from 'react';
import {
  HeaderContainer,
  LogoContainer,
  HamBurgerMenu,
  Overlay,
} from './header.style';
import LogoIcon from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import tw from 'twin.macro';
import { ButtonStyle } from '../Button/button.styles';

const HeaderButton = tw(ButtonStyle)`
  hidden
  md:block
  mx-auto
  py-4 px-12 
  rounded-full
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <HeaderContainer className='shadow-lg absolute top-0 left-0 bg-white z-40'>
        <img src={LogoIcon} alt='easybank logo ' className='bg-white' />

        <nav
          className={`${
            toggle ? 'block ' : 'hidden'
          } absolute container  max-w-full top-40 left-0 z-20 `}
        >
          <ul className='bg-white rounded-lg flex flex-col items-center gap-4 py-8 text-normal text-darkBlue'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
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
          </ul>
        </nav>
        <HeaderButton>Request Invites</HeaderButton>
        <HamBurgerMenu
          className={` ${toggle ? 'open' : ''} block md:hidden`}
          onClick={() => setToggle((toggle) => !toggle)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </HamBurgerMenu>
      </HeaderContainer>
      <Overlay active={!toggle} />
    </React.Fragment>
  );
};

export default Header;
