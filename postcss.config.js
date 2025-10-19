const autoprefixer = require('autoprefixer');
const cssimport = require('postcss-import')({path: ['./assets/css/**/*.css']});

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [ 
		cssimport,
		autoprefixer,
		// ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ autoprefixer ] : []) 
	]
};