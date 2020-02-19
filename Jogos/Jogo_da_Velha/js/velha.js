const wrapper = document.querySelector("#velha");
const Xicon = "<i class='fas fa-times'></i>";
const Oicon = "<i class='fas fa-circle'></i>";

let grid = [
  [null, null, null], // y
  [null, null, null], // y
  [null, null, null] // y
  // x  x  x
];

let gameState = [
  grid => [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  // turn
];

function render(grid) {
  wrapper.innerHTML = null;
  for (let l = 0; l < 3; l++) {
    let liRow = document.createElement("li");
    liRow.setAttribute("id", `row_${l}`);
    liRow.classList.add("row");

    let ul = document.createElement("ul");

    for (let c = 0; c < 3; c++) {
      let liItem = document.createElement("li");
      liItem.setAttribute("id", `item_${l}-${c}`);
      liItem.classList.add("item");

      liItem.addEventListener("click", event => {
        event.preventDefault(event);

        /* ! WHYYYYYYYYYYY */
        MarkField(l, c, 1);
      });
      if (grid[l][c] == 0) {
        liItem.classList.add("iconO");
        liItem.innerHTML = Oicon;
      } else if (grid[l][c] == 1) {
        liItem.classList.add("iconX");
        liItem.innerHTML = Xicon;
      }
      ul.append(liItem);

      liRow.append(ul);
    }
    wrapper.append(liRow);
  }
}

render(grid);

function MarkField(l, c, player) {
  grid[l][c] = player;

  render(grid);
}
