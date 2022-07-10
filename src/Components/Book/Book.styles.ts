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
  border-radius: 4px;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 24px;
  grid-template-columns: 400px 1fr;
  width: 769px;
  height: 608px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    overflow-y: scroll;
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

export const BookImage = styled.img`
  width: 349px;
  height: 512px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 240px;
    height: 351px;
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
  color: #333333;
  font-weight: 500;
`;

export const BookDetails = styled.div`
  display: grid;
  height: 512px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ab2680;
  }

  grid-template-rows: 50px 100px 135px;
  padding-left: 24px;
  padding-top: 10px;
  @media (max-width: 768px) {
    overflow-y: visible;
  }
`;

export const Details = styled.div`
  margin-top: -65px;
  margin-right: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 32px;
`;

export const InfoLabel = styled.p`
  padding-bottom: 5px;
  padding-right: 10px;
  color: #333333;
  font-size: 12px;
  font-weight: 500;
`;

export const Info = styled.p`
  width: 100%;
  display: flex;
  justify-content: end;
  color: #999999;
  font-size: 12px;
`;

export const ResumeContainer = styled.div`
  display: inline-block;
  font-size: 12;
  margin-top: -85px;
  height: 20px;
  color: #999999;
`;

export const CloseModalButtonContainer = styled.div`
  margin-top: 25px;
  margin-right: 60px;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-right: 15px;
  }
`;
