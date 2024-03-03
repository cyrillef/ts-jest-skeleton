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
