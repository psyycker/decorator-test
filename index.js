import Dog from "./src/Dog";

(
  function() {
    const dog = new Dog()
    dog.bark();
    console.log('\n\n')
    dog.say('hello wo.. Woof!');
  }()
)
