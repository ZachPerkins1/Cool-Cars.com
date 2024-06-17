import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import CarCard from '../components/CarCard';
import axios from 'axios';

// Mock the axios module
jest.mock('axios');

function setup() {
    // Mock the axios.post, axios.delete and axios.get functions
    axios.post.mockResolvedValue({});
    axios.delete.mockResolvedValue({});
    axios.get.mockResolvedValue({ data: [] });

    const car = { id: 1, name: 'Test Car', color_id: 1, price: '10000', mileage: '1000' };
    const favorites = [];
    const setFavorites = jest.fn();
    const userId = 1;

    const { getByLabelText } = render(
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            <CarCard car={car} userId={userId}/>
        </FavoritesContext.Provider>
    );

    const favoriteButton = getByLabelText('add to favorites');

    return { favoriteButton, setFavorites, car, userId };
}

test('adds car to favorites on click', async () => {
    const { favoriteButton, setFavorites, car, userId } = setup();

    // Click the favorite button to add the car to the favorites
    fireEvent.click(favoriteButton);

    // Wait for any promises to resolve before checking if setFavorites was called
    await waitFor(() => expect(setFavorites).toHaveBeenCalled());

    // Check if axios.post was called with the correct URL and data
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/favorites', { userId: userId, carId: car.id });
});

test('removes car from favorites on click', async () => {
    const { favoriteButton, setFavorites, car } = setup();

    // Click the favorite button to add the car to the favorites
    fireEvent.click(favoriteButton);

    // Wait for any promises to resolve before checking if setFavorites was called
    await waitFor(() => expect(setFavorites).toHaveBeenCalled());

    // Click the favorite button again to remove the car from the favorites
    fireEvent.click(favoriteButton);

    // Wait for any promises to resolve before checking if setFavorites was called
    await waitFor(() => expect(setFavorites).toHaveBeenCalled());

    // Check if axios.delete was called with the correct URL and data
    expect(axios.delete).toHaveBeenCalledWith('http://localhost:3000/favorites', { data: { userId: 1, carId: car.id } });
});

xtest('fetches colors on click', async () => {
    const { favoriteButton, setFavorites } = setup();

    // Click the favorite button to add the car to the favorites
    fireEvent.click(favoriteButton);

    // Wait for any promises to resolve before checking if setFavorites was called
    await waitFor(() => expect(setFavorites).toHaveBeenCalled());

    // Check if axios.get was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/colors');
});

test('logs error to console on axios error', async () => {
    const { favoriteButton, setFavorites } = setup();

    // Mock console.error
    console.error = jest.fn();

    // Mock the axios.post function to simulate an error
    axios.post.mockRejectedValue(new Error('Network error'));

    // Try to click the favorite button to add the car to the favorites
    fireEvent.click(favoriteButton);

    // Wait for any promises to resolve before checking if setFavorites was called
    await waitFor(() => expect(setFavorites).not.toHaveBeenCalled());

    // Check if an error was logged to the console
    expect(console.error).toHaveBeenCalledWith('Error:', expect.any(Error));
});
