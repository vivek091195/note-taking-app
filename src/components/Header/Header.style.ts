import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px 24px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  color: #0e121b;
  font-family: Inter-Bold;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;
