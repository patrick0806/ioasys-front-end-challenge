import styled from 'styled-components';

type ShowModalProps = {
  showModal: boolean;
};

export const Container = styled.div<ShowModalProps>`
  position: absolute;
  max-width: 100%;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  ${({ showModal }) => `
    display: ${showModal ? 'grid' : 'none'};    
  `};
  justify-items: center;
  grid-template-rows: 100px 1fr;
  overflow-y: hidden;
`;

export const Modal = styled.div`
  z-index: 3;
  background-color: #fff;
  display: grid;
  justify-items: center;
  padding: 24px;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  height: 70%;
  box-sizing: border-box;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

export const BookImage = styled.img`
  width: 349px;
  height: 100%;
  @media (max-width: 768px) {
    width: 240px;
    height: 351px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 28px;
  font-weight: 500;
`;

export const Authors = styled.p`
  color: #ab2680;
  font-size: 12px;
  font-weight: 400;
`;

export const InfoTitle = styled.p`
  margin-top: 10px;
  height: 25px;
`;

export const BookDetails = styled.div`
  display: grid;
  grid-template-columns: 90%;
  grid-template-rows: auto auto auto;
  padding-left: 24px;
  padding-top: 10px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 32px;
`;

export const InfoLabel = styled.p`
  padding-bottom: 5px;
  padding-right: 10px;
  color: #333333;
  font-size: 12px;
`;

export const Info = styled.p`
  width: 100%;
  display: flex;
  justify-content: end;
  color: #999999;
  font-size: 12px;
`;

export const Resume = styled.p`
  margin-top: 10px;
  font-size: 12;
  color: #999999;
  display: flex;
  flex-direction: row;
`;

export const ResumeContainer = styled.div`
  display: grid;
  grid-template-rows: 25px 1fr;
`;

export const CloseModalButtonContainer = styled.div`
  margin-top: 25px;
  margin-right: 60px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export const CloseModalButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #333333;
  background-color: #fff;
  color: #333333;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
