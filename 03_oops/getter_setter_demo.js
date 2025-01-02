class GetterSetterDemo {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  data() {
    console.log(`email is ${this.email} and password is ${this.password}`);
  }

  set password(value) {
    this._password = value;
  }

  get password() {
    return `User password is ${this._password}`;
  }
}

// let obj1 = new GetterSetterDemo("nikunj@gmail.com",123)
// obj1.data()

let obj1 = new GetterSetterDemo();
obj1.password = 4567;
console.log(obj1.password);
