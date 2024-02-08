import './App.css';
import Home from "./Pages/home.js"
import Films from "./Pages/films.js"
import Customers from "./Pages/customers.js"
import Nav from "./Nav.js"
import {BrowserRouter, Routes,Switch,Route,Link} from "react-router-dom";

function App() {

  return(
    
      <div className="App">
        <div className = "content">
          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/Films" element = {<Films/>}/>
            <Route path = "/Customers" element = {<Customers/>}/>
          </Routes>
          </BrowserRouter>
        </div>

      </div>
  )
}

export default App;
