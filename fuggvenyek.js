import { AUTOK } from "./adatok.js";

export function tablazatLetrehozas(){
    let txt = "<table> ";
    txt += `<tr>
    <th>Márka:</th>
    <th>Nemzetiség:</th>
    <th>Lóerő:</th>
</tr>`
    for (let index = 0; index < AUTOK.length; index++) {
        txt += `
            <tr>
                <td>${AUTOK[index].nev}</td>
                <td>${AUTOK[index].nemzetiseg}</td>
                <td>${AUTOK[index].loero}</td>
            </tr>`;
    }
    txt += `</table>`;
    return txt;
}

export function bekatt() {
    
    const katttablaELEM = document.querySelectorAll("table tr")
    for (let index = 0; index < katttablaELEM.length; index++) {
        katttablaELEM[index].addEventListener("click", function(){
            kivalasztottakELEM.innerHTML += `<tr>
            <td>${AUTOK[index].nev}</td>
            </tr>`
        })
    }
    const kivalasztottakELEM = document.querySelectorAll(".kivalasztott")[0]
   
}
