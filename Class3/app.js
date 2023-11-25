// Promises have 3 step

// pending  ------e.g Loader
// resolve  ------- accept
// reject

// ---------------------------------------------------
// let pro = new Promise((res, rej) => {

//     let eat = "zinger"
//     if (eat == "zinger") {
//         res(" ok ...")   // .then
//     }
//     else {
//         rej("No....")    // .catch
//     }
// })

// pro.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// ---------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(data => data.json())
//     .then((data) => { document.write(data) })
//     .catch(err => { console.log(err) })

// ---------------------------------------------------

let arr = [
    {
        id: 1,
        des: "hello",
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

    },
    {
        id: 2,
        des: "hello1",
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

    },
    {
        id: 3,
        des: "hello2",
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

    }, {
        id: 3,
        des: "hello2",
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

    }, {
        id: 3,
        des: "hello2",
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

    }

]
var prod = document.getElementById('show')

for (i = 0; i < arr.length; i++) {

    var pro = arr[i]
    // console.log(pro);
    var p = document.createElement('p')
    p.innerHTML = pro.id
    prod.appendChild(p)

    var des = document.createElement('p')
    des.innerHTML = pro.des
    prod.appendChild(des)

    var img = document.createElement('img')
    img.src = pro.image
    prod.appendChild(img)
    img.setAttribute('width', '100')
}