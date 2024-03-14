const toBlack = document.querySelector(".to-black")
const toWhite = document.querySelector(".to-white")

const ChangeColors = () => {
    if(document.documentElement.scrollTop !== 0){
        toWhite.style.backgroundColor = "white";
        toBlack.style.color = "black";
    }else{
        toWhite.style.backgroundColor = "";
        toBlack.style.color = "white"; 
    }
}

document.addEventListener("scroll", () =>{
    ChangeColors()
})
