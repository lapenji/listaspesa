import React, {useState, useEffect} from 'react';
import firebase from '../firebase/firebase';
import List from '../List/List';
import TextInput from '../TextInput/TextInput';
import styled from 'styled-components';

const Contenitore = styled.div`
    display: flex;
    width: 300px;
    min-height: 400px;
    background-color: rgba(245,245,245,0.8);
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
    flex-direction: column;
    align-items: center;

`

function App() {
  const [lista, setLista] = useState([])
  
  useEffect(() => {
    const db = firebase.firestore();
    const query = db.collection('lista').orderBy('id');
    query.onSnapshot(snap => {
      const datas = snap.docs.map(item =>  {
        return {id: item.data().id, testo: item.data().text , fireId: item.id, done: item.data().done}
      })
      setLista(datas)
    })
    
  },[]);
  

  const handleAdd = testo => {
    let id;
    lista.length <= 0 ?  id =-1 : id = Number(lista[lista.length -1].id) 
    id += 1
    const db = firebase.firestore()
    db.collection('lista').add({text: testo, id: id, done: false})
  }

  const handleDelete = (id) => {
    const db = firebase.firestore();
    db.collection('lista').doc(id).delete()
  }

  const handleDone = (fireId) => {
    const db = firebase.firestore();
    let idx = lista.findIndex(item => item.fireId === fireId)
    let nowDone = lista[idx].done
    db.collection('lista').doc(fireId).update({done: !nowDone})
  }


  return (
    <Contenitore>
      <h3>Lista della spesa</h3>
      <TextInput handleAdd={handleAdd}/>
      
      <List lista={lista} handleDelete={handleDelete} handleDone={handleDone} />
      
    </Contenitore>
  );
}


export default App;
