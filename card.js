#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');


clear();

const lines = [
  `${chalk.white.bold('Samudra Palijama')} / ${chalk.hex('#0094C6')('@indrapalijama')}`,
  `${chalk.hex('#d4d4d4')('Fullstack Dev @ Anabatic Technologies')}`,
  '',
  `${chalk.white.bold('Web')}        ${chalk.hex('#0094C6').underline('https://indrapalijama.github.io')}`,
  `${chalk.white.bold('GitHub')}     ${chalk.hex('#0094C6').underline('https://github.com/indrapalijama')}`,
  `${chalk.white.bold('LinkedIn')}   ${chalk.hex('#0094C6').underline('https://linkedin.com/in/samudrapalijama/')}`,
  `${chalk.white.bold('Mail')}       ${chalk.hex('#0094C6').underline('mailto:indrapalijama@gmail.com')}`
];

const output = boxen(lines.join('\n'), {
  backgroundColor: '#141414',
  borderColor: '#d4d4d4',
  borderStyle: 'single',
  margin: 1,
  padding: 1
});

console.log(output);
