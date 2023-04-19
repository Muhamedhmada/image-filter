let sat = document.getElementById("sat")
let con = document.getElementById("con")
let bright = document.getElementById("bright")
let sepia = document.getElementById("sepia")
let gray = document.getElementById("gray")
let blur = document.getElementById("blur")
let hue = document.getElementById("hue")

let up = document.getElementById("up") 

let img = document.getElementById("img")

let dawnload = document.getElementById("dawnload")

let reset = document.getElementById("reset");
let imgBox = document.querySelector(".img-box")

let resetOne = document.getElementById("desat")
let resettwo = document.getElementById("decon")
let resetthree = document.getElementById("debright")
let resetfour = document.getElementById("desepia")
let resetfive = document.getElementById("degray")
let resetsix = document.getElementById("deblur")
let resetseven = document.getElementById("dehue")

let fitlers = document.querySelectorAll("ul li input");

window.onload = function(){
    dawnload.style.display = 'none'
    reset.style.display = 'none'
    imgBox.style.display = 'none'
}
function resetValue(){
    img.style.filter = 'none'
    sat.value = '100'
    con.value = '100'
    bright.value = '100'
    sepia.value = '0'
    gray.value = '0'
    blur.value = '0'
    hue.value = '0'
}
up.onchange = function(){
    resetValue();
    dawnload.style.display = 'block'
    reset.style.display = 'block'
    imgBox.style.display = 'block'
    let file = new FileReader();
    file.readAsDataURL(up.files[0])
     file.onload = function(){
         img.src = file.result
     }
}

// the filter


for(i = 0; i<fitlers.length; i++){
    fitlers[i].addEventListener('input',function(){
        img.style.filter = `
        saturate(${sat.value}%)
        contrast(${con.value}%)
        brightness(${bright.value}%)
        sepia(${sepia.value}%)
        grayscale(${gray.value}) 
        blur(${blur.value}px)
        hue-rotate(${hue.value}deg)
        `
    })
} 
resetOne.onclick = function(){
    img.style.filter = `
    saturate(${100}%)
    contrast(${con.value}%)
    brightness(${bright.value}%)
    sepia(${sepia.value}%)
    grayscale(${gray.value}) 
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)
`
    sat.value = '100'
}
resettwo.onclick = function(){
    img.style.filter = `
    saturate(${sat.value}%)
    contrast(${100}%)
    brightness(${bright.value}%)
    sepia(${sepia.value}%)
    grayscale(${gray.value}) 
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)
    `
    con.value = '100'
}
resetthree.onclick = function(){
    img.style.filter = `
    saturate(${sat.value}%)
    contrast(${con.value}%)
    brightness(${100}%)
    sepia(${sepia.value}%)
    grayscale(${gray.value}) 
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)
`
    bright.value = '100'
}
resetfour.onclick = function(){
    img.style.filter = `
    saturate(${sat.value}%)
    contrast(${con.value}%)
    brightness(${bright.value}%)
    sepia(${0})
    grayscale(${gray.value}) 
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)
    `
    sepia.value = '0'
}
resetfive.onclick = function(){
    img.style.filter = `
    saturate(${sat.value}%)
    contrast(${con.value}%)
    brightness(${bright.value}%)
    sepia(${sepia.value}%)
    grayscale(${0}) 
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)
    `
    gray.value = '0'
}
resetsix.onclick = function(){
    img.style.filter = `
    saturate(${sat.value}%)
    contrast(${con.value}%)
    brightness(${bright.value}%)
    sepia(${sepia.value}%)
    grayscale(${gray.value}) 
    blur(${0}px)
    hue-rotate(${hue.value}deg)
    `
    blur.value = '0'
}
resetseven.onclick = function(){
    img.style.filter = `
    saturate(${sat.value}%)
    contrast(${con.value}%)
    brightness(${bright.value}%)
    sepia(${sepia.value}%)
    grayscale(${gray.value}) 
    blur(${blur.value}px)
    hue-rotate(${0}deg)
    `
    hue.value = '0'
}


// dawnload the image without filter

// dawnload.onclick = function(){
    // dawnload.href = img.src;
// }




