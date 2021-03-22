## postcss-noop

### Usage

``` js 
const nano = require('cssnano');
const noop == require('postcss-noop');

postcss()
	.use(process.env.NODE_ENV === 'production' ? nano() : noop())
	// ...
```