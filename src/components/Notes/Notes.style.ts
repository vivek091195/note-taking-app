import styled from 'styled-components';

export const AllNotesWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  padding-top: 80px;
`;

export const NotesSection = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
`;

export const ExistingNotesWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ButtonLabel = styled.span`
  margin-left: 4px;
`;

export const EmptyNotesWrapper = styled.div`
  background-color: #f3f5f8;
  border-radius: 8px;
  color: #0e121b;
  padding: 8px;
  font-size: 12px;
  border: 1px solid #e0e4ea;
  margin-top: 16px;
`;
