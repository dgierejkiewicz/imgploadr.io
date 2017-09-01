'use strict';

/**
 * required modules
 */
var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    image = require('../controller/image');

/**
 * export module routes
 */
module.exports = function (app) {
    router.get('/', home.index);
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    rotuer.post('images/:image_id/like', image.like);
    rotuer.post('images/:image_id/comment', image.comment);
    app.use(router);
}