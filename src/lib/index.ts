import { SudokuError, SudokuErrorTypes } from './errors'
import {memoize} from './optimize'


export function getHighlighted(index: number){
  const col = Sudoku.getColumn(index)
  const row = Sudoku.getRow(index)

  const square = Sudoku.getSquare(index)
  const set = new Set<number>()
  Sudoku.getNumbersInRow(row)
    .forEach(item => set.add(item))
  Sudoku.getNumbersInColumn(col)
    .forEach(item => set.add(item))
  Sudoku.getNumbersInSquare(square)
    .forEach(item => set.add(item))
  return Array.from(set.values())
}

export interface Cell {
  value: number
  editable: boolean
}

export class Sudoku{
  // TODO reuse this elsewhere so that this can be made an NxN sudoku
  // any occurance of 9 would need to be N^2 and 27 N^3
  static SUDOKU_N = 3

  /**
   * @returns 0 indexed row number
   */
  static getRow(index:number) {
    return Math.floor((index) / 9)
  }


  /**
   * @returns 0 indexed column number
   */
  static getColumn(index: number){
    return (index % 9)
  }


  /**
   * @returns 0 indexed square number
   */
  @memoize() static getSquare(index: number){
    return Math.floor((index % 9) / 3) + 3 * Math.floor(index / (9 * 3))
  }

  /**
   * @returns array of numbers in the row
   */
  @memoize() static getNumbersInSquare(square: number) {
    const start = (Math.floor(square / 3) * 27) + (square % 3) * 3
    return Array.from({length: 9}, (_, i) => 
      i === 0 ? start : start + Math.floor(i / 3) * 9 + (i % 3)
    )
  }


  /**
   * @returns array of numbers in the column
   */ 
  @memoize() static getNumbersInColumn(column: number) {
    return Array.from({length: 9}, (_, i) => column + i * 9)
  }


  /**
   * @returns array of numbers in the square
   */
  @memoize() static getNumbersInRow(row: number) {
    return Array.from({length: 9}, (_, i) => 9 * row + i)
  }

  static validNumber(value: number) {
    return value > 0 && value <= Sudoku.SUDOKU_N**2
  }

  static hasErrors(index: number, value: number, board: Cell[]) {
    const errors:SudokuError[] = []
    const row = Sudoku.getRow(index)
    const rowIndexes = Sudoku.getNumbersInRow(row)
    for (const idx of rowIndexes) {
      if(idx !== index && board[idx].value === value){
        errors.push(new SudokuError({
          type: SudokuErrorTypes.Invalid_Row,
          errorData: {collisionIndex: idx}
        }))
        break  
      }
    }

    const col = Sudoku.getColumn(index)
    const colIndexes = Sudoku.getNumbersInColumn(col)
    for (const idx of colIndexes) {
      if(idx !== index && board[idx].value === value){
        errors.push(new SudokuError({
          type: SudokuErrorTypes.Invalid_Column,
          errorData: {collisionIndex: idx}
        }))
        break
      }
    }

    const square = Sudoku.getSquare(index)
    const squareIndexes = Sudoku.getNumbersInSquare(square)
    for (const idx of squareIndexes) {
      if(idx !== index && board[idx].value === value){
        errors.push(new SudokuError({
          type: SudokuErrorTypes.Invalid_Square,
          errorData: {collisionIndex: idx}
        }))
        break
      }
    }

    return errors
  }
}