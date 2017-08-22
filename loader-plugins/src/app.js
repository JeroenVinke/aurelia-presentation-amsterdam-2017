import {Loader} from 'aurelia-loader';

export class App {
  static inject = [Loader];

  constructor(loader) {
    this.message = 'Hello World!';
    this.loader = loader;
  }

  attached() {
    this.loader.loadModule('json!./test.json')
    .then(json => this.json = JSON.stringify(json));
  }
}
