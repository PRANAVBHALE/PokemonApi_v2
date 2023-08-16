import '@testing-library/jest-dom';
import 'node-fetch';
import { server } from './src/mocks/server';

global.beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
global.afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
global.afterAll(() => server.close());
