import { getHighlighted } from "lib"
import React, { useEffect, useRef, useState } from "react"
import { CellWrapper } from "styles"

type Props = {
  value: number
  index: number
  highlight: boolean
  onHover: () => void 
}

export const Cell: React.FC<Props> = ({
  value,
  index,
  highlight,
  onHover,
}) => {
  const cell = useRef<HTMLDivElement>(null)
  const [hEdge] = useState<boolean>((index + 1) % 3 === 0)
  const [vEdge] = useState<boolean>((index + 1) % (9 * 3) === 0)

  // function mouseEnter(){
  //   console.log(getHighlighted(index));
  // }

  useEffect(() => {
    if(cell.current){
      cell.current.addEventListener("mouseenter", onHover)
    }
    return () => {
      if(cell.current){
        cell.current.addEventListener("mouseenter", onHover)
      }
    }
  }, [index])

  return (
    <CellWrapper
      ref={cell}
      horrizontalEdge={hEdge}
      verticalEdge={vEdge}
      highlight={highlight}
    >
      {index}
    </CellWrapper>
  )
}