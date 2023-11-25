var prod = document.getElementById('show')


var arr = fetch('https://jsonplaceholder.typicode.com/photos')
.then((data=>data.json()))
.then((data=>{
   
    for (var i = 0; i < data.length; i++) {

        var pro = data[i]
        
        var p = document.createElement('h4')
        p.innerHTML = pro.id
        prod.appendChild(p)
    
        var des = document.createElement('p')
        des.innerHTML = pro.title
        prod.appendChild(des)
        des.setAttribute("id","desc")
    
        var img = document.createElement('img')
        img.src = pro.url
        prod.appendChild(img)
        img.setAttribute('width', '200')
        img.setAttribute('id', 'im')
    }
}))
.catch((err=>{
   console.log(err);
}))




