import fetch from 'jest-fetch-mock';
import path from 'path';
import { TextEncoder, TextDecoder } from 'util';
import { ReadableStream } from 'node:stream/web';
import { MessageChannel, MessagePort } from 'node:worker_threads';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.fetch = fetch;
global.AbortSignal = {
  timeout: jest.fn(),
};
global.ReadableStream = ReadableStream;
global.MessageChannel = MessageChannel;
global.MessagePort = MessagePort;

Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: jest.fn(),
    getRandomValues: jest.fn(),
  },
});

global.crypto.randomUUID = jest.fn();

/*
 * Mock to avoid async behaviour in tests
 */
jest.mock('#contexts/ServiceContext');

global.Cypress = {
  env: jest.fn(),
};

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: true,
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

// Mock RequireJS globally and let individual tests mock it as needed
window.require = jest.fn();

process.env.SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN = 'http://localhost:7080';
process.env.SIMORGH_PUBLIC_STATIC_ASSETS_PATH = '/';
process.env.SIMORGH_ASSETS_MANIFEST_PATH = path.resolve(
  __dirname,
  '../server/assets/fixture.json',
);
process.env.SIMORGH_OPTIMIZELY_SDK_KEY = 'LptPKDnHyAFu9V12s5xCz';
