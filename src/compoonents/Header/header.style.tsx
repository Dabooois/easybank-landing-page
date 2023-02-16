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

  span {
    width: 100%;
    border: 1px solid black;
    position: absolute;
    left: 0;
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

type TActive = {
  active?: boolean | false;
};

export const Overlay = styled.div<TActive>`
  position: fixed;
  display: ${({ active }) => (active ? 'none' : 'block')};
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background-color: #0009;
  z-index: 10;
  cursor: pointer;
`;
