import './App.css'
import Nav from './Nav'
import { Content } from './MainContent'
import SideBar from './SideBar'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <Nav cartItems={cartItems} setCartItems={setCartItems} />
      <div style={bodyStyles}>
        <SideBar />
        <Content setCartItems={setCartItems} />
      </div>
    </>
  )
}

const bodyStyles = {
  display: 'flex',
  marginTop: '5em'
}

export default App



