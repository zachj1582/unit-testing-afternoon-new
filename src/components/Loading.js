import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
}
100% {
     transform: translate3d(-50%, -50%, 0) rotate(360deg);
}
`;

const Spinner = styled.div`
  position: relative;
  height: 80px;
  opacity: 1;
  transition: opacity linear 0.1s;

  ::before {
    animation: 1.2s linear infinite ${rotate};
    border: solid 3px #eee;
    border-bottom-color: rgba(14, 182, 254, 1);
    border-radius: 50%;
    content: '';
    height: 60px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 60px;
    will-change: transform;
  }
`;

export default function Loading() {
  return <Spinner />;
}
