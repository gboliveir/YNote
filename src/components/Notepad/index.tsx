import { UlStyleComponent, ButtonStyledComponent } from "./styles";
import { Note } from './Note';

export function Notepad() {
  return(
    <>
      <UlStyleComponent>
        <Note />
      </UlStyleComponent>

      <ButtonStyledComponent type="button">+</ButtonStyledComponent>
    </>
  );
}