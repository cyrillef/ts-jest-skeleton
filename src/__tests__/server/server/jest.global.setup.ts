//import 'module-alias/register';

export const globalSetup: () => Promise<void>
	= async (): Promise<void> => {

		// (globalThis as any).__ExpressApp__ = expressApp;

	};

// afterAll(async (): Promise<void> => {
// });

export default globalSetup;