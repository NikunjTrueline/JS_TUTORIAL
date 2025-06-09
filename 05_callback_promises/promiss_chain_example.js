// Task1 : sabse pahele ghare pe aao
// Task2 : gate kholo ander aao
// Task3 : khana banao khana khao
// Task4 : incognito open karo
// Task5 : aap bahot thak gaye ho so jao

let task1 = new Promise((res, rej) => {
    return res("sabse pahele ghare pe aao");
});

let task2 = task1.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("gate kholo ander aao");
    });
});

let task3 = task2.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("khana banao khana khao");
    });
});

task3.then((data) => {
    console.log(data);
});


