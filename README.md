[![NPM
version](https://badge.fury.io/js/hydro-require.png)](http://badge.fury.io/js/hydro-require)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-require.png)](http://travis-ci.org/hydrojs/hydro-require)

# hydro-require

## Synopsis

Require modules and export them globally before executing the tests.

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-require'],
  require: {
    'assert': 'assert',
    'should': 'should',
  },
});
```

## Installation

```bash
npm install hydro-require
```

## Tests

```bash
$ make test
```

Coverage:

```bash
$ make test-cov
```

## License

(The MIT License)

Copyright (c) 2013-2014 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
