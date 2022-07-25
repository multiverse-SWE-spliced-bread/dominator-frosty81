const btn1 = document
  .getElementById("send-btn")
  .addEventListener("click", append);

function changeCase() {
  var x = document.getElementById("chat").value;
  document.getElementById("chat").appendChild(x);
}
