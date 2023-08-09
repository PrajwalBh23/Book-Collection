import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addbook from "./components/Addbook";
import Books from "./components/Book/Books";
import About from "./components/About";


function App() {
  // React Fragment is a feature in React that allows you to 
  // return multiple elements from a React component by allowing 
  // you to group a list of children without adding extra nodes to the DOM.
  
  
  // Using these we can access the Routes 
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<Addbook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
