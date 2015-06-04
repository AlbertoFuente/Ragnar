define('components', ['services', 'buttons'], function(services, buttons) {
    'use strict';

    return {
        getData: function() {
            let json = [],
                url = '../json/global.json';
            try {
                services.getJsonData(url).then((response) => {
                    json = JSON.parse(response);
                }, (error) => {
                    throw new Error('there is a problem with the json data: ' + error);
                });
            } catch (err) {
                console.log(err.message);
            } finally {
                if (json.length === 0) {
                    services.getJsonData(url).then((response) => {
                        json = JSON.parse(response);
                    }, (error) => {
                        throw new Error('there is a problem with the json data: ' + error);
                    });
                }
            }
            return json;
        },
        init: function() {
            var json = this.getData();
            console.log(json);
        }
    };
});
