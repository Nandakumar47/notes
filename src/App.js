import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Notes/Notes";
import CreateArea from "./components/CreateArea/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote=(value)=>{
      setNotes((prevValue)=>{
        return [...prevValue,value]
      });
  }
  const deleteItem=(id)=>{
     setNotes((prevValue)=>{
       return prevValue.filter((value,index)=>{
         return index!==id
       })
     })
  }
  return (
    <div>
      <Header />
      <CreateArea value={addNote}/>
      {notes.map((value,index)=>{
        return <Note key={index} id={index} title={value.title} content={value.content} delete={deleteItem} />
      })}
      <Footer />
    </div>
  );
}

export default App;
