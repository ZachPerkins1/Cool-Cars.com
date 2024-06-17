module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.cjs",
    '\\.(css|less)$': '<rootDir>/styleMock.cjs'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};