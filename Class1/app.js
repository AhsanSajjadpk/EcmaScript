// Scopes????


// Hoisting             --------------------------

// console.log(abc)
// var abc="ahsan"
// output : undefined


// console.log(abc)
// let abc="ahsan"
//Output : Cannot access 'abc' before initialization  nn

// console.log(abc)
// const abc="ahsan"
// Output : Cannot access 'abc' before initialization


// Template Literals        --------------------------

// var fname = "Ahsan "
// var lname = "Sajjad "
// var merge = `firstname : ${fname} andLastname : ${lname}`
// console.log(merge)


// Rest Parameter        --------------------------

// function foo(a, b, ...rest) {
//     let num = 0
//     for (var key in rest) {
//         num+=rest[key]
//     }


//     console.log(a+ b+num);


// }

// foo(1, 2, 2, 3, 2, 1, 2, 3, 9)

// Default Parameter-----------------------------------------


// function deffun(a=5,b=5){
// console.log(a,b);
// }

// deffun(2)