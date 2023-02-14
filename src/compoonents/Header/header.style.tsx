import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
  padding-block: 2rem;
`;

export const LogoContainer = tw.div`
    bg-slate-400
`;

export const HamBurgerMenu = styled.button`
  width: 2.5rem;
  height: 3rem;
  cursor: pointer;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  span {
    width: 100%;
    position: absolute;
    left: 0;
    border: 1px solid black;
    margin: auto 0;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0.7rem;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 1.4rem;
    }
    &:nth-child(4) {
      top: 2.1rem;
    }
  }
`;
