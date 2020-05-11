import { log } from "./decorators";

@log
export default class Dog {

  bark() {
    console.log('woof');
  }

  say(toSay) {
    console.log(toSay)
    return 'The dog said ' + toSay
  }
}
