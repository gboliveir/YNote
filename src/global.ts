import { transparentize } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
      --green: #0EB70B;
      --purple: #4B0082;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
    }

    body, button, textarea, input {
      font-family: 'Poppins', sans-serif;
    }

    button {
      cursor: pointer;
    }

    html {
      @media(max-width: 1080px) {
          font-size: 93.75%; //15px
      }

      @media(max-width: 720px) {
          font-size: 87.5%; //14px
      }
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      padding: 1rem;
      position: relative;
      border-radius: 0.25rem;
      border: 1px solid var(--purple);
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      transition: filter 0.2s;
      &:hover {
          filter: brightness(0.8);
      }
    }

`;


export const ButtonStyledComponent = styled.button`
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    height: 4rem;
    width: 4rem;
    
    border: none;
    border-radius: 50%;
    
    background: var(--purple);
    color: white;
    
    font-weight: 500;
    font-size: 2rem;

    transition: background-color 0.2s;

    &:hover {
        background-color: ${transparentize(0.2, '#4B0082')};
    }
`;