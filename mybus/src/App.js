import React from "react";
import "./App.css";
// import { image1} from "./image/bus.jpg"
import About from "./About";
import Book from "./Book";
import Bus from "./New Buses"
import { Nav } from "./Nav";
import Delete from "./Deletebus";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Route path="/about" exact component={About} />
        <Route path="/book" exact component={Book} />
        <Route path="/bus" exact component={Bus} />
        <Route path="/delete" exact component={Delete} />
       
      </BrowserRouter>
      {/* <NavBar />
      <About />
      <Completed />
      <Book /> */}
    </div>
  );
}
export default App;
