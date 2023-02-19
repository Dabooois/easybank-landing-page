import styled from 'styled-components';
import BannerMobile from '../../assets/images/bg-intro-mobile.svg';
import BannerDesktop from '../../assets/images/bg-intro-desktop.svg';
export const BannerSection = styled.div`
  background-image: url(${BannerMobile});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  /* z-index: -40;
  height: 52rem;

  @media (min-width: 400px) {
    height: 58rem;
  }

  @media (min-width: 640px) {
    height: 100%;
  }

  @media (min-width: 768px) {
    background-position: unset;
    background-repeat: unset;
    background-image: url(${BannerDesktop});
  } */
`;
