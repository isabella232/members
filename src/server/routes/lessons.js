var express = require('express');
var router = express.Router();

var authHelpers = require('../auth/helpers');
var chapterQueries = require('../db/queries.chapters');
var lessonQueries = require('../db/queries.lessons');
var routeHelpers = require('./_helpers');

// *** get single lesson *** //
router.get('/:id', authHelpers.ensureAuthenticated,
  function(req, res, next) {
  var renderObject = {
    user: req.user,
    messages: req.flash('messages')
  };
  // get all chapters and associated lessons
  // for the sidebar and navbar
  chapterQueries.chaptersAndLessons()
  .then(function(results) {
    // filter, reduce, and sort the results
    var reducedResults = routeHelpers.reduceResults(results);
    var chapters = routeHelpers.convertArray(reducedResults);
    var sortedChapters = routeHelpers.sortLessonsByOrderNumber(chapters);
    renderObject.sortedChapters = sortedChapters;
    // get single lesson info
    return lessonQueries.getSingleLesson(parseInt(req.params.id))
    .then(function(singleLesson) {
      if (singleLesson.length) {
        var lessonObject = singleLesson[0];
        // renderObject.previousLesson = routeHelpers.getPrevLesson(
        // lessonObject.order, sortedChapters);
        // renderObject.nextChapter = routeHelpers.getNextChapter(
        // lessonObject.order, sortedChapters);
        renderObject.title = 'Textbook LMS - ' + lessonObject.name;
        renderObject.pageTitle = lessonObject.name;
        renderObject.singleLesson = lessonObject;
        return res.render('lesson', renderObject);
      } else {
        req.flash('messages', {
          status: 'success',
          value: 'Sorry. That lesson does not exist.'
        });
        return res.redirect('/');
      }
    });
  })
  .catch(function(err) {
    return next(err);
  });
});

// *** update lesson read status *** //
router.get('/:id/update', authHelpers.ensureAuthenticated,
  function(req, res, next) {
  var read = req.query.read;
  lessonQueries.updateLessonReadStatus(parseInt(req.params.id), read)
  .then(function() {
    req.flash('messages', {
      status: 'success',
      value: 'Status updated.'
    });
    return res.redirect('/');
  })
  .catch(function(err) {
    return res.status(500).render('error', {
      message: 'Something went wrong'
    });
  });
});

module.exports = router;
