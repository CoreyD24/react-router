import './App.css'
import {Route, Routes, Link} from "react-router-dom"
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import Other from './Other'

const App = () => {

  return (
    <>
     <div id="container">
      <h1 id="title">Hello React Router!</h1>
      <div id="navbar">
        <Link to={"/"} id="link">Home</Link>
        <Link to={"/blue"} id="link">Blue</Link>
        <Link to={"/red"} id="link">Red</Link>
        <Link to={"/:other"} id="link">Other</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/blue" element = {<Blue/>}/>
          <Route path="/red" element = {<Red/>}/>
          <Route path="/:other" element = {<Other/>}/>
        </Routes>
      </div>
    <footer id="footer">
      <h4>These aren't what they appear</h4>
      <Link to={"/blue"}id="link">Home</Link>
      <Link to={"/red"}id="link">Blue</Link>
      <Link to={"/:other"}id="link">Red</Link>
      <Link to={"/"}id="link">Other</Link>
    </footer>
    </div>
    </>
  )
}

export default App
