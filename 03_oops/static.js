class demo {
  // instance method
  hello(name) {
    console.log(`Hello!! ${name}`);
  }

  // static method
  static capitlize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

// for access instance method of class need to create object of class.
let obj = new demo();
obj.hello("Nikunj");

// To access the static method of class no need class object you can access the static method from class with class name
console.log(demo.capitlize("nikunj"));


