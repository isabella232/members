process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var passportStub = require('passport-stub');

var knex = require('../../src/server/db/knex');
var testHelpers = require('../helpers');
var server = require('../../src/server/app');
var chapterQueries = require('../../src/server/db/queries.chapters');
var lessonQueries = require('../../src/server/db/queries.lessons');

var should = chai.should();

passportStub.install(server);
chai.use(chaiHttp);

describe('routes : index', function() {

  beforeEach(function(done) {
    passportStub.logout();
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('if unauthenticated', function() {
    describe('GET /ping', function() {
      it('should return a response', function(done) {
        chai.request(server)
        .get('/ping')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.equal('pong!');
          done();
        });
      });
    });
    describe('GET /', function() {
      it('should redirect to log in page', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.redirects.length.should.equal(1);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.contain('try Textbook');
          done();
        });
      });
    });
    describe('GET /doesnotexist', function() {
      it('should throw an error', function(done) {
        chai.request(server)
        .get('/doesnotexist')
        .end(function(err, res) {
          res.status.should.equal(404);
          res.type.should.equal('text/html');
          res.text.should.contain('<p>That page cannot be found.</p>');
          done();
        });
      });
    });
  });

  describe('if authenticated, active, and verified', function() {
    beforeEach(function(done) {
      testHelpers.authenticateAndVerifyActiveUser(done);
    });
    afterEach(function(done) {
      passportStub.logout();
      done();
    });
    describe('GET /', function() {
      it('should return a response', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.redirects.length.should.equal(0);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.contain('<h1>Dashboard</h1>');
          res.text.should.contain('<ul id="sidebar-chapter-1" class="lesson-list');
          res.text.should.contain(
            '<p class="completed">0% Complete</p>');
          res.text.should.contain('<a href="#" class="dropdown-toggle avatar-link" data-toggle="dropdown"><img class="avatar" src="https://avatars.io/static/default_128.jpg">&nbsp;Michael Herman <b class="caret"></b></a>');
          res.text.should.contain('<!-- course status -->');
          res.text.should.contain('<!-- course stats -->');
          res.text.should.contain('<!-- activity feed: comments -->');
          res.text.should.not.contain('<h2>You are an admin.</h2>');
          res.text.should.not.contain('Inactive Chapter');
          res.text.should.not.contain('Lesson 1d');
          done();
        });
      });
    });
    describe('GET /', function() {
      it('should show the correct course status', function(done) {
        lessonQueries.getActiveLessons()
        .then(function(lessons) {
          lessonQueries.updateLessonReadStatus(lessons[0].id, true)
          .then(function(response) {
            chai.request(server)
            .get('/')
            .end(function(err, res) {
              res.redirects.length.should.equal(0);
              res.status.should.equal(200);
              res.type.should.equal('text/html');
              res.text.should.contain('<h1>Dashboard</h1>');
              res.text.should.contain(
                '<p class="completed">17% Complete</p>');
              done();
            });
          });
        });
      });
    });
  });

  describe('if authenticated and verified but inactive', function() {
    beforeEach(function(done) {
      testHelpers.authenticateActiveUser(done);
    });
    afterEach(function(done) {
      passportStub.logout();
      done();
    });
    describe('GET /', function() {
      it('should redirect to the inactive page', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.redirects.length.should.equal(1);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.contain(
            '<h2>Please verify your account.</h2>');
          res.text.should.not.contain(
            '<h2>Your account is inactive.</h2>');
          done();
        });
      });
    });
    describe('GET /', function() {
      it('should redirect to the inactive page', function(done) {
        lessonQueries.getActiveLessons()
        .then(function(lessons) {
          lessonQueries.updateLessonReadStatus(lessons[0].id, true)
          .then(function(response) {
            chai.request(server)
            .get('/')
            .end(function(err, res) {
              res.redirects.length.should.equal(1);
              res.status.should.equal(200);
              res.type.should.equal('text/html');
              res.text.should.contain(
                '<h2>Please verify your account.</h2>');
              res.text.should.not.contain(
                '<h2>Your account is inactive.</h2>');
              done();
            });
          });
        });
      });
    });
  });

  describe('if authenticated and active but unverified', function() {
    beforeEach(function(done) {
      testHelpers.authenticateActiveUser(done);
    });
    afterEach(function(done) {
      passportStub.logout();
      done();
    });
    describe('GET /', function() {
      it('should redirect to the not verified page', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.redirects.length.should.equal(1);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.contain(
            '<h2>Please verify your account.</h2>');
          res.text.should.not.contain(
            '<h2>Your account is inactive.</h2>');
          done();
        });
      });
    });
    describe('GET /', function() {
      it('should redirect to the not verified page', function(done) {
        lessonQueries.getActiveLessons()
        .then(function(lessons) {
          lessonQueries.updateLessonReadStatus(lessons[0].id, true)
          .then(function(response) {
            chai.request(server)
            .get('/')
            .end(function(err, res) {
              res.redirects.length.should.equal(1);
              res.status.should.equal(200);
              res.type.should.equal('text/html');
              res.text.should.contain(
                '<h2>Please verify your account.</h2>');
              res.text.should.not.contain(
                '<h2>Your account is inactive.</h2>');
              done();
            });
          });
        });
      });
    });
  });

  describe('if authenticated as an admin', function() {
    beforeEach(function(done) {
      testHelpers.authenticateAdmin(done);
    });
    afterEach(function(done) {
      passportStub.logout();
      done();
    });
    describe('GET /', function() {
      it('should return a response', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.redirects.length.should.equal(0);
          res.status.should.equal(200);
          res.type.should.equal('text/html');
          res.text.should.contain('<h1>Dashboard</h1>');
          res.text.should.contain('<h2>You are an admin.</h2>');
          done();
        });
      });
    });
  });

});
