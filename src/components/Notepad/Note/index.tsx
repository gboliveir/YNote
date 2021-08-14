import editImg from '../../../assets/edit.svg';
import trashCanImg from '../../../assets/trashCan.svg';
import bottomArrow from '../../../assets/bottomArrow.svg';

import { LiStyleComponent } from "./styles";

interface NoteProps {
  title: string,
  content: string
}

export function Note(note: NoteProps) {
  return(
    <LiStyleComponent>
      <div>
        <h2>{note.title}</h2>
        <div>
            <img src={editImg} alt="Icone para editar nota" />
            <img src={bottomArrow} alt="Icone para abrir nota" />
            <img src={trashCanImg} alt="Icone para excluir nota" />
        </div>
      </div>
      <p>{note.content}</p>
    </LiStyleComponent>
  );
}