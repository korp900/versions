import './App.css';
import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Postlist} from "./components/Postlist";
import {ContactUs} from "./components/ContactUs";
import {Post} from "./components/Post";

function App() {
  return (
     <div className="container">
         <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><Postlist/>}/>
                <Route path="/aboute" render={()=><h1>О нас</h1>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
                <Route path="/post" render={()=><Post/>}/>
         </BrowserRouter>
     </div>

  );
}

export default App;
