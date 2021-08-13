import { UlStyleComponent } from "./styles";
import { Note } from './Note';

export function Notepad() {
  return(
    <>
      <UlStyleComponent>
        <Note />
      </UlStyleComponent>
    </>
  );
}