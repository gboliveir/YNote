import { UlStyleComponent } from "./styles";
import { Note } from './Note';

interface NoteData {
  title: string,
  content: string
}

interface NotepadProps {
  noteCollection: NoteData[]
}

export function Notepad({ noteCollection }: NotepadProps) {
  return(
    <>
      <UlStyleComponent>
        {noteCollection.map(note => (
          <Note key={note.title} title={note.title} content={note.content}/>  
        ))}
      </UlStyleComponent>
    </>
  );
}