import React from 'react'

export default function MainButton({children,onClick,className}) {
  return (
    <button onClick={onClick} className={className} >{children}</button>
  )
}
