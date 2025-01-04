const user = {
    "userName" : "nikunj_Microsoft",
    "userEmail":"user@microsoft.com",
    "userId" : 8987,
    "LoggedIn" : true
}


function checkObject(anyobject)
{
    console.log(`The username is ${anyobject.userName} and userId is ${anyobject.userId} and loggedIn status is ${anyobject.LoggedIn}`)
}

checkObject(user)