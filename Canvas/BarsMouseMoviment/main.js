const $ = document.querySelector.bind(document);

const barContainer = $("#barContainer");
const mouse = {
  x: 0,
  y: 0
}

let bar = document.createElement('li');
bar.style.backgroundColor = "#333";
bar.style.width = "100px";
bar.style.height = "400px";

let barAfter = document.createElement('span');

barAfter.setAttribute('class', 'bar__after');

addEventListener('mousemove', (evt) => {

  mouse.x = evt.x;
  mouse.y = evt.y;

  if (isInside(barAfter)) {
    console.log('ola');
  }
});

bar.appendChild(barAfter);

barContainer.appendChild(bar);

function isInside(element) {

  // max = 100
  // value = x
  return (mouse.x > element.offsetLeft && mouse.x < (element.offsetLeft + element.clientWidth));
}
