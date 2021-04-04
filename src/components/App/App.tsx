import React from 'react';
import { GlobalStyles } from 'styles';
import { Grid } from 'components';
import { BoardProvider } from 'contexts';

type Props = {}

export const App: React.FC<Props> = () => {

  return (
    <>
      <GlobalStyles/>
      <h1>Sudoku</h1>
      <BoardProvider>
        <Grid/>
      </BoardProvider>
    </>
  )
}