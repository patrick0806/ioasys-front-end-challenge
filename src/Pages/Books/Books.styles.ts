import styled from 'styled-components';
import background from '../../assets/images/background.png';

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
    'header'
    'cards'
    'pagination';
  grid-template-rows: 200px auto 50px;
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
  width: 100%;
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
  grid-area: cards;
  display: grid;
  grid-template-rows: 135px 135px 135px;
  grid-template-columns: repeat(4, minmax(298px, 1fr));
  gap: 15px;
  overflow-y: auto;

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

export const PaginationContainer = styled.div`
  grid-area: pagination;
  display: grid;
  width: 100%;
  grid-template-columns: 150px 35px 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: end;

  grid-template-areas: 'PagesInfo BackPage NextPage';

  @media (max-width: 768px) {
    margin-top: 0;
    justify-content: center;

    grid-template-columns: 30px 150px 30px;
    grid-template-areas: 'BackPage PagesInfo NextPage';
  }
`;

type ButtonIsDisabled = {
  isDisabled: boolean;
};

export const ButtonBackPage = styled.div<ButtonIsDisabled>`
  grid-area: BackPage;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: ${(props) => (props.isDisabled ? 'rgba(51, 51, 51, 0.2)' : '#333333')};
`;

export const PagesInfo = styled.div`
  grid-area: PagesInfo;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonNextPage = styled.div<ButtonIsDisabled>`
  grid-area: NextPage;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: ${(props) => (props.isDisabled ? 'rgba(51, 51, 51, 0.2)' : '#333333')};
`;
