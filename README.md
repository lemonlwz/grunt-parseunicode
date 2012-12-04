# grunt-parseunicode

parse js css to unicode

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-parseunicode`

Then add this line to your project's `grunt.js` gruntfile:

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
_(Nothing yet)_

## License
Copyright (c) 2012 [lemonlwz][http://www.coolicer.com/] 
Licensed under the MIT license.
