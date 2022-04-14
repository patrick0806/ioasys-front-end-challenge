import styled from "styled-components";

type InputContainerProps = {
  hasPlaceholder: boolean;
};

type InputProps = {
  hasPlaceholder: boolean;
};

const label = {
  up: `
      top: 2px;
      font-size: 12px;
    `,
  down: `
      top: 13px;
      font-size: 16px;
    `,
};

export const Label = styled.label`
  position: absolute;
  transition: 0.2s ease all;
  color: #78788c;
  cursor: text;
  ${label.down}
`;

export const Input = styled.input<InputProps>`
  ${({ hasPlaceholder }) => `
      width: 100%;
      border: 0;
      outline: 0;
      color: #fff;
      font-size: 16px;
      background: transparent;
      &:disabled {
        background: transparent;
      }
      &:focus {
        ${
          hasPlaceholder &&
          `
          margin-top: 0.75rem;
        `
        }
      }
    `};
`;

export const ButtonRight = styled.div`
  color: #626275;
  display: flex;
  align-items: center;
  margin: 0px;

  cursor: pointer;
  margin-left: 8px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  ${({ hasPlaceholder }) => `
    background: rgba(0, 0, 0, 0.32);
    border: 1px solid #bdbdd0;
    border-radius: 4px;
    padding: 0 10px;
    height: 44px;
    display: flex;
    align-items: center;
    max-width: 100%;
    position: relative;
    margin-bottom:15px;
    ${Input}:not(:placeholder-shown) {
      + ${Label} {
        ${label.up}

        + ${ButtonRight} {
          display: inherit;
        }
      }
      ${
        hasPlaceholder &&
        `
        margin-top: 12px;
      `
      }
    }
    &:focus-within {
     
       
        
        outline: 2px solid #fff;

        & ${Label} {
          color: #78788c;
          ${label.up}
        }
      
      
    }
    
  `};
`;

export const Error = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  width: 239px;
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px;
  margin-top: 20px;

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    bottom: 100%;
    width: 0;
    height: 0;
    border-bottom: 10px solid rgba(255, 255, 255, 0.4);
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;
