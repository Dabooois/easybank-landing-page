import tw from 'twin.macro';
import styled from 'styled-components';
export const Paragraph = tw.p`
    text-center
    text-normal
    font-customThin
    text-greyishBlue
    md:text-center
    lg:text-left
`;

interface ITitle {
  subtitle?: boolean | false;
  as?: string;
}
export const Title = styled.h1<ITitle>`
  text-align: center;
  font-size: ${({ subtitle }) => (subtitle ? '3.8rem' : '4.3rem')};
  line-height: 1.25;
  color: hsl(233, 26%, 24%);
  @media (min-width: 640px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`;
