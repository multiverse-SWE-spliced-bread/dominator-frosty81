

const btn1 = document.getElementById("send-btn");

btn1.addEventListener("click", function () {

  let text = document.getElementById("chat");

  text.innerHTML += `<p>${document.getElementById("input1").value}</p>`;

  document.getElementById("input1").value = "";

});
npm