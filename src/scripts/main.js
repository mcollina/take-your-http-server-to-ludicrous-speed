// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  pdf = require('bespoke-pdf'),
  progress = require('bespoke-progress'),
  multimedia = require('bespoke-multimedia'),
  run = require('bespoke-run');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  run(),
  pdf(5000),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  multimedia()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prismjs');
