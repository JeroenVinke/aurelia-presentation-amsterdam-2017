export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    $(this.dialog).modal();
  }
}
