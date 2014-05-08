# gulp-inc [![Build Status](https://travis-ci.org/danioso/gulp-inc.png)](https://travis-ci.org/danioso/gulp-inc)

Inject file contents with an include tag and compile using your favorite preprocessor like CoffeeScript, Markdown, Sass, etc.

## Install
```js
npm install gulp-inc
```

## Example usage with [Gulp](http://github.com/gulpjs/gulp)

Compile Markdown files to HTML before injecting contents.

**HTML File**
```html
#= include /path/to/file.md
```

**gulpfile**
```js
var gulp = require('gulp');
var include = require('gulp-inc');
var marked = require('marked');

markdown = function( stringFileContent ){
	return marked(stringFileContent);
}

gulp.task('inject', function() {
    gulp.src('./app/*.html')
        .pipe(include({
        	preproccesor: markdown
        }))
        .pipe(gulp.dest('./dist'));
});

```

## Options

- **regex** (optional) RegExp
- **preproccesor** (optional) function

## License

The MIT License (MIT)

Copyright (c) 2014 Daniel Osorio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.