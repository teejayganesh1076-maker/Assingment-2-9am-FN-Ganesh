// 1. Explain what state is
// - State in React is like a memory for your component.
// - It stores values that can change over time (like a counter, input text, or toggle).
// - When state changes, React re-renders the component to show the updated UI.


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ButtonClick() {

    alert("Button was clicked!");
  
};


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(true);
  const [coount, setCoount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("black");


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };


  return (
    <>
     <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    <div>
      <button onClick={ButtonClick}>Click Me</button>
    </div>
    <div>
          <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
       <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p>This text can be toggled!</p>}
    </div>
    <div>
      <p>Count: {coount}</p>
      <button onClick={() => setCoount(coount + 1)}>Increase</button>
      <button onClick={() => setCoount(0)}>Reset</button>
    </div>
        <div>
      <p>The light is {isOn ? "ON 💡" : "OFF 🌑"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
      <div>
      <button onClick={() => setLikes(likes + 1)}>
        👍 Like {likes}
      </button>
    </div>
    <div>
      <p style={{ color }}>This text changes color!</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>

    </>
  )
}

export default App