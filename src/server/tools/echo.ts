
export const echo: (x: string | number) => void
	= (x: string | number): void => {
		console.log(x.toString())
	};

export default echo;
