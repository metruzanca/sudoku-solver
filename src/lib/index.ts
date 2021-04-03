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

class Sudoku{
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
}