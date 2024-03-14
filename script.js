const toBlack = document.querySelectorAll(".to-black");
const toWhite = document.querySelector(".to-white");
const menu = document.querySelector(".menu");
const activeMenu = document.querySelector(".active-menu");
const navItem = document.querySelector(".nav-item")

const ChangeColors = () => {
    if(document.documentElement.scrollTop !== 0){
        toWhite.style.backgroundColor = "white";
        toBlack.forEach((value)=>{
            value.style.color = "black";
        })
    }else{
        toWhite.style.backgroundColor = "";
        toBlack.forEach((value)=>{
            value.style.color = "white";
        })
    }
}

const showMenu = () => {
    menu.style.display = "block";    
}

const hideMenu = () => {
    menu.style.display = "none";
}

document.addEventListener("scroll", () =>{
    ChangeColors();
})

activeMenu.addEventListener("mouseover", () => {
    showMenu();
})

menu.addEventListener("mouseover", () => {
    showMenu();
})

navItem.addEventListener("mouseleave", () => {
    hideMenu();
})

menu.addEventListener("mouseleave", () => {
    hideMenu();
})

