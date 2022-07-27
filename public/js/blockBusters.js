const texts = document.getElementById("blocks");

for (let i = 2; i < 101; i++) {
  const text = document.createElement("div");
  
  text.setAttribute("id", "block-" + i);
  text.setAttribute("class", "red-block");

  text.addEventListener("mouseover", function () {
    text.style.visibility = "hidden";
  });

  text.addEventListener("mouseleave", function () {
    text.style.visibility = "visible";
  });

  texts.appendChild(text);
}
