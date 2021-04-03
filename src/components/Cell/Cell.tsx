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
  const cellRef = useRef<HTMLDivElement>(null)
  const [hEdge] = useState<boolean>((index + 1) % 3 === 0)
  const [vEdge] = useState<boolean>((index + 1) % (9 * 3) === 0)

  useEffect(() => {
    const cell = cellRef.current
    if(cell){
      cell.addEventListener("mouseenter", onHover)
    }
    return () => {
      if(cell){
        cell.addEventListener("mouseenter", onHover)
      }
    }
  }, [index, onHover])

  return (
    <CellWrapper
      ref={cellRef}
      horrizontalEdge={hEdge}
      verticalEdge={vEdge}
      highlight={highlight}
    >
      {index}
    </CellWrapper>
  )
}