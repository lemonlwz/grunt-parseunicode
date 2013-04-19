# grunt-parseunicode

parse js css to unicode

## Getting Started
Install this grunt plugin next to your project's Gruntfile.js with: `npm install grunt-parseunicode`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-parseunicode');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
Configure Example:
```javascript
  parseunicode: {
    dist: {
      src: ['test/**/*min.js'], //the path to the file
      options: {
        charset: 'utf8', //default utf8
        type: 'js' //default js
      }
    }
  }
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
 * 2013-04-19 - v0.1.7.1 - Upgrade support grunt 0.4.1 & no dependencies iconv-lite
 * 2012-10-17 - v0.1.6 - Upgrade support grunt ~0.4.0 

## License
Copyright (c) 2012 [lemonlwz](http://www.coolicer.com/)
Licensed under the MIT license.