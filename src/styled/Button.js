import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5em;
  border: ${({ noborder }) =>
    noborder ? '1px solid transparent' : '1px solid black'};
  color: ${({ color = 'white' }) => color};
  position: ${({ position = 'initial' }) => position};
  font-size: 1.2em;
  letter-spacing: 0.2em;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
  margin: ${({ margin = '0' }) => margin};
`;

export const StyledLink = styled(Button)`
  text-decoration: none;
  :hover {
    border-bottom: 1px solid #2aabe2;
  }
  outline: none;
`;

export default Button;
