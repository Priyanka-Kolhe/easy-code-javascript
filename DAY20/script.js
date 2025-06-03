let box = document.getElementById("box")
// function clicked(){
//     console.log("element was clicked")
// }

// box.addEventListener("click",clicked)

function chntext (){
    if(box.innerText == "Eventlistener"){
        box.innerText = "addEventlistener"
    }
}

// box.addEventListener("click",chntext)

box.addEventListener("dblclick",chntext)