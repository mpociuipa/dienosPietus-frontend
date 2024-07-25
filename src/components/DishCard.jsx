import React, { useState } from 'react';
import axios from 'axios';

const DishCard = ({ dish }) => {
    const [rating, setRating] = useState(0);

    const handleRate = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login to rate the dish');
            return;
        }

        try {
            const config = {
                headers: {
                    'x-auth-token': token,
                },
            };
            await axios.post(`http://localhost:5001/api/dishes/rate/${dish._id}`, { rating }, config);
            alert('Thank you for rating!');
        } catch (err) {
            console.error(err);
            alert('Error rating the dish');
        }
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100">
                <img src={dish.imageUrl} className="card-img-top" alt={dish.name} />
                <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">{dish.description}</p>
                    <p className="card-text">Price: {dish.price} €</p>
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            min="1"
                            max="5"
                            step="1"
                            className="form-control"
                        />
                        <button className="btn btn-primary" onClick={handleRate}>
                            Rate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishCard;

