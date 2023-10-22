// Scopes????


// Hoisting             --------------------------

// console.log(abc)
// var abc="ahsan"
// output : undefined


// console.log(abc)
// let abc="ahsan"
// Output : Cannot access 'abc' before initialization


// console.log(abc)
// const abc="ahsan"
// Output : Cannot access 'abc' before initialization


// Template Literals        --------------------------

// var fname = "Ahsan "
// var lname = "Sajjad "
// var merge = `firstname : ${fname} andLastname : ${lname}`
// console.log(merge)


// Rest Parameter        --------------------------

// function foo(a,b,...rest){
// var num = 0 
// for(var key in rest){
//     num+= rest[key]
//     // console.log(key)
// }

// console.log(a,b,num)
// }
// foo(1,2,3,5,5,3,3,2,2,3) 