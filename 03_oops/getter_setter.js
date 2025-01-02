class GetterSetter {
  constructor(name) {
    this._name = name;
    console.log("This class is used for understand getter-setter");
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    this._name = newname;
  }
}

let object = new GetterSetter("rohan");
console.log(object.name);

object.name = "ansh";
console.log(object.name);

// instance of operator
// for check weather of object

console.log(object instanceof GetterSetter);
