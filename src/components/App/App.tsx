import React from 'react';
import { GlobalStyles } from 'styles';
import { Grid } from 'components';
import { BoardProvider } from 'contexts';
import {HashRouter} from 'react-router-dom'

type Props = {}

export const App: React.FC<Props> = () => {

  return (
    <HashRouter>
      <GlobalStyles/>
      <h1>Sudoku</h1>
      <BoardProvider>
        <Grid/>
      </BoardProvider>
    </HashRouter>
  )
}