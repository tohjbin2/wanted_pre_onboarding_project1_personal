import React from 'react';
import styled, { css } from 'styled-components';

const dropContents = [
  { name: 'USD' },
  { name: 'CAD' },
  { name: 'KRW' },
  { name: 'JPY' },
  { name: 'CNY' },
];

function SecondCalculator() {
  return (
    <SecondCalPage>
      <SecondCal>
        <TopSection>
          <InputNum />
          <ExchangeRateDrop>
            <DropDown>
              {dropContents.map((contents, key) => {
                return <option key={key}> {contents.name} </option>;
              })}
            </DropDown>
          </ExchangeRateDrop>
        </TopSection>
        <BottomSection />
      </SecondCal>
    </SecondCalPage>
  );
}

export default SecondCalculator;

const TopStyle = css`
  width: 100px;
  height: 40px;
  margin-top: 40px;
  border: solid 4px black;
  font-size: 18px;
  font-weight: 600;
`;
const SecondCalPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const SecondCal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 350px;
  border: solid 6px black;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

const InputNum = styled.input`
  ${TopStyle}
`;

const ExchangeRateDrop = styled.div`
  ${TopStyle}
`;

const BottomSection = styled.div`
  width: 250px;
  height: 200px;
  margin-bottom: 40px;
  border: solid 4px black;
`;

const DropDown = styled.select`
  /* display: none; */
  width: 100px;
  height: 40px;
  border-style: none;
  :hover {
    background-color: gray;
  }
`;

const DropContents = styled.li`
  :hover {
    display: block;
    background-color: gray;
    color: white;
  }
`;
