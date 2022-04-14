import styled from "styled-components";
import imageBackGround from "../../assets/images/background-login.png";
import MobileImageBackGround from "../../assets/images/mobile-background-login.png";

export const Container = styled.div`
  background: url(${imageBackGround});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    background: url(${MobileImageBackGround});
    background-size: cover;
  }
`;

export const PageTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  display: flex;
  font-weight: 300;
  width: 295px;
  align-items: center;
  height: 30px;
  margin-bottom: 20px;
  
  &svg {
    padding-right: 5px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 368px;
  @media (max-width: 768px) {
    width: 280px;
    height: 120px;
  }
`;
