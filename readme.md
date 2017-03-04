# karma-add-matchers

A [Karma](http://karma-runner.github.io/) adapter to inject [add-matchers](https://github.com/JamieMason/add-matchers) for [Jasmine](http://jasmine.github.io/) or [Jest](https://facebook.github.io/jest/).

## Installation

```
npm install karma-add-matchers --save-dev
```

## Integration

Inside your `karma.conf.js` file, add:

```javascript

module.exports = function(config) {
  config.set({

    // ...

    frameworks: [
      'add-matchers'
    ],
    plugins: [
      'karma-add-matchers'
    ]

    // ...
  })
}
```
