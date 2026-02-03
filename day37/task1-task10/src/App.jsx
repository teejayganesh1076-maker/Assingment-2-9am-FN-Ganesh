// 1. What is a controlled component?
//  A controlled component is an input element (like <input>, <textarea>, <select>) whose value is controlled by React state.
//  Instead of letting the browser manage the input, React keeps the value in state and updates it via onChange.

// 2. Why do we use onChange?
//  onChange lets us capture user input and update state.
//  Without it, the input field wouldn’t update React’s state, making it uncontrolled


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [form, setForm] = useState({ email: "", password: "" });
  const [forrm, settForm] = useState({ name: "", email: "", age: "" });
  const [feedback, setFeedback] = useState("");
  const [foorm, setFoorm] = useState({ name: "", message: "" });
  const [formm, setFormm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const hanndleChange = (e) => {
    setFormm({ ...formm, [e.target.name]: e.target.value });
  };

  const hanndleSubmit = (e) => {
    e.preventDefault();
    if (!formm.email.includes("@")) {
      setError("Invalid email!");
    } else if (formm.password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  const haandleChange = (e) => {
    setFoorm({ ...foorm, [e.target.name]: e.target.value });
  };

  const handlleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback: ${feedback}`);
  };
  const handleChangee = (e) => {
    settForm({ ...forrm, [e.target.name]: e.target.value });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    alert(`Registered: ${forrm.name}, ${forrm.email}, Age: ${forrm.age}`);
  };

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    alert("Form submitted!");
  };
  
    const handleChaange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleeSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}, Password: ${form.password}`);
  };

  return (
    <>
     <div>
      <label>Name: </label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Your name is: {name}</p>
    </div>
    <div>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <p>{formData.name} - {formData.email}</p>
    </div>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type something" />
      <button type="submit">Submit</button>
    </form>
     
    <form onSubmit={handleeSubmit}>
      <input name="email" type="email" value={form.email} onChange={handleChaange} />
      <input name="password" type="password" value={form.password} onChange={handleChaange} />
      <button type="submit">Login</button>
    </form>
    
    <form onSubmit={handleSubmitt}>
      <input name="name" value={forrm.name} onChange={handleChangee} />
      <input name="email" type="email" value={forrm.email} onChange={handleChangee} />
      <input name="age" type="number" value={forrm.age} onChange={handleChangee} />
      <button type="submit">Register</button>
    </form>
    
    <form onSubmit={handlleSubmit}>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <button type="submit">Submit Feedback</button>
    </form>
    <div>
      <form>
        <input name="name" value={foorm.name} onChange={haandleChange} />
        <textarea name="message" value={foorm.message} onChange={haandleChange} />
      </form>
      <h3>Live Preview:</h3>
      <p>Name: {foorm.name}</p>
      <p>Message: {foorm.message}</p>
    </div>
     <form onSubmit={hanndleSubmit}>
      <input name="email" type="email" value={formm.email} onChange={hanndleChange} />
      <input name="password" type="password" value={formm.password} onChange={hanndleChange} />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>

    </>
  )
}

export default App