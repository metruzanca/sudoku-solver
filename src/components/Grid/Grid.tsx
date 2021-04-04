import { Cell } from "components"
import React, { useContext } from "react"
import {v4 as uuid} from 'uuid'
import { GridWrapper } from "styles"
import { sudokuContext } from "contexts"


interface Props {}

export const Grid: React.FC<Props> = () => {
  const {
    board,
    highlighted,
    setHighlighted,
  } = useContext(sudokuContext)
  return (
    <GridWrapper>
      {board.map((cell, idx) => 
        <Cell
          index={idx}
          value={cell}
          key={uuid()}
          onHover={() => setHighlighted(idx)}
          highlight={highlighted[idx]}
        />
      )}
    </GridWrapper>
  )
}