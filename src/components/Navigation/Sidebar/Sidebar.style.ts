import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
`;

export const TopItemsWrapper = styled.div`
  margin: 32px 0 12px;
`;

export const SidebarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  position: relative;

  &:hover {
    background-color: #e0e4ea;
    border-radius: 8px;
  }
`;

export const SidebarIconWrapper = styled.div`
  margin-right: 8px;
`;

export const SidebarTitleWrapper = styled.p`
  font-size: 14px;
  color: #2b303b;
`;
