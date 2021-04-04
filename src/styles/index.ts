import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bgColor1: #1C1E26;
    --bgColor2: #3C4347;
    --textColor: #90A4AE;
    --highlight: #2b2d39;
    --borders: #B4435C;
    
    background-color: var(--bgColor1);
    color: var(--textColor);
  }
  #root {
    display: grid;
    place-items: center;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, auto);
  width: min-content;

  padding-top: 1em;
  padding-left: 1em;

  // Temporary
  border: 1px solid var(--borders);
  border-radius: .4em;
`

interface CellWrapperProps {
  // For grid gaps in groups of 3s
  horrizontalEdge: boolean
  verticalEdge: boolean
  // For hover on cells
  highlight: boolean
}

export const CellWrapper = styled.input<CellWrapperProps>`
  height: 2em;
  width: 2em;
  background-color: var(--bgColor1);
  color: var(--textColor);
  text-align: center;

  ${p => p.horrizontalEdge && css`
    margin-right: 1em;
  `}
  ${p => p.verticalEdge && css`
    margin-bottom: 1em;
  `}

  ${p => p.highlight && css`
    background-color: var(--highlight);
  `}

  // Temporary
  border: 1px solid var(--borders);

  // Center number
  display: grid;
  place-items: center;
`