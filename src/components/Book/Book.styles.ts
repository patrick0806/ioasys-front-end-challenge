import styled from "styled-components";

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
  background-color: rgba(0, 0, 0, 0.4);
  ${({ showModal }) => `
    display: ${showModal ? "flex" : "none"};    
  `};
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  max-width: 100%;
  z-index: 3;
  background-color: #fff;
  display: flex;
  width: 769px;
  height: 608px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const BookCover = styled.div`
  @media (max-width: 768px) {
    padding-top: 24px;
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: #333333;
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 28px;
  width: 240px;
  padding-left: 24px;
`;

export const Authors = styled.p`
  width: 240px;
  font-size: 12px;
  color: #ab2680;
  padding-left: 24px;
`;

export const InfoTitle = styled.p`
  color: #333333;
  font-size: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 240px;
  margin-bottom: 24px;
  padding-left: 24px;
`;

export const InfoLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoLabel = styled.p`
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const Info = styled.p`
  margin: 0;
  color: #999999;
  font-size: 12px;
`;

export const Resume = styled.p`
  font-size: 12;
  color: #999999;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const FlexCollumn = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
