import React, { useEffect, useReducer, useState } from 'react'
import './App.css'
import FormSubmit from './Components/FormSubmit'
import Header from './Components/Header'
import ListItem from './Components/ListItem'
// import { ContextHandler } from './context/contextHandler'
import { ContextHandler } from './context/ContextHandler.js'


let count = 1;
let countTicket = 1;

function uniqueId() {
  count = count + 1;
  return count;
}

// function ticketStatus() {
//   countTicket = countTicket + 1;
//   if (countTicket > 5) { return "บัตร 500฿"; } else { return "บัตรฟรี"; }
// }

const INITIAL_DATA = [
  {
    id: 1,
    name: "ณิชานันท์",
    surname: "เชื้อแฉ่ง",
    // ticket: "บัตรฟรี",
    timeStamp: new Date("2024-11-05")
  }
]

function reducer(registerList, action) {
  switch (action.type) {
    case "add-register":
      return [...registerList, action.newItem];

    case "delete-register":
      return registerList.filter((e) => e.id !== action.deleteId);

    case "edit-register":
      const newRegisterItem = [...registerList]
      const index = registerList.findIndex((e) => e.id === action.editId);

      newRegisterItem[index] = { ...action.editedItem }
      return newRegisterItem;

    default:
  }
}


function App() {
  const [showAddForm, setShowAddForm] = useState(false)

  const [registerList, dispatch] = useReducer(reducer, {}, () => {
    const localDATA = localStorage.getItem("registerDATA");
    if (localDATA === null) {
      return INITIAL_DATA
    }

    return JSON.parse(localDATA).map((e) => {
      return {
        ...e,
        timeStamp: new Date(e.timeStamp)
      };
    });
  })

  // const [registerList, setRegisterList] = useState(() => {
  //   const localDATA = localStorage.getItem("registerDATA");
  //   if (localDATA === null) {
  //     return INITIAL_DATA
  //   }

  //   return JSON.parse(localDATA).map((e) => {
  //     return {
  //       ...e,
  //       timeStamp: new Date(e.timeStamp)
  //     };
  //   });
  // }
  // );

  useEffect(() => {
    localStorage.setItem("registerDATA", JSON.stringify(registerList));
  }, [registerList]);


  const addNewRegister = (newRegister) => {
    const newRegisterItem =
    {
      id: uniqueId(),
      // ticket: ticketStatus(),
      ...newRegister
    }

    // setRegisterList([...registerList, newRegisterItem])
    dispatch({
      type: "add-register",
      newItem: newRegisterItem
    })
  }


  const editRegister = (id, editItem) => {
    // const newRegisterItem = [...registerList]
    // const index = registerList.findIndex((e) => e.id === id);

    // newRegisterItem[index] = { ...editItem }
    // setRegisterList(newRegisterItem)
    dispatch({
      type: "edit-register",
      editId: id,
      editedItem: editItem
    })
  }


  const deleteRegister = (id, editItem) => {
    // const newRegisterItem = registerList.filter((e) => e.id !== id);

    // setRegisterList(newRegisterItem)
    dispatch({
      type: "delete-register",
      deleteId: id
    })
  }


  return (
    <>
      <ContextHandler.Provider value={{
        addNewRegister: addNewRegister,
        editRegister: editRegister,
        deleteRegister: deleteRegister
      }}>
        <Header />
        {!showAddForm && <button className='btnBooking' onClick={() => { setShowAddForm(true) }}>คลิกลงทะเบียน</button>}
        {showAddForm && <FormSubmit setShowAddForm={setShowAddForm} />}
        <ListItem registerList={registerList} />
      </ContextHandler.Provider>
    </>
  )
}

export default App
