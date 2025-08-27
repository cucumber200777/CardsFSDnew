import React from 'react'
import classes from './Modal.module.css'
import { changeVisibility } from '../api/changeVisability'
export default function Modal({props}) {

const {visible,children,setVisible, ...otherProps} = props

    let modalClass = changeVisibility(visible)
    

  return (
    <div className={modalClass.join(' ')} onClick={()=>setVisible(false)}>
        <div  className={classes.modalContent} onClick={(event)=>event.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
