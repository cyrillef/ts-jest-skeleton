//
// Copyright (c) Autodesk, Inc. All rights reserved
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM 'AS IS' AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//
/*jshint esversion: 9 */

import _path from 'path';
import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';

const testsSrc: string = _path.resolve(__dirname, '../..');
const serverSrc: string = _path.resolve(__dirname, '../../../server');

const aliases: any = {
	"@/math/*": [`${serverSrc}/math/*`],
	"@/tools/*": [`${serverSrc}/tools/*`],
};

const config: Config.InitialOptions = {
	rootDir: `${testsSrc}/server`,
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

	// modulePaths: ['/Users/cyrille/Developer/ts/src/server'], // <-- This will be set to 'baseUrl' value
	// moduleNameMapper: pathsToModuleNameMapper(aliases /* ,{ prefix: '<rootDir>/' } */),

	modulePaths: [serverSrc], // <-- This will be set to 'baseUrl' value
	moduleNameMapper: pathsToModuleNameMapper(aliases /* ,{ prefix: '<rootDir>/' } */),

};

export default config;