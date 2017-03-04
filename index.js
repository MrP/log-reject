'use strict';

function logReject(error) {
    console.log(error);
    return Promise.reject(error);
}

logReject.withMessage = function (message) {
    return function(error){
        console.log(message, error);
        return Promise.reject(error);
    };
};

module.exports = logReject;
