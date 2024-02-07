
const randomval = ()=> parseInt(math.random()*256);
let randomColor= document.getElementById("box")
randomColor.addEventListener("mouseover", ()=>{
    randomColor.style.backgroundColor = `rgb(${randomval().toString(16)} ${randomval().toString(16)} ${randomval().toString(16)})`

})




