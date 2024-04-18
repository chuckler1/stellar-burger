import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,
  // The directory where Jest should output its coverage files
  // coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: 'v8'
};

export default jestConfig;
