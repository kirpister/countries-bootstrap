import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import CountriesSingle from './components/CountriesSingle';
import Home from './components/Home';
import Layout from './pages/Layout';
import Favorites from './components/Favorites';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './components/Login';
import Register from './components/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './auth/firebase';
import { ProtectedRoute } from './auth/ProtectedRoute';
import About from './components/About';

const App = () => {

  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoute user={user}/>}>
            <Route path="/countries" element={<Countries />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/countries/:single" element={<CountriesSingle />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
