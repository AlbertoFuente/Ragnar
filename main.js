requirejs.config({
    app_name: 'lab',
    paths: {
        // vendor
        'jquery': '../node_modules/jquery/dist/jquery.min',
        // scripts
        'services': 'components/services',
        'buttons': 'components/buttons',
        'samples': 'examples/script/examples'
  },
  shim: {
        'services': {
            exports: 'services',
        },
        'buttons': {
            exports: 'buttons'
        },
        'jquery': {
            exports: 'jquery'
        },
        'samples': {
            exports: 'samples'
        }
    }
});

require(['jquery', 'services', 'buttons', 'samples'], function($, services, buttons, samples){
    'use strict';
	samples.init();
});
