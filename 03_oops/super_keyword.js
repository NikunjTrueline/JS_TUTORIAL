class employee {
  login() {
    console.log("\nEmployee logged-in at morning.");
  }

  logout() {
    console.log("Employee logged-out at evening.");
  }

  leave(leavesDay) {
    console.log(
      "Ohk!! your " + leavesDay + " day leave is approved" + " Thank you."
    );
  }
}

class programmer extends employee {
  leave(leave) {
    super.leave(leave + 1);
  }
}

class financial extends employee {
  leave(leave) {
    super.leave(leave - 1);
  }
}

let rohan = new programmer();
rohan.login();
rohan.leave(10);
rohan.logout();

let kartik = new financial();
kartik.leave(10);
