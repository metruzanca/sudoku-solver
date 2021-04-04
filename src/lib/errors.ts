export enum SudokuErrorTypes {
  Invalid_Row,
  Invalid_Column,
  Invalid_Square,
}

type InvalidArea = {
  type: 
  | SudokuErrorTypes.Invalid_Row 
  | SudokuErrorTypes.Invalid_Column 
  | SudokuErrorTypes.Invalid_Square 
  errorData: {
    collisionIndex:number
  }
}

type ErrorTypes =| InvalidArea


export class SudokuError extends Error {
  collisionIndex?:number
  type: SudokuErrorTypes
  
  constructor(error: ErrorTypes){
    super("Sudoku Error")
    this.type = error.type
  
    switch(error.type){
      case SudokuErrorTypes.Invalid_Column:
      case SudokuErrorTypes.Invalid_Row:
      case SudokuErrorTypes.Invalid_Square:
      {
        this.collisionIndex = error.errorData.collisionIndex
        break;
      }
      default: break;
    }
  }

}