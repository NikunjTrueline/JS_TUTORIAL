function hackedWifi() {
  console.log("MyFriend your wifi is hacked....");
}



function process() {
  console.log(yourname);
  console.log("Your data is in processing...");
}

function downloadFile() {
 setTimeout(() => {
    console.log(drive_images);
 }, 1000);
}


// when you feel that an error may occure for any kind of reason , make it habit to write such code in try..catch block.

// try catch block work only syncrouns task error if get error in future at that time try catch can not work.

try {
  hackedWifi();
  process();
} catch (error) {
  console.log("wait we got some issues...");
} finally {
  console.log("All time run this block");
}

// try {
//   downloadFile()
// } catch (error) {
//   console.log("wait we got some issues...");
// }


// you can use throw keyword for handle custom error.

// try{
//    console.log(custom)
// }catch(e)
// {
//   throw new Error("My custom error")
// }

