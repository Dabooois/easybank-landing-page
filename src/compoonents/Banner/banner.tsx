import React from 'react';
import { BannerSection } from './banner.style';

import ImageMockups from '../../assets/images/image-mockups.png';
import Button from '../Button/Button';
import { Paragraph, Title } from '../../assets/styled/styled';

const Banner = () => {
  return (
    <section className='relative  mb-20  top-[-5rem]'>
      <BannerSection className='container'>
        <img src={ImageMockups} alt='easy bank mobile bank ' />
      </BannerSection>

      <div className='container flex flex-col gap-10'>
        <Title>Next generation digital banking</Title>
        {/* <h1 className='text-center text-title leading-tight text-darkBlue'></h1> */}
        <Paragraph className='mt-4'>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving budgeting, investing and much more.
        </Paragraph>

        <Button />
      </div>
    </section>
  );
};

export default Banner;
