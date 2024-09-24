// DO NOT CHANGE ANYTHING IN THIS FILE.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when arr="1,2,3" and elements="1,3"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1,2,3');
    mPrompt.mockReturnValueOnce('1,3');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([2]);
    });
  });
  test('when arr="1,2,3,4,5" and elements="2, 3', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1,2,3,4,5');
    mPrompt.mockReturnValueOnce('2,3');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([1, 4, 5]);
    });
  });
  test('when arr="1,2,2,2,2,3" and elements="2"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1,2,2,2,2,3');
    mPrompt.mockReturnValueOnce('2');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([1, 3]);
    });
  });
  test('when arr="1,1,2,2,3,3,4,4,2,2,1" and elements="1,2"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1,1,2,2,3,3,4,4,2,2,1');
    mPrompt.mockReturnValueOnce('1,2');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([3, 3, 4, 4]);
    });
  });
  test('when arr="1,1,1,1,1,1" and elements="1', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1,1,1,1,1,1');
    mPrompt.mockReturnValueOnce('1');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([]);
    });
  });
});
