let socket = io()
let input = document.querySelector(".input")
let but = document.querySelector(".but")
let butName = document.querySelector(".but_name")
let Name = document.querySelector(".name")
let nameContainer = document.querySelector(".name_container")
let container = document.querySelector(".container")
let messContainer = document.querySelector(".mess_container")
let myName = "";
let y = "";
butName.addEventListener("click", ()=>{
    myName = Name.value
    nameContainer.style.display = "none"
    container.style.display = "block"
})
let li,p;
let leftRightStat = true
but.addEventListener("click", ()=>{
        const clietMessage = input.value
    socket.emit("clientMessage",clietMessage,myName)
    leftRightStat = false
})
messContainer.scroll(0,y)
socket.on("serverMessage", (serverMessage ,name)=>{
    li = document.createElement("li")
    p = document.createElement("p")
    if (name == myName){
        li.classList.add("right")
        p.classList.add("mess_right")
        li.classList.add("right")
        p.classList.add("mess_right")
    }
    else {li.classList.add("left")
        p.classList.add("mess_left")
        li.classList.add("left")
        p.classList.add("mess_left")
}
    p.innerHTML = serverMessage
    messContainer.appendChild(li)
    li.appendChild(p)
    y = messContainer.scrollHeight
    messContainer.scroll(0,y)
})