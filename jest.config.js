const options = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
};

export default options;
