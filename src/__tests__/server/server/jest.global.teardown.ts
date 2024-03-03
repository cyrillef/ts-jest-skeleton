
// import type { GlobalConfig } from '@jest/types';

export const globalTeardown: () => Promise<void>
	= async (): Promise<void> => {

		//(globalThis as any).__ExpressApp__ = undefined;

	};

export default globalTeardown;
