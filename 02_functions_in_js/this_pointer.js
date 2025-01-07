let userThis = {
  userName: "Nikunj@google",
  userId: 796,
  userStatus: "on-site",
  userLoggedIn: function(){
    console.log(`${this.userName} , welcome on dashboard.`);
  },
};

userThis.userLoggedIn();

// bydefault this give empty object 
console.log(this)
