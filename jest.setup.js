import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

Object.defineProperty(window, 'matchMedia', {
    value: jest.fn((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});