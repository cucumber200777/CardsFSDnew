import React from 'react'

export default function CardsList({cards,deleteCards}) {
  return (
    <div className={classes.card__gallery}>
      {cards.map((cardData)=>
        <CardsItem key={cards.id} cardData={cardData} deleteCards={deleteCards} />
    )}
    </div>
    
  )
}
