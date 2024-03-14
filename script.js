const toBlack = document.querySelectorAll(".to-black")
const toWhite = document.querySelector(".to-white")

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

document.addEventListener("scroll", () =>{
    ChangeColors()
})
