import React from 'react'

export default function CardsItem({cardData,deleteCards}) {
  const [likeBtnStatus,setLikeBtnStatus] = useState(heart)
  const [isLikePrest,setIsLikePrest] = useState(false)
  // let likeBtnStatus = heart
  function switcLike(){
    setLikeBtnStatus(prev=>

      prev===heart?LikeActiveBtn:heart

    )
    setIsLikePrest(!isLikePrest)
    // likeBtnStatus=LikeActiveBtn
  }

  return (
    <div  className={classes.card}>
            <img className={classes.card__trees} src={cardData.link}/> 
            <MainButton onClick={(event)=>deleteCards(cardData)} className={classes['card__delete-btn']}><img  src={deleteImg} alt="вв"/></MainButton>
            <div className={classes.card__text}>
                <h2 className={classes.card__pre}>{cardData.name}</h2>
                <MainButton onClick={()=>setLikeBtnStatus(cardData)} className={classes['card__heart-img']}><img  src={likeBtnStatus} alt="лвв"/></MainButton>
            </div>
        </div>
  )
}