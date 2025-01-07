// Constructor.
// special type of member function for class
// automatically invoked by new keyword
// used for intilize object


class User {
  constructor(username, logedInCount, signInStatus) {
    this.username = username;
    this.logedInCount = logedInCount;
    this.signInStatus = signInStatus;

    return this;
  }
}

// const userOne = new User("Nikunj", 10, true);
// const userTwo = new User("rohan", 7, false);

// console.log(userOne.signInStatus);
// console.log(userTwo.logedInCount);

//--------------------------------------------------

class RailwayReservation {
  // for create constructor use constructor keyword
  constructor(name, trainNumber) {
    this.name = name;
    this.trainNumber = trainNumber;
  }

  submit() {
    console.log(
      this.name +
        " Form is submitted " +
        "with train number is : " +
        this.trainNumber
    );
  }

  cancle() {
    console.log(
      this.name +
        " Form is canclled " +
        "with train number is : " +
        this.trainNumber
    );
  }
}

let rohan = new RailwayReservation("Rohan", 523231);
rohan.submit();

let shubham = new RailwayReservation("Shubham", 896578);
shubham.cancle();

