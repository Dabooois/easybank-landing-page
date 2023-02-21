import styled from 'styled-components';
import tw from 'twin.macro';
// w-full
// grid
// grid-cols-2
// lg:grid-cols-3
// items-center
// px-[3rem]
// py-[2rem]
// items-center
export const HeaderWrapper = tw.header`
    w-full
    shadow-lg
    absolute
    lg:static
    top-0 
    left-0 
    bg-white 
    z-40 
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;
  gap: 4rem;

  @media (min-width: 768px) {
    padding-block: 0;
    grid-template-columns: repeat(3, max-content);
  }

  @media (min-width: 1024px) {
    .container {
      padding-inline: 10rem;
    }
  }
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
type TNav = {
  isNav: boolean | false;
};

export const Navigation = styled.nav<TNav>`
  ul {
    li {
      border-bottom-width: 2px;
      border-image-slice: 1;
      border-bottom: 2px solid transparent;

      &:hover {
        color: ${({ isNav }) => (isNav ? '' : 'hsl(136, 65%, 51%)')};
        border-image-source: ${({ isNav }) =>
          isNav
            ? 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))'
            : ''};
      }
    }
  }
`;
