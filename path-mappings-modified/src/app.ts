import {getCustomer} from './my/beautiful/folder/structure/test';

export class App {
  message = 'Hello World!';

  attached() {
    this.message = getCustomer().name;
  }
}
