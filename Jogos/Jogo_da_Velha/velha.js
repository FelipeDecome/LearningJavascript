let grid = [
  [0, 0, 0], // y
  [0, 0, 0], // y
  [0, 0, 0] // y
  // x  x  x
];

function render(grid) {
  const wrapper = document.querySelector("#velha");
  console.log(wrapper);

  for (let l = 0; l < 3; l++) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "ul_" + l);
    ul.style.position = "relative";

    for (let c = 0; c < 3; c++) {
      let li = document.createElement("li");
      li.style.display = "inline";
      li.style.padding = "0 3x";
      li.innerText = grid[l][c];
      ul.append(li);

      wrapper.append(ul);
    }
    console.log(wrapper);
  }
}

render(grid);
