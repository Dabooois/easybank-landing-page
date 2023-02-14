import React from 'react';
import { BannerSection } from './banner.style';

import ImageMockups from '../../assets/images/image-mockups.png';
import Button from '../Button/Button';

const Banner = () => {
  return (
    <section className='absolute top-0 mt-[-6.5rem]'>
      <BannerSection className='container'>
        <img src={ImageMockups} alt='easy bank mobile bank' className='' />
      </BannerSection>

      <div className='container flex flex-col gap-10'>
        <h1 className=' text-center text-[4rem] leading-tight text-darkBlue'>
          Next generation digital banking
        </h1>

        <p className='text-center text-[1.6rem] font-customThin mt-4 text-greyishBlue'>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving budgeting, investing and much more.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Banner;
