// 1. What is a side effect in React?
// - A side effect is any operation that affects something outside the component’s rendering process.
// - Examples:
// - Fetching data from an API
// - Updating the DOM manually
// - Setting up subscriptions or timers
// - React’s useEffect hook is designed to handle these side effects

// 3. What happens without dependency array?
// - If you omit the dependency array, useEffect runs after every render.
// - This can cause performance issues or infinite loops if you update state inside it

// 4. When does useEffect re-run?
// - It re-runs when any value in its dependency array changes.

// 5. Identify error in a given useEffect snippet
// useEffect(() => {
//   setCount(count + 1);
// }, [count]);
// Error: This causes an infinite loop because updating count triggers the effect again.
// Fix: Use conditional logic or setCount(prev => prev + 1) inside a controlled event, not directly in useEffect.

import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [coount, setCoount] = useState(0);
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [countt, setCountt] = useState(0);
    const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render count:", renderCount.current);
  });

  useEffect(() => {
    console.log("Show state changed:", show);
  }, [show]);

  useEffect(() => {
    setMessage("Mounted");
  }, []);

 useEffect(() => {
    document.title = `Count: ${coount}`;
  }, [coount]);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  useEffect(() => {
    alert("This runs only once after mount");
  }, []); 
  return (
    <>
     <p>useEffect that runs only once</p>

     <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    <button onClick={() => setCoount(coount + 1)}>Increase Count</button>
     <p>{message}</p>
      <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello, I’m visible!</p>}
    </div>
    <div>
      <p>Counter: {countt}</p>
      <button onClick={() => setCountt(countt + 1)}>Increment</button>
    </div>

    </>
  )
}

export default App