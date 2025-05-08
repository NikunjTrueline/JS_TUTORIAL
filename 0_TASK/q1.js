/*

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

*/



let message;
let login = "Director";


(login=="Employee") ?  message = "Hello" : (login == "Director") ? message = "greetings" : (login == "") ? message = "no login" : message = "none";

console.log(message)

