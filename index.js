import { tablazatLetrehozas, bekatt } from "./fuggvenyek.js"


const tablazatELEM = document.getElementsByClassName("tartalom")[0]
tablazatELEM.innerHTML += tablazatLetrehozas()
const tablazatosELEM = document.querySelectorAll("table tr")
for (let i = 0; i < tablazatosELEM.length; i++) {
    tablazatosELEM[i].addEventListener("mouseover", function(){
        tablazatosELEM[i].classList.add("kiv");
    })
}
for (let i = 0; i < tablazatosELEM.length; i++) {
    tablazatosELEM[i].addEventListener("mouseout", function(){
        tablazatosELEM[i].classList.remove("kiv");
})
}


bekatt()