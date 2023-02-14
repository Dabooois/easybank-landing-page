import React, { useState } from 'react';
import { HeaderContainer, LogoContainer, HamBurgerMenu } from './header.style';
import LogoIcon from '../../assets/images/logo.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderContainer className='shadow-lg'>
      <LogoContainer>
        <img src={LogoIcon} alt='easybank logo ' className='bg-white' />
      </LogoContainer>
      <HamBurgerMenu
        className={` ${toggle ? 'open' : ''} `}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </HamBurgerMenu>
    </HeaderContainer>
  );
};

export default Header;
