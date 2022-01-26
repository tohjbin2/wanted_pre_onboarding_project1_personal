import React from 'react';
import styled from 'styled-components';

function FirstCalculator() {
  return (
    <FirstCalPage>
      <FirstCal />
    </FirstCalPage>
  );
}

export default FirstCalculator;

const FirstCalPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FirstCal = styled.div``;
