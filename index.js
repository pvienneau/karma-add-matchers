(function() {
    'use strict';

    function AddMatchers(files) {
        files.push({
            pattern: require.resolve('add-matchers').replace('index.js', 'dist/add-matchers.js'),
            included: true,
            served: true,
            watched: false
        });
    }

    AddMatchers.$inject = ['config.files'];

    module.exports = {
        'framework:add-matchers': ['factory', AddMatchers]
    };
}());
