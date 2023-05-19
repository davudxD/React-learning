import React, { useState } from 'react';
import "./Box.css"

const Box = () => {

  // --------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------


  
  const [word, setNewWord] = useState("");
  const [item, setItem] = useState([]);
  const [item2, setItem2] = useState([]);



  const submitHandler = (e) => {
    if (e.key === "Enter") {
      console.log(word);
      if (selectedOption !== 'team1' && selectedOption !== 'team2') {
        setItem([]);
        setItem2([])
      }
      else {
        setItem((oldItem) => [...oldItem, items]);
        setItem2((newItem2) => [...newItem2, items2]);
        emptyArr1();
        emptyArr2();
        console.log(items);
        console.log(items2);
      }
      setNewWord("")
    }
  }

  const emptyArr1 = () => {
    if (selectedOption === 'team1' || selectedOption !== 'team2') {
      setItem2([]);
    }
  }


  const emptyArr2 = () => {
    if (selectedOption === "team2" || selectedOption !== 'team1') {
      setItem([]);
    }
  }
 

  const inputHandler = (e) => {
    setNewWord(e.target.value);
  }

  const items = {
    id: Math.floor(Math.random() * 10000),
    value: word
  }

  const items2 = {
    id: Math.floor(Math.random() * 10000),
    value: word
  }

  // --------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  }




  return (
    <div className='main__box'>
      <div className='input__div'>
        <input type='text'
          onChange={inputHandler}
          value={word}
          onKeyPress={submitHandler}
          disabled={selectedOption !== "team1" && selectedOption !== "team2"}
          placeholder = 'Enter team name'
        />
        <select value={selectedOption} onChange={handleSelectedOption}>
          <option value='' disabled >Select Team</option>
          <option value='team1'>Team 1</option>
          <option value='team2'>Team 2</option>
        </select>
      </div>
      <div className='result__div'>
        
        <div>
          {selectedOption === "team1" ? (
            <ul>
              {item.map((item) => {
                return <li key={item.id}>{item.value}</li>
              })}
            </ul>
          ) : (<p></p>)}
        </div>

        <div>
          {selectedOption === "team2" ? (
            <ul>
              {item2.map((item) => {
                return <li key={item.id}>{item.value}</li>
              })}
            </ul>
          ) : (<p></p>)}
        </div>

      </div>
    </div>
  )
}
export default Box
