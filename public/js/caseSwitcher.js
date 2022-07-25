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
  let para = document.getElementById("patrick");
  let text = para.innerText;
  let split = text.split("");
  console.log(split);

  for (let i = 0; i < split.length; i++) {
    if (split[i] === " ") {
      continue;
    }
    if (i % 2 === 0) {
      split[i] = split[i].toUpperCase();
    } else {
      split[i] = split[i].toLowerCase();
    }
  }
  para.innerText = split.join("");
  // document.getElementById("patrick").innerText = char.toLowerCase();
  //     document.getElementById("patrick").innerText = char.toUpperCase();
}
