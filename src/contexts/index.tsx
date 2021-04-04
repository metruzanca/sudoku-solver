import { getHighlighted } from "lib"
import React, { createContext, useState } from "react"

type SudokuGame =
  & ReturnType<typeof useHighlight>
  & ReturnType<typeof useBoard>

const defaultState: SudokuGame = {
  board: new Array(81).fill(0),
  setAtIndex: () => {},
  highlighted: new Array(81).fill(false),
  setHighlighted: () => {},
}

export const sudokuContext = createContext<SudokuGame>(defaultState)

const Provider = sudokuContext.Provider

export const BoardProvider: React.FC = ({
  children
}) => {
  const {board, setAtIndex} = useBoard()
  const {highlighted, setHighlighted} = useHighlight()

  return (
    <Provider value={{
      board,
      setAtIndex,

      highlighted,
      setHighlighted,
    }}>
      {children}
    </Provider>
  )
}


function useHighlight() {
  const [highlighted, _setHighlighted] = useState<Array<boolean>>(new Array(81).fill(false))

  function setHighlighted(index: number){
    const set = getHighlighted(index)
    _setHighlighted(highlighted.map((_, idx) => set.includes(idx) ? true : false))
  }

  return {
    highlighted,
    setHighlighted,
  }
}

function useBoard(){
  const [board, _setBoard] = useState<number[]>(new Array(81).fill(0))

  function setAtIndex(index: number, value: number){
    console.log(index, value);
    
    _setBoard(data => {
      const updated = data.map((oldValue, idx) => idx === index ? value : oldValue)
      console.log(updated);
      return updated
      
    })
  }

  return {
    board,
    setAtIndex,
  }
}