import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DishList from './components/DishList';
import Login from './components/Login';
import Register from './components/Register';
import AddDish from './components/AddDish';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<DishList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<AddDish />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

