import React from 'react';
import { ButtonLabel, EmptyNotesWrapper, ExistingNotesWrapper } from './Notes.style.ts';
import { ReactComponent as AddIcon } from '../../assets/images/icon-plus.svg';
import Button from '../../widgets/Button/Button.tsx';

const ExistingNotes = () => {
  return (
    <ExistingNotesWrapper>
      <Button onClick={() => {}}>
        <AddIcon style={{ width: 16 }} />
        <ButtonLabel>Create New Note</ButtonLabel>
      </Button>
      <EmptyNotesWrapper>
        You don’t have any notes yet. Start a new note to capture your thoughts and ideas.
      </EmptyNotesWrapper>
    </ExistingNotesWrapper>
  );
};

export default ExistingNotes;
