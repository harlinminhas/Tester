// Controllers = routers
var express = require('express');
var router = express.Router();

/* GET home page. */
// GET handler for // < root of the site
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

// GET handler for //about
// Considering About is a page part of Landing Section
// router.get('/about', (req, res, next) => {
//   // first param is view name
//   // second is json object with data for the view
//   res.render('about', { title: 'About Us'});
// });

module.exports = router;
