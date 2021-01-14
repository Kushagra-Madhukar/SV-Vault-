import { Route, Switch, Link, useHistory } from 'react-router-dom';
import React, {useState} from 'react'
import './App.css';
import About from './Pages/About';
import Homepage from './Pages/Homepage';
import Triangle from "./Images/TriangleBank.png"
import Customers from './Pages/Customers'
import Contact from './Pages/Contact';
import Customer from './Pages/Customer';

function App() {

  const history = useHistory()

  const [burger, setBurger] = useState(false)
  function clickHandler() {
    setBurger(!burger)
  }
  return (
    <div className="App">
      <header className="web-head">
            <div className="top-nav">
                <img src={Triangle} className="logo-img" onClick={() => history.push("/")}/>
                <ul className={"nav-list " + (burger? "nav-list-open" : "nav-list-close")}>
                    <li className="nav-list-item"><Link to = "/">Home</Link></li>
                    <li className="nav-list-item"><Link to = "/about">About</Link></li>
                    <li className="nav-list-item"><Link to = "/contact">Contact</Link></li>
                </ul>
                <div className={burger ? "burger burger-open" : "burger burger-close"} onClick={clickHandler}>
                  <div/>
                  <div/>
                  <div/>
                </div>
                {/* <div className={burger ? "sidebar sidebar-open": "sidebar sidebar-closed"} style={{position: "fixed"}}>
                  Hello
                </div> */}
            </div>
        </header>
        <main >
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route exact path="/customers">
              <Customers/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/customers/:id">
              <Customer/>
            </Route>
          </Switch>
        </main>
        <footer style={{backgroundColor: "khaki", bottom: "0", width: "100%", padding: "0.5em 0", zIndex: "50", height: "30px"}}>
          <div>&copy; Copyright 2020 KushagraM :D</div>
        </footer>
    </div>
  );
}

export default App;
