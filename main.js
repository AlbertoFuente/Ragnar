requirejs.config({
    app_name: 'lab',
    paths: {
        // scripts
        'services': 'js/services',
        'buttons': 'js/buttons',
        'components': 'js/components'
    },
    shim: {
        'services': {
            exports: 'services'
        },
        'buttons': {
            exports: 'buttons'
        },
        'components': {
            exports: 'components'
        }
    }
});

require(['services', 'buttons', 'components'], function(services, buttons, components) {
    'use strict';
    components.init();
});
