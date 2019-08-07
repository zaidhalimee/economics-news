global.console.log = jest.fn(); // silence console.log during jest tests
global.console.time = jest.fn(); // silence console.time during jest tests

const readScenario = require('./readScenario');

let fileToValidateMock;
const dataDirPath = './././data';

const readFiles = (fileNames, dirPath = dataDirPath) =>
  fileNames.forEach(fileName => {
    readScenario.readScenario(fileName, dirPath);
  });

const testReadScenario = (fileNames, expectedCalls) => {
  const newsDirPath = './././data/news/articles';
  readFiles(fileNames, newsDirPath);

  expect(fileToValidateMock.mock.calls).toEqual(expectedCalls);
};

describe('readScenario helper', () => {
  beforeEach(() => {
    fileToValidateMock = jest.spyOn(readScenario, 'fileToValidate');
  });

  afterEach(() => {
    fileToValidateMock.mockRestore();
  });

  it('should readScenario given a valid array and directory name', () => {
    const fileNames = [
      'c0000000001o.json',
      'c0000000002o.json',
      'c0000000003o.json',
    ];
    const expectedCalls = [
      ['./././data/news/articles/c0000000001o.json'],
      ['./././data/news/articles/c0000000002o.json'],
      ['./././data/news/articles/c0000000003o.json'],
    ];

    testReadScenario(fileNames, expectedCalls);
  });

  it('should process exit on validation error', () => {
    const fileName = 'invalidScenario.json';
    const invalidDataPath = './dataValidator';

    process.exit = jest.fn();

    try {
      readScenario.readScenario(fileName, invalidDataPath);
    } catch (error) {
      expect(process.exit).toHaveBeenCalled();
    }
  });

  it('should ignore onward-journeys', () => {
    const fileNames = ['c0000000001o.json', 'onward-journeys'];
    const expectedCalls = [['./././data/news/articles/c0000000001o.json']];

    testReadScenario(fileNames, expectedCalls);
  });

  it('should ignore files that are not in json format', () => {
    const fileNames = ['schema.yaml'];

    readFiles(fileNames);

    expect(fileToValidateMock).not.toHaveBeenCalled();
  });
});
