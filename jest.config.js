module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|webp)$': '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/(?!react-redux)/'],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
};
