import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: grid;
  border-radius: 4px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  grid-template-columns: 81px 1fr;
  width: 298px;
  height: 132px;
  padding: 10px;
  box-sizing: border-box;
  align-content: center;
`;

export const BookImage = styled.img`
  background-color: red;
  object-fit: cover;
`;

export const BookInfosContainer = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 122px;
`;
export const BookTitle = styled.h1`
  color: #333333;
  font-weight: 500;
  font-size: 14px;
`;

export const Authors = styled.p`
  color: #ab2680;
  font-size: 12px;
  margin-bottom: 25px;
`;

export const info = styled.p`
  color: #999999;
  font-size: 12px;
`;
