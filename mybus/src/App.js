import React from "react";
import "./App.css";
// import { image1} from "./image/bus.jpg"
import About from "./About";
import Book from "./Book";
import BusList from "./BusList"
import { Nav } from "./Nav";


import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Route path="/about" exact component={About} />
        <Route path="/book" exact component={Book} />
        <Route path="/bus" exact component={BusList} />

        
       
      </BrowserRouter>
      {/* <NavBar />
      <About />
      <Completed />
      <Book /> */}
    </div>
  );
}
export default App;
