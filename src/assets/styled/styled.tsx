import tw from 'twin.macro';
import styled from 'styled-components';
export const Paragraph = tw.p`
    text-center
    text-normal
    font-customThin
    text-greyishBlue
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
`;
