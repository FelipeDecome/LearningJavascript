function move(s, f) {
  console.log("Mova de " + s + " para " + f + "<br/>");

  // setTimeout(() => {
  //   window.location.reload();
  // }, 1000000);
}

function hanoi(n, f, h, t) {
  console.log(n);
  if (n > 0) {
    // console.log("a");
    hanoi(n - 1, f, t, h);
    // console.log("b");
    move(f, t);
    // console.log("c");
    hanoi(n - 1, h, f, t);
  }
}
