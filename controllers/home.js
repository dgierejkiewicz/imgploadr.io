'use strict';

/**
 * home controller as module
 */
module.exports = {
    index: function (req, res) {
        // res.send('The home:index controller');
        res.render('index');
    }
};