import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './components/allComponents'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
