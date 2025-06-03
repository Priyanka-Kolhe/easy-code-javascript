// let box = document.getElementById("box")



// box.addEventListener("dblclick",function(){
//     box.style.background = "red"
// })

// box.addEventListener("mousedown",function(){
//     console.log("done")
//     box.style.backgroundColor = "red"
// })

// box.addEventListener("mouseup",function(){
//     console.log("done")
//     box.style.backgroundColor = "red"
// })

// box.addEventListener("mouseout",() =>{
//     console.log("red")
//     box.style.backgroundColor = "red"
//      box.style.borderRadius = "0%"
// })

// box.addEventListener("mouseover",() =>{
//     console.log("white")
//     box.style.backgroundColor = "white"
//     box.style.borderRadius = "50%"
// })

let container = document.getElementById("container")
let box1 = document.getElementById("box1")

container.addEventListener("mousemove",(e)=> {
     console.log("done")
    let x = e.clientx;
    let y = e.clienty;

    box1.style.left = `${x-100}px`;
    box1.style.top = `${y-80}px`;
})

container.addEventListener("click",()=>{
    box1.style.background = "blue"
})
