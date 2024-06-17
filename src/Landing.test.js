import React from 'react';
import { render, fireEvent, waitFor, screen, getByLabelText } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import Landing from './Landing.jsx';
import Inventory from './InventoryPage.jsx';
import { FavoritesContext } from './contexts/FavoritesContext.jsx';

test('renders LandingPage without crashing', () => {
    render(
        <MemoryRouter>
            <Landing />
        </MemoryRouter>
    );
});

test('renders SalesBanner with correct message', () => {
    const { getByText } = render(
        <MemoryRouter>
            <Landing />
        </MemoryRouter>
    );
    const salesBannerMessage = getByText('SUMMER SALE ON NOW');
    expect(salesBannerMessage).toBeInTheDocument();
});

test('navigates to /inventory when handleViewInventory is called', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/inventory" element={ <div>Test Div</div> } />
        </Routes>
      </MemoryRouter>
    );

    const viewInventoryButton = screen.getByText('Click here to view all inventory');
    fireEvent.click(viewInventoryButton);

    await waitFor(() => {
      expect(screen.getByText('Test Div')).toBeInTheDocument();
    });
});

test('navigates to correct route when a vehicle type is clicked', async () => {
    const mockFavorites = [];
    const mockSetFavorites = jest.fn();

    render(
        <FavoritesContext.Provider value={{ favorites: mockFavorites, setFavorites: mockSetFavorites }}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="*" element={<Landing />} />
                    <Route path="/inventory" element={ <Inventory /> } />
                </Routes>
            </MemoryRouter>
        </FavoritesContext.Provider>
    );

    const vehicleTypeButton = screen.getByText('Van');
    fireEvent.click(vehicleTypeButton);

    await waitFor(() => {
        const checkbox = screen.getByRole('checkbox', { name: /van/i });
        expect(checkbox).toBeChecked();
    });
});

test('navigates to inventory and automatically filters for convertibles when the convertible button is clicked', async () => {
    const mockFavorites = [];
    const mockSetFavorites = jest.fn();

    render(
        <FavoritesContext.Provider value={{ favorites: mockFavorites, setFavorites: mockSetFavorites }}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="*" element={<Landing />} />
                    <Route path="/inventory" element={ <Inventory /> } />
                </Routes>
            </MemoryRouter>
        </FavoritesContext.Provider>
    );

    const vehicleTypeButton = screen.getByText('Convertible');
    fireEvent.click(vehicleTypeButton);

    await waitFor(() => {
        const checkbox = screen.getByRole('checkbox', { name: /convertible/i });
        expect(checkbox).toBeChecked();
    });
});