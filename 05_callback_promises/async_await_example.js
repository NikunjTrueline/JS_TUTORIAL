//  Async await in js

async function getUserData() {
    let rawData = await fetch("https://randomuser.me/api/");

    let data = await rawData.json();

    console.log(data);
}

getUserData();
