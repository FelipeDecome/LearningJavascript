const $ = document.querySelector.bind(document);

const barContainer = $("#barContainer");
const mouse = {
  x: 0,
  y: 0
}

addEventListener('mousemove', (evt) => {

  mouse.x = evt.x;
  mouse.y = evt.y;


});

let bar = document.createElement('li');
bar.style.backgroundColor = "#333";
bar.style.width = "100px";
bar.style.height = "400px";

let barAfter = document.createElement('span');

barAfter.setAttribute('class', 'bar__after');

barAfter.addEventListener('mousemove', (evt) => {

  console.log(evt.clientX, barAfter.offsetLeft + barAfter.clientWidth / 2);

});

bar.appendChild(barAfter);

barContainer.appendChild(bar);

function valueToPercentage(value, max) {

  // max = 100
  // value = x
  return (value * 100) / max;
}
