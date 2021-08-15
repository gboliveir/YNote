import styled from "styled-components";

export const MainStyleComponent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc( 100vh - 136px);

  p {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const UlStyleComponent = styled.ul`
    position: relative;
    max-width: 1280px;
    margin: 2rem auto 0;
    padding: 0 1rem;
    list-style: none;

    li {
      margin-bottom: 2rem;
    }
`;