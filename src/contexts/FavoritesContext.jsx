import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const userId = 1; // TODO: Update this to use the logged in user's ID

    useEffect(() => {
        axios.get(`http://localhost:3000/favorites?userId=${userId}`)
            .then((response) => {
                setFavorites(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};