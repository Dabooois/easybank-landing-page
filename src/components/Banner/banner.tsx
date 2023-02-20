import React from 'react';

import BannerMobile from '@assets/images/bg-intro-mobile.svg';
import BannerDesktop from '@assets/images/bg-intro-desktop.svg';
import ImageMockups from '@assets/images/image-mockups.png';

import { Paragraph, Title } from '@assets/styled/styled';
import { StyledButton } from '@assets/styled/button.styles';

const Banner = () => {
  return (
    <section className='lg:container lg:grid lg:gap-16 lg:grid-cols-bannerlg xl:grid-cols-banner2xl 2xl:grid-cols-banner2xl mb-64 lg:mb-0 mx-auto overflow-hidden'>
      <div className='  relative order-2 overflow-hidden'>
        <div>
          <img
            src={ImageMockups}
            alt='easybank mobile mockups'
            className='mt-[-6.5rem] sm:mt-[-16rem] md:mt-[-32rem] lg:mt-[-13rem] pb-32 lg:pb-64 relative z-[-1] lg:z-40 2xl:mt-[-12rem] 2xl:right-[-19rem]  mx-auto'
          />
        </div>
        <img
          src={BannerMobile}
          alt='easybank mobile banner'
          className='block lg:hidden absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[-10]  '
        />

        <img
          src={BannerDesktop}
          alt='easybank mobile banner'
          className='hidden lg:block  absolute top-0 bottom-0 2xl:right-[-12rem] w-full h-full z-[-10] mt-[-22rem]  '
        />
      </div>
      <div className='flex justify-center '>
        <div className='flex flex-col gap-8 justify-center 2xl:pr-[8rem] xl:pr-[8rem]  2xl:mt-[-32rem] xl:mt-[-32rem] lg:mt-[-32rem]  sm:max-w-[60rem] md:max-w-[60rem] md:mx-auto sm:mx-auto md:text-center sm:text-center lg:text-left'>
          <Title>Next generation digital banking</Title>
          <Paragraph className='mt-4'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </Paragraph>
          <StyledButton className='mx-auto lg:ml-0 mt-4'>
            Request Invites
          </StyledButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
