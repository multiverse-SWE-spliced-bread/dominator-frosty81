let para = document.getElementById("patrick");
  let text = para.innerText;
  let split = text.split("");


const btn1 = document.getElementById("quiet-btn");
btn1.addEventListener("click", changeLower);

function changeLower() {
  let para = document.getElementById("patrick");

  let text = para.innerText;

  document.getElementById("patrick").innerText = text.toLowerCase();
}

const btn2 = document.getElementById("loud-btn");
btn2.addEventListener("click", changeUpper);
function changeUpper() {
  para = document.getElementById("patrick");
  text = para.innerText;

  document.getElementById("patrick").innerText = text.toUpperCase();
}

const btn3 = document.getElementById("sarc-btn");
btn3.addEventListener("click", changeSarc);

function changeSarc() {
let finalString = '';
let counter = 0;

  for (let i = 0; i < para.innerText.length; i++) {
    
    if (para.innerText[i] == " ") {
      finalString += para.innerText[i]
      continue;
    }
    if (para.innerText [i] == "." || para.innerText[i] == "," || para.innerText [i] == "!"){
      finalString += para.innerText[i]
      continue;
    }
    if (counter % 2 == 0) {
      finalString = para.innerText[i].toLowerCase();
    } else {
      finalString= para.innerText[i].toUpperCase();
    }
    counter++
  }
  para.innerText = finalString;
  // document.getElementById("patrick").innerText = char.toLowerCase();
  //     document.getElementById("patrick").innerText = char.toUpperCase();
}
