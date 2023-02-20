import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderWrapper,
  Navigation,
  HamBurgerMenu,
  Overlay,
} from '@assets/styled/header.styles';
import LogoIcon from '@assets/images/logo.svg';
import tw from 'twin.macro';
import { StyledButton } from '@assets/styled/button.styles';

const HeaderButton = tw(StyledButton)`
  hidden
  md:block
  mx-auto
  py-4
  px-12 
  rounded-full
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <HeaderWrapper>
        <HeaderContainer className='container'>
          <img src={LogoIcon} alt='easybank logo ' className='bg-white' />
          <Navigation
            className={`${
              toggle ? 'block ' : 'hidden'
            }  absolute container   max-w-full top-40 left-0  z-50 md:static md:flex  lg:gap-16`}
          >
            <ul className='bg-white rounded-lg flex flex-col md:flex-row items-center gap-8 py-8 md:py-0  text-normal text-darkBlue'>
              <li className='md:py-8 py-0'>
                <a href='#'>Home</a>
              </li>
              <li className='md:py-8 py-0'>
                <a href='#'>About</a>
              </li>
              <li className='md:py-8 py-0'>
                <a href='#'>Contact</a>
              </li>
              <li className='md:py-8 py-0'>
                <a href='#'>Blog</a>
              </li>
              <li className='md:py-8 py-0'>
                <a href='#'>Careers</a>
              </li>
            </ul>
          </Navigation>
          <HeaderButton>Request Invites</HeaderButton>
          <HamBurgerMenu
            className={` sm:block ${toggle ? 'open' : ''} md:hidden `}
            onClick={() => setToggle((toggle) => !toggle)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </HamBurgerMenu>
        </HeaderContainer>
      </HeaderWrapper>
      <Overlay active={!toggle} />
    </React.Fragment>
  );
};

export default Header;
