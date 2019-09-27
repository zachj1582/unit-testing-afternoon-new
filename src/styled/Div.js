import styled from 'styled-components';

const Div = styled.div`
  padding: ${({ padding = '1.5em' }) => padding};
  background-color: ${({ filled, theme }) =>
    filled ? theme[filled] : theme.clear};
  position: ${({ position = 'initial' }) => position};
  ${({
    flexed,
    justify = 'initial',
    align = 'initial',
    direction = 'row',
    wrap = 'nowrap',
  }) =>
    flexed
      ? `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        flex-wrap: ${wrap};
        `
      : ''};
`;

export default Div;
