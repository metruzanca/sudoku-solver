import React, { createContext, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { Cell, getHighlighted, Sudoku } from "lib"

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
  const pathname = useLocation().pathname.substr(1)  
  const {board, setAtIndex} = useBoard(pathname)
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

// TODO replace the boolean[] in the useHighlight
// interface HighlightedCell {
//   affected: boolean   // for hover visualization
//   collision: boolean  // for errors when user inserts invalid value
// }

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

const testBoard = ["3","0","0","5","0","8","4","0","0","5","2","0","0","0","0","0","0","0","0","8","0","0","0","0","0","3","1","0","0","3","0","1","0","0","8","0","9","0","0","8","6","3","0","0","5","0","5","0","0","9","0","6","0","0","1","3","0","0","0","0","2","5","0","0","0","0","0","0","0","0","7","4","0","0","5","2","0","6","3","0","0"]

function initBoard(initialValue: string){
  const valueArray = initialValue.split(',')
  const board = valueArray.length < Sudoku.SUDOKU_N**4
  // ? new Array(81).fill(0)
  ? testBoard
  : valueArray

  return board.map<Cell>(cell => {
    const value = parseInt(cell)
    return {
      value,
      editable: value === 0 ? true : false,
    }
  })
}

type Board = Cell[]

function useBoard(initialValue: string){
  const [board, _setBoard] = useState<Board>(initBoard(initialValue))

  const history = useHistory()
  useEffect(() => {
    // TODO Move this to an "export" button
    history.push(board.map(cell => cell.value).toString())
  },[board, history])

  useWin(board, () => {
    alert("Yay, you've won!");
  })
  
  function setAtIndex(index: number, value: number){
    if(!Sudoku.validNumber(value)){
      console.log("notvalid");
      
      return
    }
    const errors = Sudoku.hasErrors(index, value, board)
    if(!errors.length){
      _setBoard(data => data.map((oldValue, idx) => idx === index ? {editable: true, value} : oldValue))
      return
    }
    // TODO handle errors via highlighted.collision
  }

  return {
    board,
    setAtIndex,
  }
}

function useWin(board: Board, cb: (win: boolean) => void){
  useEffect(() => {
    if(!board.find(cell => cell.value === 0)) {
      cb(true)
    }
  },[board, cb])
}