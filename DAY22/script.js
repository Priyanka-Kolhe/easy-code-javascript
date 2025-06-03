let main = document.getElementsByClassName("main-div")
let inner = document.getElementsByClassName("inner-div")
let sname = document.getElementById("sname")
let sclass = document.getElementById("sclass")
let smark = document.getElementById("smark")
let btn = document.getElementById("btn")

let allstdinfo = []

btn.addEventListener("click",()=>{

    let stdinfo = {
        Name : sname.value,
        Class : sclass.value,
        Mark : smark.value
    }

    allstdinfo.push(stdinfo)
    console.log(allstdinfo)
    localStorage.setItem("studentinfo",JSON.stringify(allstdinfo))
})