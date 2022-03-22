/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let skaiciuoti = document.querySelector("#submit-btn").addEventListener('click', e =>{
    e.preventDefault();
    let skaiciavimas = document.querySelector("#search").value;
    document.querySelector("#output").innerHTML = `
    Svoris kg: ${skaiciavimas} <br>
    Svoris lb: ${skaiciavimas * 2.2046} <br>
    Svoris g: ${skaiciavimas * 0.001} <br>
    Svoris oz: ${skaiciavimas * 35.274}
    
    `
    

});
