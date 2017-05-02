#!/usr/bin/env node
'use strict';
const yargs = require('yargs');

const logger = require('./logger');

const argv = yargs
  .command('ip', 'Get your current ip')
  .command('hostname', 'Get your current ip hostname')
  .command('city', 'Get your current ip city')
  .command('region', 'Get your current ip region')
  .command('country', 'Get your current ip country')
  .command('loc', 'Get your current ip location')
  .command('org', 'Get current ip organization name')
  .command('postal', 'Get current postal code for your ip organization')
  .help()
  .argv;

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
