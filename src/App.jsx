import './App.css'
import Nav from './Nav'
import { Content } from './MainContent'
import SideBar from './SideBar'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(0) // 🔗 Shared state

  return (
    <>
      <Nav cartItems={cartItems} setCartItems={setCartItems} activeIndex={activeIndex} />
      <div style={bodyStyles}>
        <SideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <Content setCartItems={setCartItems} activeIndex={activeIndex} />
      </div>
    </>
  )
}

const bodyStyles = {
  display: 'flex',
  marginTop: '5em'
}

export default App
