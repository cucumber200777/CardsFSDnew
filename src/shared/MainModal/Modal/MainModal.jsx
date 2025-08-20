import React from 'react'

export default function MainModal({visible,children,setVisible}) {
    let modalClass = [classes.modal]
    if (visible===true){
        modalClass.push(classes.modalVisible)
    }

  return (
    <div className={modalClass.join(' ')} onClick={()=>setVisible(false)}>
        <div  className={classes.modalContent} onClick={(event)=>event.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
