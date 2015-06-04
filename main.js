requirejs.config({
    app_name: 'lab',
    paths: {
        // vendor
        'jquery': 'node_modules/jquery/dist/jquery.min',
        // scripts
        'services': 'js/services',
        'buttons': 'js/buttons',
        'components': 'js/components',
        'samples': 'examples/script/examples.js'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'services': {
            exports: 'services'
        },
        'buttons': {
            exports: 'buttons'
        },
        'components': {
            exports: 'components'
        },
        'samples': {
            exports: 'samples'
        }
    }
});

require(['jquery', 'services', 'buttons', 'components', 'samples'], function($, services, buttons, components, samples) {
    'use strict';
    components.init();
});
