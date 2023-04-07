import React,{ useState } from 'react';
import './App.css'

function App() {
const [count, setCount] = useState(5);
const [theme, setTheme] = useState('green');

const decrease = () =>{
  setCount(prevCount => prevCount-1)

}

const increase = () =>{
  setCount(count + 1)
  setTheme('yellow')
}

return (
  <>
    <div className="main">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increase}>+</button>
    </div>
  </>
);
}

export default App;
