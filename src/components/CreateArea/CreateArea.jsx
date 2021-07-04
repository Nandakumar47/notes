import React, { useState } from "react";
import "./CreateArea.css";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const[state,setState]=useState(false);
  const changeHandler = (event) => {
    console.log(event.target.value);
    setNote((prevValue) => {
      const { name, value } = event.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const clickHandle=(event)=>{
    props.value(note);
    setNote({ 
      title: "", 
      content: "" 
    });
    setState(false)
    event.preventDefault();
  };
  return (
    <div>
      <form className="create-note">
        {state&&<input onChange={changeHandler} value={note.title} name="title" placeholder="Title" />}
        <textarea
          onClick={()=>setState(true)}
          onChange={changeHandler}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={state?"3":"1"}
        />
        <Zoom in={state}>
        <Fab onClick={clickHandle}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
