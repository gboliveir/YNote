import styled from "styled-components";

export const LiStyleComponent = styled.li`
  display: flex;
  flex-direction: column;
  background: var(--purple);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 0.25rem;
  word-break: break-all;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    div {
      min-width: 108px;
      margin-left: 1rem;
    }
  }

  p {
    color: white;
    font-size: 1.3;
  }

  h2 {
    color: white;
    font-weight: bold;
  }

  img {
    height: 20px;
    width: 20px;
    margin-right: 1rem;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
  }

`;