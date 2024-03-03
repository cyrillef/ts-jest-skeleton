
import echo from '@/tools/echo';

export const power2: (x: number) => number
	= (x: number): number => {
		return (x * x);
	};

export const echoPower2: (x: number) => void
	= (x: number): void => {
		echo(power2(x));
	};

export default power2;
