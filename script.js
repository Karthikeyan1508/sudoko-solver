var zero_grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var sample_grid_1 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

var sample_grid_2 = [
  [1, 0, 0, 2, 0, 3, 8, 0, 0],
  [0, 0, 4, 0, 5, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 2, 0, 9, 5, 0, 3, 0],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [0, 4, 0, 1, 2, 0, 6, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3, 0, 9, 0, 0],
  [0, 0, 7, 4, 0, 2, 0, 0, 6],
];

var sample_grid_3 = [
  [0, 0, 5, 0, 0, 0, 0, 1, 0],
  [0, 0, 3, 0, 0, 0, 2, 9, 0],
  [0, 4, 0, 0, 6, 0, 0, 0, 8],
  [5, 7, 0, 0, 0, 4, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 8, 0, 5, 0],
  [0, 6, 9, 0, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 4, 0],
  [0, 3, 0, 9, 0, 0, 6, 0, 0],
];

var sample_grid_4 = [
  [0, 2, 9, 0, 0, 0, 4, 0, 0],
  [0, 0, 0, 5, 0, 0, 1, 0, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 2, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 7, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 3, 0, 0, 0, 0, 5],
  [0, 1, 0, 0, 9, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 0],
];

var sample_grid_5 = [
  [0, 0, 6, 8, 0, 9, 1, 0, 0],
  [0, 0, 0, 7, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 2, 0, 8, 0, 0, 4],
  [4, 3, 0, 0, 0, 0, 0, 9, 5],
  [0, 6, 0, 0, 0, 0, 0, 8, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 5, 3, 6, 0, 0, 9],
  [0, 0, 7, 0, 0, 0, 4, 0, 0],
];

var sample_grid_6 = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0],
];

var sample_grid_7 = [
  [0, 0, 0, 4, 3, 1, 0, 0, 0],
  [0, 0, 8, 0, 0, 0, 4, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 1, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 5],
  [3, 0, 0, 0, 6, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 7, 0, 0, 0, 0, 0, 6, 0],
  [0, 0, 9, 0, 0, 0, 5, 0, 0],
  [0, 0, 0, 8, 5, 3, 0, 0, 0],
];

var sample_grid_8 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 0, 5, 0, 9, 0, 4, 0],
  [0, 0, 5, 0, 1, 0, 2, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 5, 0],
  [7, 0, 0, 0, 3, 0, 0, 0, 4],
  [0, 6, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 2, 0, 3, 0, 0],
  [0, 8, 0, 6, 0, 4, 0, 9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var clue_grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var solution_grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var sample_grids = [
  sample_grid_1,
  sample_grid_2,
  sample_grid_3,
  sample_grid_4,
  sample_grid_5,
  sample_grid_6,
  sample_grid_7,
  sample_grid_8,
];

var steps = 0;

window.onload = function onLoad() {
  grid_to_table(zero_grid);
};

function onClickSample() {
  document.getElementById("info").innerHTML = "---";
  var randomIndex = Math.floor(Math.random() * sample_grids.length);
  var sample_grid = sample_grids[randomIndex];
  copy_grid(sample_grid, clue_grid);
  grid_to_table(clue_grid);
}

function onClickSolve() {
  steps = 0;
  table_to_grid();

  var count = 0;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (grid[i][j] != 0) count++;
    }
  }

  if (count < 17) {
    document.getElementById("info").textContent =
      "Minimum 17 elements are required in the initial grid.";
    return;
  }

  copy_grid(grid, clue_grid);

  console.log(grid_to_string(clue_grid));

  copy_grid(clue_grid, solution_grid);
  var t0 = performance.now();
  if (!solve()) {
    document.getElementById("info").textContent =
      "No solution found. Check the question properly!";
    return;
  }
  var t1 = performance.now();

  document.getElementById("info").innerHTML =
    "Solved in " +
    steps.toLocaleString() +
    " step(s) and " +
    (t1 - t0).toFixed(0).toLocaleString() +
    " ms.";
  grid_to_table(solution_grid);
}

function onClickClear() {
  document.getElementById("info").innerHTML = "---";
  grid_to_table(zero_grid);
}

function onClickReset() {
  document.getElementById("info").innerHTML = "---";
  grid_to_table(clue_grid);
}

function copy_grid(src, dest) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      dest[i][j] = src[i][j];
    }
  }
}

function grid_to_string(grid) {
  var str = "var sample_grid_ = [";
  for (var i = 0; i < 9; i++) {
    str += "[";
    for (var j = 0; j < 9; j++) {
      str += grid[i][j];
      if (j < 8) str += ",";
    }
    str += "]";
    if (i < 8) str += ",";
  }
  str += "];";

  return str;
}

function grid_to_table(grid) {
  var table = document.getElementById("table");

  if (!table) {
    console.error("Table element not found.");
    return;
  }

  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  for (var i = 0; i < 9; i++) {
    var row = table.insertRow();
    for (var j = 0; j < 9; j++) {
      var cell = row.insertCell();
      var textBox = document.createElement("input");
      textBox.type = "text";
      textBox.id = "cell_" + j + "_" + i;
      if (grid[i][j] != 0) {
        textBox.value = grid[i][j];
      }
      if (clue_grid[i][j] != 0 || grid[i][j] == 0) {
        textBox.className = "clue";
      } else {
        textBox.className = "solution";
      }
      cell.appendChild(textBox);
    }
  }
}

function table_to_grid() {
  var table = document.getElementById("table");

  if (!table) {
    console.error("Table element not found.");
    return;
  }

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var textBox = document.getElementById("cell_" + j + "_" + i);
      if (textBox.value.length == 0 || textBox.className == "solution")
        grid[i][j] = 0;
      else grid[i][j] = parseInt(textBox.value);
    }
  }
}

function possible(y, x, n) {
  for (var i = 0; i < 9; i++) {
    if (grid[y][i] == n) return false;
  }

  for (var i = 0; i < 9; i++) {
    if (grid[i][x] == n) return false;
  }

  var x0 = Math.floor(x / 3) * 3;
  var y0 = Math.floor(y / 3) * 3;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[y0 + i][x0 + j] == n) return false;
    }
  }

  return true;
}

function solve() {
  for (var y = 0; y < 9; y++) {
    for (var x = 0; x < 9; x++) {
      if (grid[y][x] == 0) {
        steps++;
        for (var n = 1; n <= 9; n++) {
          if (possible(y, x, n)) {
            grid[y][x] = n;
            if (solve()) {
              return true;
            }
            grid[y][x] = 0;
          }
        }
        return false;
      }
    }
  }
  copy_grid(grid, solution_grid);
  return true;
}

document.getElementById("reset_btn").addEventListener("click", onClickReset);
document.getElementById("solve_btn").addEventListener("click", onClickSolve);
document.getElementById("clear_btn").addEventListener("click", onClickClear);
document.getElementById("load_btn").addEventListener("click", onClickSample);
