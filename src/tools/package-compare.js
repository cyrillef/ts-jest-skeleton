const chalk = require('chalk');
const _path = require('path');

const packages = [
	require(_path.resolve('/Users/cyrille/Developer/ADN/adndata/package.json')),
	require(_path.resolve('/Users/cyrille/Developer/topo/aps-topo/package.json')),
	// require('./packages/generator-cec/package.json'),
	// require('./packages/utility-cec-simulator/package.json')
];

const compareDependencies = (level, base, other) => {
	const all = [...new Set([...Object.keys(base), ...Object.keys(other),])].sort();
	const results = all.map((key) => {
		if (!base[key] && other[key])
			return ({ level, key, base: '', other: other[key] });
		if (base[key] && !other[key])
			return ({ level, key, base: base[key], other: '' });
		if (base[key] && other[key] && base[key] !== other[key])
			return ({ level, key, base: base[key], other: other[key] });
		return (null);
	});
	return (results.filter((elt) => elt !== null));
};

const comparePackages = (package1, package2) => {
	return ([
		...compareDependencies('dependencies', package1.dependencies, package2.dependencies),
		...compareDependencies('devDependencies', package1.devDependencies, package2.devDependencies),
	]);
};

const results = comparePackages(packages[0], packages[1]);
console.table(results);
