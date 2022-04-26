import styled from "styled-components";
import background from "../../assets/images/background.png";

export const PageTitle = styled.h1`
  color: #333333;
  font-size: 28px;
  display: flex;
  font-weight: 300;
  align-items: center;
  height: 30px;

  @media (max-width: 768px) {
    width: 295px;
  }
`;

export const Background = styled.div`
  background: url(${background});
  background-size: cover;
  @media (max-width: 768px) {
    background-repeat: repeat-y;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "cards";
  grid-template-rows: 200px auto;
  grid-template-columns: calc(100vw - 200px);
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-rows: 100px auto;
    grid-template-columns: calc(100% - 15px);
  }
`;

export const Menu = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BooksContainer = styled.div`
  width: 90%;
  grid-area: cards;
  display: grid;
  grid-template-rows: 135px 135px 135px;
  grid-template-columns: repeat(auto-fill, minmax(298px, 1fr));
  grid-gap: 25px;
  justify-items: center;
    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const User = styled.div`
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;