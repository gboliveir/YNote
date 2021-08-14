import { Header } from './components/Header';
import { Notepad } from './components/Notepad';
import { NotepadModal } from './components/Modal';

import { GlobalStyle, ButtonStyledComponent } from "./global";
import { useState } from 'react';

interface NoteData {
  title: string,
  content: string
}

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [noteCollection, setNoteCollection] = useState<NoteData[]>([]);

  return (
    <>
      <Header />
      <Notepad noteCollection={noteCollection}/>
      <NotepadModal 
        noteCollection={noteCollection} 
        setNoteCollection={setNoteCollection} 
        isOpen={isOpen} 
        onRequestClose={() => setIsOpen(false)}
      />
      <ButtonStyledComponent onClick={() => setIsOpen(true)}>+</ButtonStyledComponent>    
      <GlobalStyle />
    </>
  );
}


