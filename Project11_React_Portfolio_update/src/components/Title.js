import React from "react";
import styled from "styled-components";

export default function Title({ title, white }) {
  return (
    <TitleSection>
      <h4 className={white ? "title white_title" : "title"}>{title}</h4>
    </TitleSection>
  );
}

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  z-index: 999999;

  .title {
    font-size: 3.5rem;
    text-transform: uppercase;
    transition: all 0.2s;
    /* This lines alow to change text color to linear-gradient*/
    display: inline-block;
    background: var(--lightGradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    :hover {
      transform: skewX(10deg) scale(1.1);
      text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.4);
    }
  }

  .white_title {
    background: var(--White-Gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
