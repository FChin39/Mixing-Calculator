const postcss = require('postcss');

module.exports = postcss.plugin('noop', (opts = {}) => {
	return (root, result) => { };
});