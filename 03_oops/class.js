/*

Class is blueprint or form
object is entity. for used class member and method access.

*/

class RailwayReservation {
  fill(name, trainNumber) {
    this.name = name;
    this.trainNumber = trainNumber;
  }

  submit() {
    alert(
      this.name +
        " Form is submitted " +
        "with train number is : " +
        this.trainNumber
    );
  }

  cancle() {
    alert(
      this.name +
        " Form is canclled " +
        "with train number is : " +
        this.trainNumber
    );
  }
}

// create object for class
const rohan = new RailwayReservation();

// call class method through the object
rohan.fill("Rohan", 523231);
rohan.submit();
rohan.cancle();



