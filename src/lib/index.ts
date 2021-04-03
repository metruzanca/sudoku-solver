export function getHighlighted(index: number){
  const col = getColumn(index)
  const row = getRow(index)
  const square = getSquare(index)
  // console.log("Entered cell n: " + index);
  // console.log("Row " + row);
  // console.log("Column " + col)
  // console.log("Values in row: " + getNumbersInRow(row));
  // console.log("Values in column: " + getNumbersInColumn(col));
  // console.log("Values in square: " + getNumbersInSquare(square));
  const set = new Set<number>()
  // TODO Memoize getNumbersInRow, getNumbersInColumn & getNumbersInSquare
  // And potentially getSquare but idk, would need to benchmark.
  getNumbersInRow(row).forEach(item => set.add(item))
  getNumbersInColumn(col).forEach(item => set.add(item))
  getNumbersInSquare(square).forEach(item => set.add(item))
  return Array.from(set.values())
}

/**
 * @returns 0 indexed row number
 */
function getRow(index:number) {
  return Math.floor((index) / 9)
}


/**
 * @returns 0 indexed column number
 */
function getColumn(index: number){
  return (index % 9)
}


/**
 * @returns 0 indexed square number
 */
function getSquare(index: number){
  return Math.floor((index % 9) / 3) + 3 * Math.floor(index / (9 * 3))
}


/**
 * @returns array of numbers in the row
 */
function getNumbersInRow(row: number) : number[] {
  return Array.from({length: 9}, (_, i) => 9 * row + i)
}


/**
 * @returns array of numbers in the column
 */
function getNumbersInColumn(column: number) : number[] {
  return Array.from({length: 9}, (_, i) => column + i * 9)
}


/**
 * @returns array of numbers in the square
 */
function getNumbersInSquare(square: number){
  const start = (Math.floor(square / 3) * 27) + (square % 3) * 3
  return Array.from({length: 9}, (_, i) => i === 0
   ? start
   : start + Math.floor(i / 3) * 9 + (i % 3)
  )
}