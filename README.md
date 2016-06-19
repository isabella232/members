# Textbook

[![Build Status](https://travis-ci.org/mjhea0/textbook.svg?branch=master)](https://travis-ci.org/mjhea0/textbook)
[![Coverage Status](https://coveralls.io/repos/github/mjhea0/textbook/badge.svg?branch=master)](https://coveralls.io/github/mjhea0/textbook?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/752d6403c16544b4aef8dca5ed6c2bb5)](https://www.codacy.com/app/hermanmu/textbook?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mjhea0/textbook&amp;utm_campaign=Badge_Grade)

Just a simple learning management system for textbook-like sites.

[Staging Server](http://textbook-lms.herokuapp.com/).

## Development

### Getting started

1. Generate Express Boilerplate
1. Organize project structure
1. Update and install dependencies
1. Set up server side templates
1. Add flash messaging
1. Write tests
1. Set up Travis CI
1. Add code coverage
1. Add JSHint
1. Deploy to staging server
  - heroku run knex migrate:latest --env staging
  - heroku run knex seed:run --env staging

### User Stories

#### Unregistered

1. Unregistered users should be able to log in via Github

#### Registered

1. Users should be able to view all the chapters
1. Users should be able to view a single chapter
1. User should be able to view standards and lessons within a chapter
1. Users should be able to view lessons on the sidebar
