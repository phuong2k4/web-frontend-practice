const btn = document.querySelector(".btn-open-model")
const popup = document.querySelector(".popup-model")
const containerModel = document.querySelector("div.container-model")
const iconClose = document.querySelector("i")
const btnClose = document.querySelector(".popup-model-btn")
const model = document.querySelector(".model")


function toggleModel(){
    popup.classList.toggle("show")
}

btn.addEventListener("click", toggleModel)
iconClose.addEventListener("click", toggleModel)
btnClose.addEventListener("click",toggleModel)

model.addEventListener("click", (e)=>{
    if(e.target == e.currentTarget){
        toggleModel()
    }
})