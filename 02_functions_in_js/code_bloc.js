var a = 10

console.log(a)

{
    a = 20
    let b = 90
    console.log(b)
}

// console.log(b)

console.log(a)

const pi = 3.14

console.log(pi)

for(var i = 1; i<=10; i++)
{
    console.log(i)
}

console.log(i)
console.log(i)

// nested function

function outer()
{

    let a = 10
    let b = 20

    function inner(a,b){
        console.log(a+b)
    }

    inner(a,b)
}


outer()