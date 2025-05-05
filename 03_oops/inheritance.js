// extends keyword used for inheritance in js

class car {
  details(name, price) {
    console.log("Car name is " + name);
    console.log("Car price is " + price);
  }
}

class mercidies extends car {
  luxurious() {
    console.log("Mercidies provide luxuriuness to  their customer.");
  }
}

const bmw = new car();
bmw.details("BMW", 1200000);

const g_Wagon = new mercidies();
g_Wagon.luxurious();
g_Wagon.details("G-Wagon", 1500000);


