import styled from '@emotion/styled';


export const SearchbarWrp = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
 

  background-color: #81d8d1;
  padding: 20px;

  box-shadow: 0px 2px 4px -1px #27b8ad, 0px 4px 5px 0px #d4f0eb,
    0px 1px 10px 0px #27b8ad;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
  background: linear-gradient(145deg, #108179, #d4f0eb);
  box-shadow: 2px 6px 8px #27b8ad, -2px -2px 6px #1f4441;
  transition: 300ms box-shadow ease-out, 150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 2px 6px 8px #9ccae5, -2px -2px 6px #188fd2;
  }
`;
export const SearchButton = styled.button`
  display: inline-block;
  background-color: transparent;
  width: 60px;
  height: 60px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`; 

export const SearchSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchInput = styled.input`
  display: inline-block;
  background-color: transparent;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
 
  &::placeholder {
    font: inherit;
    font-size: 18px;
   
  }
`;

