import React from 'react'

const CreateCardForm = ({adNewCard}) => {

    const [inputsData,setInputsData] = useState({name:'', link:''})

  

    function cardsLocal(event){
        event.preventDefault()
        const newCard = {
            id:Date.now(),
            name: inputsData.name,
            link: inputsData.link
        }
        adNewCard(newCard)
        setInputsData({name:'', link:''})
    }
        
    
   return (
    <form>
        <MyInput
            type='text '
            placeholder='text'
            value={inputsData.name}
            onInput={(event)=>setInputsData({...inputsData, name:event.target.value})}
        />
        <MyInput 
            type='text ' 
            placeholder='link'
            value={inputsData.link}
            onInput={(event)=>setInputsData({...inputsData, link:event.target.value})}
        />
        <MainButton onClick={(event)=>cardsLocal(event)}/>
    </form>
  );
};

export default  CreateCardForm;