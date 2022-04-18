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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background});
  background-size: cover;
  overflow-x: hidden;
`;

export const Menu = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 135px 135px 135px;
  grid-gap: 15px;
  height: 500px;
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
