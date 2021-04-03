import React, { useState } from 'react';
import { GlobalStyles } from 'styles';
import { Grid } from 'components';
import { getHighlighted } from 'lib';

type Props = {}

export interface Highlighted {
  highlighted: boolean[]
  setHighlighted: (index: number) => void
}

type UseHighlight = [boolean[], (index: number) => void]

function useHighlight(): UseHighlight {
  const [highlighted, _setHighlighted] = useState<Array<boolean>>(new Array(81).fill(false))

  function setHighlighted(index: number){
    const set = getHighlighted(index)
    _setHighlighted(highlighted.map((_, idx) => set.includes(idx) ? true : false))
  }

  return [
    highlighted,
    setHighlighted,
  ]
}

export const App: React.FC<Props> = ({}) => {
  const [data, setData] = useState(new Array(81).fill(null))
  const [highlighted, setHighlighted] = useHighlight()

  return (
    <>
      <GlobalStyles/>
      <h1>Sudoku</h1>
      <Grid data={data} highlighted={highlighted} setHighlighted={setHighlighted}/>
    </>
  )
}