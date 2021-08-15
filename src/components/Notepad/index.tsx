import { MainStyleComponent, UlStyleComponent } from "./styles";
import { Note } from './Note';
import { useState } from "react";
import { useEffect } from "react";

interface NoteData {
  title: string,
  content: string
}

interface NotepadProps {
  noteCollection: NoteData[]
}

export function Notepad({ noteCollection }: NotepadProps) {
  const [isNoteCollectionVoid, setIsNoteCollectionVoid] = useState(
    noteCollection.length === 0 ? true : false
  );

  useEffect(() => {
    setIsNoteCollectionVoid(noteCollection.length === 0 ? true : false);
  },[noteCollection])

  return(
    <>
      {!isNoteCollectionVoid ? (
        <main>
          <UlStyleComponent>
            {noteCollection.map(note => 
              <Note key={note.title} title={note.title} content={note.content}/>
            )}
          </UlStyleComponent>
        </main>
      ) : (
        <MainStyleComponent>
          <p>Você ainda nao tem notas! 😕</p>
        </MainStyleComponent>
      )}
    </>
  );
}