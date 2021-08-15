import editImg from '../../../assets/edit.svg';
import trashCanImg from '../../../assets/trashCan.svg';
import bottomArrow from '../../../assets/bottomArrow.svg';

import { LiStyleComponent } from "./styles";

interface NoteData {
  id: number,
  title: string,
  content: string
}

interface NoteProps {
  note: NoteData,
  noteCollection: NoteData[],
  setNoteCollection: (note: NoteData[]) => void
}

export function Note({ note, noteCollection, setNoteCollection }: NoteProps) {
  function dropNote(id: number) {
    const newNoteCollection: NoteData[] = noteCollection.filter(note => note.id !== id ?? note);
    setNoteCollection(newNoteCollection);
  }

  return(
    <LiStyleComponent>
      <div>
        <h2>{note.title}</h2>
        <div>
            <img src={editImg} alt="Icone para editar nota" />
            <img src={bottomArrow} alt="Icone para abrir nota" />
            <img src={trashCanImg} alt="Icone para excluir nota" onClick={() => dropNote(note.id)}/>
        </div>
      </div>
      <p>{note.content}</p>
    </LiStyleComponent>
  );
}