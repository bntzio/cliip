#!/usr/bin/env node
'use strict';
const argv = require('yargs').argv;

const logger = require('./logger');

function startCli(args) {
  if (args.length > 0) {
    args.forEach(function(arg) {
      logger(arg);
    });
  } else {
    logger();
  }
}

startCli(argv._);
