import './App.css'
import Nav from './Nav'
import { Content } from './MainContent'
import SideBar from './SideBar'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Nav cartItems={cartItems} setCartItems={setCartItems} activeIndex={activeIndex} />
      <div className='body-styles'>
        <SideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <Content setCartItems={setCartItems} activeIndex={activeIndex} />
      </div>
    </>
  )
}


export default App
