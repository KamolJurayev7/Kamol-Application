import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {Main , Login, Register} from './components/allComponents'
const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
