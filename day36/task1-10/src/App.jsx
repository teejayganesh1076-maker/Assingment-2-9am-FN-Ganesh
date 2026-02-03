// 1. Explain conditional rendering
// - Conditional rendering means showing different UI based on certain conditions.
// - In React, you can use:
// - if/else statements
// - ternary operators
// - logical AND (&&)

// 4. Why are keys required?
// - Keys help React identify which items changed, added, or removed in a list.
// - Without keys, React may re-render inefficiently or cause bugs.
// - Keys must be unique for each item in the list.

// 5. Identify error in list rendering code
// Wrong:
// {items.map((item) => <li>{item}</li>)}
//Error: Missing key prop.
//  Correct:
// {items.map((item, index) => <li key={index}>{item}</li>)}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({isLoggedin}) {
const numbers = [1,2,3,4,5]
const products = ["Laptop", "Phone", "Tablet"];
const data = [];
  const users = [
    { id: 1, name: "Ganesh" },
    { id: 2, name: "Aisha" },
    { id: 3, name: "Rahul" },
  ];
 const todos = [
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Practice useState" },
    { id: 3, task: "Build mini projects" },
  ];

const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <div>
      {isLoggedin ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
      <ul>
      {numbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
 <div>
      {isLoggedIn ? <p>Welcome, Ganesh!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
 <div>
      {data.length > 0 ? (
        <ul>{data.map((item, i) => <li key={i}>{item}</li>)}</ul>
      ) : (
        <p>No Data Available</p>
      )}
    </div>
 <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
 <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default App