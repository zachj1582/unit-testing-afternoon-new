import React from 'react';
import styled from 'styled-components';
import Div from '../styled/Div';

const StatsWidget = ({ totalPostCount, totalWordCount }) => {
  return (
    <StatContainer data-testid="stats-widget" flexed direction="column">
      <p>Post count: {totalPostCount}</p>
      <p>Total word count: {totalWordCount}</p>
    </StatContainer>
  );
};

const StatContainer = styled(Div)`
  position: absolute;
  right: 1.5em;
  top: 1.5em;
  border: 1px solid black;
`;

export default StatsWidget;
