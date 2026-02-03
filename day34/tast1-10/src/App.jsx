import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx'
import MyName from './MyName.jsx'
import UserInfo from './UserInfo.jsx'
import Card from './Card.jsx'
import ProfileCard from './ProfileCard.jsx'
import Caard from './Caard.jsx'
import BlogPost from './BlogPost.jsx'
function App() {

  return (
    <>
    <Home/>
    <MyName/>
    <UserInfo name = "Fayaz" age = '22'/>
    
    <Card title="Profile">
  <p>This is inside children</p>
</Card>
<ProfileCard name="Fayaz" role="Web Developer" />
<Caard>
  <h2>Reusable Card</h2>
  <p>This content is passed as children</p>
</Caard>
<BlogPost title="Learning React" author="Mohammed">
  <p>React UI development .</p>
</BlogPost>
    </>
  )
}

export default App

// 5. Explain Why Props Are Read-Only
// Props are immutable because they are passed from parent to child. If a child could change them, it would break the one-way data flow in React. Instead, children can request changes via callbacks provided by the parent.
