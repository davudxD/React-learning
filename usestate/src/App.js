import React,{ useState } from 'react';
import './App.css'
import Card from './Card';

function App() {
const [count, setCount] = useState(5);
const [theme, setTheme] = useState('green');



const decrease = () =>{
  setCount(prevCount => prevCount-1)
}


let test = 'test123';
console.log(test)


const increase = () =>{
  setCount(count + 1)
  setTheme('yellow')
}

const expenses = [
    {
      id: "e1",
      ime: "Davud",
      prezime:"Carovac",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      ime: "Davud",
      prezime:"Carovac",      
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      ime: "Davud",
      prezime:"Carovac",      
      date: new Date(2021, 5, 12),
    },
  ];


const [word, setWord] = useState("");
const [inputVal, setInputVal] = useState("WORD");


const handleInputValue = (e) =>{
setWord(e.target.value)
}

const handleButtonClick = () =>{
setInputVal(word);
setWord('')
}

return (
  <>
    <div className="main">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increase}>+</button>
    </div>
    <div className='card1'>
      <Card ime={expenses[0].ime} prezime={expenses[0].prezime} word = {inputVal} />
      <input type="text" value={word} onChange={handleInputValue} />
      <button onClick={handleButtonClick}>Click</button>
    </div>
  </>
);
}

export default App;
