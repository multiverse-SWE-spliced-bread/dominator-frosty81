  let para = document.getElementById("patrick");
  let text = para.innerText;
    
const btn1 = document.getElementById("quiet-btn");
function changeLower() {
  para.innerText = text.toLowerCase();
}

const btn2 = document.getElementById("loud-btn");
function changeUpper() {
  para.innerText = para.innerText.toUpperCase();
}


const btn3 = document.getElementById("sarc-btn");
function changeSarc() {
let finalString = '';
let counter = 0;
for(let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      finalString += text[i];
      continue;
    }
    if (text[i] == "." || text[i] == "," || text[i] == "!"){
      finalString += text[i];
      continue;
    }
    if (counter % 2 == 0) {
      finalString += text[i].toLowerCase();
    } else {
      finalString += text[i].toUpperCase();
    }
    counter++
  }
  para.innerText = finalString;
  console.log(text)
}

btn1.addEventListener("click", changeLower);
btn2.addEventListener("click", changeUpper);
btn3.addEventListener("click", changeSarc);
