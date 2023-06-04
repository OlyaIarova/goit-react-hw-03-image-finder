import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #27b8ad;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  background: linear-gradient(145deg, #108179, #d4f0eb);
  box-shadow: 2px 6px 8px #27b8ad, -2px -2px 6px #1f4441;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 2px 6px 8px #9ccae5, -2px -2px 6px #188fd2;
  }
`;
