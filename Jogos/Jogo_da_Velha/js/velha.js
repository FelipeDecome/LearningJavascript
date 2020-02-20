const wrapper = document.querySelector("#velha");
const stats = document.querySelector("#stats");
const iconX = "<i class='fas fa-times'></i>";
const iconO = "<i class='fas fa-circle'></i>";

let gameState = {
  grid: [
    [1, "", ""],
    [1, "", ""],
    [1, "", ""]
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
    if (this.grid[l][c] === "") {
      this.grid[l][c] = this.playerTurn;

      this.togglePlayerTurn();

      render(this);
      this.verify();
      console.log(gameState);
    }
  },
  verify() {
    if (verifyRow(this.grid)) {
      alert("temos um vencedor");
    }
  },
  resetGrid() {
    for (let l = 0; l < this.grid.length; l++) {
      for (let c = 0; c < this.grid[l].length; c++) {
        this.grid[l][c] = "";
      }
    }
    render(this.grid);
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
  let spanStats = document.createElement("span");
  spanStats.setAttribute("id", "player" + gameState.playerTurn);
  spanStats.innerText = "Player " + -(gameState.playerTurn - 2);

  stats.append(spanStats);
}

render(gameState);

function MarkField(l, c, player) {
  grid[l][c] = player;

  render(grid);
}

function verifyRow(grid) {
  // let total = [];
  for (let l = 0; l < grid.length; l++) {
    let soma = gameState.grid[l].reduce((total, itens) => total + itens, 0);
    if (soma === 3) {
      return true;
    } else {
      return false;
    }
    // total.push(soma);
  }
  // return total;
}

function verifyColumn(grid) {
  let total = [];
  for (let l = 0; l < grid.length; l++) {
    for (let c = 0; c < grid[l].length; c++) {
      total[l] += gameState.grid[c][l];
    }
  }
  return total;
}

console.log(verifyColumn(gameState.grid));
