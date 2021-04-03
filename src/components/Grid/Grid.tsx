import { Cell, Highlighted } from "components"
import React from "react"
import {v4 as uuid} from 'uuid'
import { GridWrapper } from "styles"


interface Props extends Highlighted {
  data: number[] // probs change number to a better data type
}

export const Grid: React.FC<Props> = ({
  data,
  highlighted,
  setHighlighted,
}) => {  
  return (
    <GridWrapper>
      {data.map((cell, idx) => 
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