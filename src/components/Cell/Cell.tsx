import { sudokuContext } from "contexts"
import { Cell as CellType } from "lib"
import React, { useContext, useEffect, useRef, useState } from "react"
import { CellWrapper } from "styles"

type Props = {
  cell: CellType
  index: number
  highlight: boolean
  onHover: () => void 
}

export const Cell: React.FC<Props> = ({
  cell,
  index,
  highlight,
  onHover,
}) => {
  const cellRef = useRef<HTMLInputElement>(null)
  const [hEdge] = useState<boolean>((index + 1) % 3 === 0)
  const [vEdge] = useState<boolean>((index + 1) % (9 * 3) === 0)
  const {setAtIndex} = useContext(sudokuContext)

  function handleFocus() {
    cellRef.current?.select()
  }

  useEffect(() => {
    const cell = cellRef.current
    cell?.addEventListener("mouseenter", onHover)
    cell?.addEventListener("focus", handleFocus)
    // return () => {
    //   cell?.removeEventListener("mouseenter", onHover)
    //   cell?.removeEventListener("focus", handleFocus)
    // }
  }, [index, onHover])


  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if(!cell.editable) {
      console.log("not editable");
      
      return
    }
    const value = parseInt(e.currentTarget.value)
    setAtIndex(index, value)
  }
  return (
    <CellWrapper
      ref={cellRef}
      horrizontalEdge={hEdge}
      verticalEdge={vEdge}
      editable={cell.editable}
      highlight={highlight}
      value={cell.value === 0 ? "" : cell.value}
      onInput={handleInput}
    />
  )
}