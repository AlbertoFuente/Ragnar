define('components', ['services', 'buttons'], function(services, buttons) {
    'use strict';

    return {
        jsonData: [],
        getData: function(url) {
            services.getJsonData(url).then((response) => {
                this.jsonData.push(JSON.parse(response));
                if (this.jsonData.length > 0) {
                    this.start(this.jsonData);
                }
            }, (error) => {
                throw new Error('there is a problem with the json data: ' + error);
            });
        },
        init: function() {
            this.getData('../json/global.json');
        },
        start: function(json) {
            console.log(json);
        }
    };
});
