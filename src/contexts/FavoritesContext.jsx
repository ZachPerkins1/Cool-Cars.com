import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children, userId = null }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3000/favorites?userId=${userId}`)
                .then((response) => {
                    setFavorites(response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [userId]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};