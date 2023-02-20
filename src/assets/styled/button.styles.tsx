import styled from 'styled-components';

export const StyledButton = styled.button`
  background-image: linear-gradient(
    to right,
    hsl(136, 65%, 51%),
    hsl(192, 70%, 51%)
  );
  font-weight: bold;
  color: white;
  font-size: 1.4rem;
  padding: 1.5rem 3.5rem;
  border-radius: 9999px;

  &:hover {
    background-image: linear-gradient(
      to top right,
      rgba(49, 211, 92, 0.5),
      rgba(43, 183, 218, 0.5)
    );
  }
`;
