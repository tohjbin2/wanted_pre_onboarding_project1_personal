import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

function Main() {
  return (
    <MainPage>
      <MainSection>
        <BtnSection>
          <FirstCalLink to="/first">
            <FirstCalBtn>First</FirstCalBtn>
          </FirstCalLink>
          <SecondCalLink to="/second">
            <SecondCalBtn>Second</SecondCalBtn>
          </SecondCalLink>
        </BtnSection>
      </MainSection>
    </MainPage>
  );
}

export default Main;

const Btn = css`
  width: 100px;
  height: 40px;
  font-size: 18px;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border: solid 1px black;
`;

const BtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const FirstCalLink = styled(Link)``;

const FirstCalBtn = styled.button`
  ${Btn}
`;

const SecondCalLink = styled(Link)``;

const SecondCalBtn = styled.button`
  ${Btn}
`;
