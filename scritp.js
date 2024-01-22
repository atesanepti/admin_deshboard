let profileButton = document.querySelector("#profileButton")
let profileTop = document.querySelector("#profileTop")
let menu = document.querySelector("#menu")
let menuIcon = document.querySelector("#menuIcon")
let search = document.querySelector("#search")

profileButton.addEventListener('mouseover',()=>{
    profileTop.classList.add("open")
})
document.body.addEventListener('mousedown',()=>{
    profileTop.classList.remove("open")
})

menuIcon.addEventListener("click",()=>[
    menu.classList.toggle("open")
])

search.addEventListener("change",(e)=>{
    let userValue = e.target.value.toLocaleLowerCase()
    if (userValue == "dark"){
        document.body.classList.add("darkTheme")
        localStorage.setItem("dark","darkTheme")
        search.value = ''
    }
    else if(userValue == "white"){
        document.body.classList.remove("darkTheme")
        localStorage.removeItem("dark")
        search.value = ''
    }

})
document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("dark")){
        document.body.classList.add(localStorage.getItem("dark"))
    }
})