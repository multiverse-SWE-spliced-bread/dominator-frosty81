const newBox = document.createElement("div");

newBox.setAttribute("id", "block-i");

const blocks = document.getElementById("block-1");
for (let block of blocks) {
  document.createElement("div");

  block.setAttribute("id", "block-num");
}
