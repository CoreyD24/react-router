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
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to={"/blue"}>Blue</Link>
        <Link to={"/red"}>Red</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/:name"}>Other</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element = {<Blue/>}/>
          <Route path="/red" element = {<Red/>}/>
          <Route path="/" element = {<Home/>}/>
          <Route path="/:other" element = {<Other/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
