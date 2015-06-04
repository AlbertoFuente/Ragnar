define('services', function() {
    'use strict';

    return {
        getJsonData: function(url) {
            return new Promise((resolve, reject) => {
                let req = new XMLHttpRequest();
                req.open('GET', url);

                req.onload = () => {
                    if (req.status === 200) {
                        resolve(req.response);
                    } else {
                        reject(Error(req.statusText));
                    }
                };
                req.onerror = () => {
                    reject(Error(req.statusText));
                };
                req.send();
            });
        }
    };
});
