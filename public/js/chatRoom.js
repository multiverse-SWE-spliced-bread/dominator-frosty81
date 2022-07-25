const value = document.getElementByTag("input");

const btn1 = document
  .getElementById("send-btn")
  .addEventListener("click", append);

function append() {
  const btn = document.getElementById("send-btn");
  btn.append;
}

// Use javascript to listen for the click event of the `send-btn` - when the button is clicked, the contents of the text input should be appended as a child `<p>` element to the `<section id="chat">` element.
