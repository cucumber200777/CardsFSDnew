
import React,{useState} from 'react'
import Header from './components/Header'
import Profil  from './components/Profil/Profil'
import CardsList from './components/Cards/CardsList'
import CardsItem from './components/CardItem/CardsItem'
import MainModal from './components/UI/Modals/MainModal/MainModal'
import CreateCardForm from './components/Cardform/CreateCardForm'
import EditProfileFrom from './components/EditProfileFrom'
import { use } from 'react'
export default function App() {
    
    const [createCardFormPopupShow,setCreateCardFormPopupShow] = useState(false)

    const [editProfileFormPopupShow,setEditProfileFormPopupShow] = useState(false)

    const [profilData,setProfilData] = useState({name:'Hathan',job: 'd'})


  
  function adNewCard(card){
    setCards([...cards, card])
  }

  function editProfile(data){
    setProfilData(data)
  }
  return (
    <div>
        <button>jdjfjfjf</button>
        <Header/>
        <Profil profilData={profilData} setEditProfileFormPopupShow={setEditProfileFormPopupShow} setCreateCardFormPopupShow={setCreateCardFormPopupShow} />
        <CardsList cards={cards} deleteCards={deleteCards}/>
        <MainModal visible={createCardFormPopupShow} setVisible={setCreateCardFormPopupShow} >
            <CreateCardForm adNewCard={adNewCard}/>
        </MainModal>
        <MainModal visible={editProfileFormPopupShow} setVisible={setEditProfileFormPopupShow}>
            <EditProfileFrom/>
        </MainModal>
    </div>
  )
}

