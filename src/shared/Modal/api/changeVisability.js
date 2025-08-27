
import classes from '../ui/Modal.module.css'


export const changeVisibility = (visible ) => {
    
    let modalClass = [classes.modal]
        
    if (visible===true){
        modalClass.push(classes.modalVisible)
    }

    return modalClass
}