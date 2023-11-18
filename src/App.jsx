import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AddBook from './AddBook';
import Update from './Update';
import Delete from './Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/addbook" element={<AddBook />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/delete/:id" element={<Delete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
