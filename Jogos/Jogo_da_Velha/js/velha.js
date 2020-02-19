const wrapper = document.querySelector("#velha");
const stats = document.querySelector("#stats");
const iconX = "<i class='fas fa-times'></i>";
const iconO = "<i class='fas fa-circle'></i>";

let gameState = {
  grid: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  playerTurn: 1,
  togglePlayerTurn() {
    if (this.playerTurn == 0) {
      this.playerTurn = 1;
    } else if (this.playerTurn == 1) {
      this.playerTurn = 0;
    }
  },
  markField(l, c) {
    if (this.grid[l][c] === '') {
      this.grid[l][c] = this.playerTurn;

      this.togglePlayerTurn();

      render(this);
      this.verify();
      console.log(gameState);

    }
  },
  verify() {
  }
};

function render(gameState) {
  wrapper.innerHTML = null;
  stats.innerHTML = null;

  for (let l = 0; l < gameState.grid.length; l++) {
    let liRow = document.createElement("li");
    liRow.setAttribute("id", `row_${l}`);
    liRow.classList.add("row");

    let ul = document.createElement("ul");

    for (let c = 0; c < gameState.grid[l].length; c++) {
      let liItem = document.createElement("li");
      liItem.setAttribute("id", `item_${l}-${c}`);
      liItem.classList.add("item");

      liItem.addEventListener("click", event => {
        event.preventDefault(event);

        gameState.markField(l, c);
        console.log(gameState);
      });
      if (gameState.grid[l][c] === 0) {
        liItem.classList.add("iconO");
        liItem.innerHTML = iconO;
      } else if (gameState.grid[l][c] === 1) {
        liItem.classList.add("iconX");
        liItem.innerHTML = iconX;
      }
      ul.append(liItem);

      liRow.append(ul);
    }
    wrapper.append(liRow);
  }
  let spanStats = document.createElement('span');
  spanStats.setAttribute('id', 'player' + gameState.playerTurn);
  spanStats.innerText = 'Player ' + -(gameState.playerTurn - 2);

  stats.append(spanStats);
}

render(gameState);

function MarkField(l, c, player) {
  grid[l][c] = player;

  render(grid);
}
