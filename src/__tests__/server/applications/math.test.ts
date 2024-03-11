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

//import 'module-alias/register';
import power2, { echoPower2 } from '@/math/power2';

describe('math.test.ts', () => {

	beforeAll(async (): Promise<void> => {
		//test = (globalThis as any).__ExpressApp__;
	});

	test('power2(2)', async (): Promise<void> => {
		const result: number = power2(2);
		expect(result).toBeDefined();
		expect(result).toBe(4);
	});

	test('power2(3)', async (): Promise<void> => {
		const result: number = power2(3);
		expect(result).toBeDefined();
		expect(result).toBe(9);
	});

	test('echoPower2(3)', async (): Promise<void> => {
		echoPower2(3);
		expect(true).toBe(true);
	});

});
