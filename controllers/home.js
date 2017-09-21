'use strict';

/**
 * home controller as module
 */
module.exports = {
    index: function (req, res) {
        // res.send('The home:index controller');
        // res.render('index');

        var viewModel = {
            images: [{
                    uniqueId: 1,
                    title: 'Sample Image 1',
                    description: '',
                    filename: 'sample1.jpg',
                    views: 0,
                    likes: 0,
                    timestamp: Date.now
                },
                {
                    uniqueId: 2,
                    title: 'Sample Image 2',
                    description: '',
                    filename: 'sample2.jpg',
                    views: 0,
                    likes: 0,
                    timestamp: Date.now
                }
            ]
        };
        res.render('index', viewModel);
    }
};