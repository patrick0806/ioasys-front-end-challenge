import styled from 'styled-components';
import imageBackGround from '../../assets/images/background-login.png';
import MobileImageBackGround from '../../assets/images/mobile-background-login.png';

export const Container = styled.div`
  background: url(${imageBackGround});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 0px;
    align-items: center;
    justify-content: center;
    background: url(${MobileImageBackGround});
    background-size: cover;
  }
`;

export const PageTitle = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 28px;
  display: flex;
  font-weight: 300;
  align-items: center;
  height: 30px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    width: 295px;
    margin-bottom: 20px;
  }
  &svg {
    padding-right: 5px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 368px;
  height: 225px;
  @media (max-width: 768px) {
    justify-content: space-around;
    width: 280px;
    height: 180px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;
