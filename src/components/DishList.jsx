import { useState, useEffect } from 'react';
import axios from 'axios';
import DishCard from './DishCard';

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            const response = await axios.get('http://localhost:5001/api/dishes');
            setDishes(response.data);
        };
        fetchDishes();
    }, []);

    return (
        <div className="container mt-3">
            <div className="row">
                {dishes.map(dish => (
                    <DishCard key={dish._id} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default DishList;
