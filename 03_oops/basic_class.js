// create class 
// in class we can store member and method 

class car {
  start() {
    console.log("You can start car engine");
  }

  stop() {
    console.log("You can stop car engine");
  }

  setCarPrice(price){
    this.price = price
  }
}

// create object 

let bmw = new car();
bmw.start();
bmw.setCarPrice(10000)
bmw.stop();

let audi = new car()
audi.start()
audi.stop()



