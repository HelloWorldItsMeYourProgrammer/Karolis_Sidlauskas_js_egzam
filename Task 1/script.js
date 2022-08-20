/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (e) => {
    
    let kilogramai = document.querySelector("input[name=number]").value;
    e.preventDefault();
    let svarai = kilogramai*2.2046;
    let gramai = kilogramai/0.0010000;
    let uncijos = kilogramai*35.274;

    const svarais = document.createElement("h2");
svarais.textContent = svarai + " lb";
document.getElementById("output").append(svarais);

const gramais = document.createElement("h2");
gramais.textContent = gramai + " g";
document.getElementById("output").append(gramais);

const uncijomis = document.createElement("h2");
uncijomis.textContent = uncijos + " oz";
document.getElementById("output").append(uncijomis);

const output = document.getElementById("output");
output.style.background = "gray";
output.style.textAlign = "center";
output.style.margin = "10rem 15rem 10rem 15rem";
output.style.borderRadius = "0.5rem"
output.style.padding = "1em 0 1em 0";
});
