import React from "react";
import "./App.css";
import About from "./About";
import Book from "./Book";
import Contact from "./Contact"
import { Nav } from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Route path="/about" exact component={About} />
        <Route path="/book" exact component={Book} />
        <Route path="/contact" exact component={Contact} />
       
      </BrowserRouter>
      {/* <NavBar />
      <About />
      <Completed />
      <Book /> */}
    </div>
  );
}
export default App;
