const path = require('path');
const { spawn } = require('child_process');
const glob = require('glob');

const CLOSURE_COMPILER_JAR = path.resolve(__dirname, 'node_modules/google-closure-compiler/compiler.jar');

const blacklistedFiles = [
  'index.js',
  'lodash.js',
  'lodash.min.js',
  'fp.js'
];

const cmdLineArgs = [
  '-jar', CLOSURE_COMPILER_JAR,
  '--js', '../src/*.js',
  '--js', '../src/api/*.js',
  '--entry_point', '../src/main.js',
  '--language_in', 'ECMASCRIPT6',
  '--language_out', 'ECMASCRIPT5',
  '--compilation_level', 'ADVANCED_OPTIMIZATIONS',
  '--jscomp_off', '*',
  '--js_output_file', 'bundle.js'
];

spawn('java', cmdLineArgs, { stdio: 'inherit' });
