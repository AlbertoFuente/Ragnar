define('components', ['jquery', 'services', 'buttons', 'samples'], function($, services, buttons, samples) {
    'use strict';

    return {
        jsonData: {},
        getData: function(url) {
            services.getJsonData(url).then((response) => {
                this.jsonData = JSON.parse(response);
                this.start(this.jsonData);
            }, (error) => {
                throw new Error('there is a problem with the json data: ' + error);
            });
        },
        init: function() {
            this.getData('../json/global.json');
        },
        start: function(json) {
            samples.init(buttons, json);
        }
    };
});
