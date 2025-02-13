// jest.config.js
import nextJest from 'next/jest';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  // Optional: if you have any global setup files
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured if you have a jsconfig.json or tsconfig.json)
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
