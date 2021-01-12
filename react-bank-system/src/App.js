import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Homepage from './Pages/Homepage';
import Triangle from "./Images/TriangleBank.png"
import Customers from './Pages/Customers'
import Contact from './Pages/Contact';
import Customer from './Pages/Customer';

function App() {
  return (
    <div className="App">
      <header className="web-head">
            <div className="top-nav">
                <img src={Triangle} className="logo-img"/>
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to = "/">Home</Link></li>
                    <li className="nav-list-item"><Link to = "/about">About</Link></li>
                    <li className="nav-list-item"><Link to = "/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
        <main style={{marginBottom: "2em"}}>
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
        <footer style={{backgroundColor: "khaki", position: "fixed", bottom: "0", width: "100%", padding: "0.5em"}}>
          <div>&copy; Copyright 2020 KushagraM :D</div>
        </footer>
    </div>
  );
}

export default App;
