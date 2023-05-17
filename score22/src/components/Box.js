import React, {useState} from 'react';
import "./Box.css"

const Box = () => {

const[word, setNewWord] = useState("");
// const[inputVal, setInputVal] = useState("");
const[item,setItem] = useState([])

const submitHandler = (e) =>{
  if(e.key === "Enter") {
  console.log(word)
  setItem((oldItem) => [...oldItem, items]);
   console.log(items);
   setNewWord("")
 
}
}
const inputHandler = (e) =>{
  setNewWord(e.target.value);
}

const items  = {
  id: Math.floor(Math.random() * 10000 ),
  value: word
}


  return (
    <div className='main__box'>
      <div className='input__div'>  
        <input type='text'
        onChange={inputHandler}
        value={word}
        onKeyPress={submitHandler}
        />
          <select>
            <option value='' disabled >Select Team</option>
            <option value='team1'>Team 1</option>
            <option value='team2'>Team 2</option>
          </select>
      </div>
      <div className='result__div'>
        <ul>
          {item.map((item) => {
            return <li key={item.id}>{item.value}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default Box