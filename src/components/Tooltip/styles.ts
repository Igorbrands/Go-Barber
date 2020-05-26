import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }

  span {
    width: 160px;
    position: absolute;
    bottom: calc(100% + 8px);
    color: #f4ede8;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
