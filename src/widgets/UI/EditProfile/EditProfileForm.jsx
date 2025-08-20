import React from 'react'

const EditProfileFrom = ({editProfile}) => {
   
    const [inputsData,setInputsData] = useState({name:'', job:''})    
    
    function editProfileLocal(event){
        event.preventDefoult
        editProfile(inputsData)
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
        <MainButton onClick={(event)=>editProfileLocal(event)}/>
    </form>
  );
}
export default  EditProfileFrom;