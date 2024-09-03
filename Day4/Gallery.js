const img_click = document.querySelectorAll(".img-css");
const wrapper = document.querySelector(".wrapper")
const gallery = document.querySelector(".gallery")

var html;

img_click.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        gallery.classList.add("gallery-show")
        html = `
            <div class="show-full-img">
                <img src="./public/img${index+1}.jpeg" alt="">
            </div>
            <div class="control-prev"><i class="fa-solid fa-arrow-left"></i></div>
            <div class="control-right"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="exit"><i class="bi bi-x-lg"></i></div>
        `
        gallery.innerHTML+=html

        const exit = document.querySelector(".exit")
        const img = document.querySelector(".show-full-img img")
        const next = document.querySelector(".control-right")
        const back = document.querySelector(".control-prev")

        exit.addEventListener("click", ()=>{
            gallery.classList.remove("gallery-show")
            gallery.innerHTML= ''
        })
        
        next.addEventListener("click",()=>{
            index < img_click.length ? index+=1 : index = 8
            img.src = `./public/img${index}.jpeg`
        })
        
        back.addEventListener("click",()=>{
            index <= 1 ? index = 8 : index -= 1
            img.src = `./public/img${index}.jpeg`
        })
    })
    
})
