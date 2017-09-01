'use strict';

/**
 * required modules
 */
var path = require('path'),
    routes = require('routes'),
    exhbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('mehod-override'),
    errorHandler = require('errorhandler');

/**
 * export module configure
 */
module.exports = function (app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        'extended': true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value'));
    routes(app);

    app.use('/public/', express.static(path.join(__dirname, '../public')));
    if ('development' === app.get('env')) {
        app.use(errorHandler);
    }

    return app;

}