import './App.css'
import Nav from './Nav'
import {Content} from './MainContent'
import SideBar from './SideBar'

function App() {

  return (
    <>
      <Nav/>
      <div style={bodyStyles}>
        <SideBar/>
        <Content/>
      </div>
    </>
  )
}

const bodyStyles = {
  display:'flex',
  marginTop:'5em'
}

export default App
