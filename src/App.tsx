import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { UserProvider } from './context/data-context';

function App() {
  return (
<>
<UserProvider>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
</Routes>
</BrowserRouter>
</UserProvider>
</>
  );
}

export default App;
