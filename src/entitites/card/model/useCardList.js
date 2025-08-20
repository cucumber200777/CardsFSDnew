import { useState } from "react"


export const useCardList = () => {
    const [cards,setCards] = useState([
        {
            id:1,
            name: 'ощя',
            link:'https://i.pinimg.com/564x/2f/5e/aa/2f5eaa2bdb70b9bfabb6a6215c4330a0.jpg',
            liked: false,
        },
        {
            id:2,
            name: 'ощя',
            link:'https://i.pinimg.com/564x/2f/5e/aa/2f5eaa2bdb70b9bfabb6a6215c4330a0.jpg',
            liked: false,
        },
        
  ])
  const addCard = (card) => {
    setCards(prev => [...prev, {...card,id: Date.now(),liked: false}])
  }
  const deleteCard = (id) => {
    setCards(prev => prev.filter((item)=>item.id !==id))
  }

  const toggleLike = (id) => {
    setCards(prev => 
        prev.map(item.id === id  ? {...item, liked: !item.liked}: item)
    )
  }
  return{
    cards,
    addCard,
    deleteCard,
    toggleLike
  }

}