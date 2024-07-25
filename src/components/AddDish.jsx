import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDish = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'x-auth-token': token
            }
        };

        try {
            await axios.post('http://localhost:5001/api/dishes', { name, description, price, imageUrl }, config);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Error adding the dish');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Add Dish</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Dish</button>
            </form>
        </div>
    );
};

export default AddDish;

