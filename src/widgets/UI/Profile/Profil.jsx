import React from 'react'

export default function Profil({setCreateCardFormPopupShow,setEditProfileFormPopupShow,profilData}) {
  return (
    <div className={classes.profil}>
        <div className={classes.profil__global}>
                <img src={Avatar} alt='аватар'/>
                <div className={classes.profil__info}>
                    <h2 className={classes['profil__info-name']}>{profilData.name}</h2>
                    <h3 className={classes['profil__info-work']}>{profilData.job}</h3>
                </div>
                <button onClick={()=>setEditProfileFormPopupShow(true)} id="profil__popup" className={classes['profil__button-edit']}><img src={edit} alt='редактирование'/></button>
            </div>
            <button onClick={()=>setCreateCardFormPopupShow(true)}  className={classes['profil__button-adds']}><img src={button_add} alt='+'/></button>
    </div>
  )
}