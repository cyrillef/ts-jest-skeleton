import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';

const aliases: any = {
	"@/math/*": ["/Users/cyrille/Developer/ts/src/server/math/*"],
	"@/tools/*": ["/Users/cyrille/Developer/ts/src/server/tools/*"]
};

const config: Config.InitialOptions = {
	rootDir: '/Users/cyrille/Developer/ts/src/__tests__/server',
	roots: ['<rootDir>'],
	testMatch: [
		'**/?(*.)+(spec|test).+(ts)',
	],
	transform: {
		'^.+\\.(ts)$': 'ts-jest',
	},

	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	automock: false,
	globalSetup: '<rootDir>/server/jest.global.setup.ts',
	globalTeardown: '<rootDir>/server/jest.global.teardown.ts',

	modulePaths: ['/Users/cyrille/Developer/ts/src/server'], // <-- This will be set to 'baseUrl' value
	// moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
	moduleNameMapper: pathsToModuleNameMapper(aliases
		// ,{ prefix: '<rootDir>/' }
		),

};

export default config;