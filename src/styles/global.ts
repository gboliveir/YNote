import { createGlobalStyle } from 'styled-components';

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

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

`;
