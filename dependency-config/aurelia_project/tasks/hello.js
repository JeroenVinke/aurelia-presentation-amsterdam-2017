import {CLIOptions} from 'aurelia-cli';

const task = () => {
  if (CLIOptions.hasFlag('text')) {
    console.log('hello ' + CLIOptions.getFlagValue('text'));
  } else {
    console.log('hello world');
  }
};

export { task as default };
