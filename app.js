var art = document.getElementById('art');
var iso = new Isomer(art);

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;

var width = window.innerWidth;
var height = window.innerHeight;

art.width = width * 2;
art.height = height * 2;
art.style.width = width + 'px';
art.style.height = height + 'px';

function randomNumber (max) {
  return Math.floor(Math.random() * max);
}

var colors = [
  new Color(160, 60, 150),
  new Color(50, 60, 160),
  new Color(50, 160, 60)
];

function drawGrid () {
  // an array for each color
  var buckets = colors.map(function () {
    return [];
  });

  function randomBucket () {
    return buckets[randomNumber(buckets.length)];
  }

  var depth = 30;
  for (var x = -depth; x < depth; x += 2) {
    for (var y = -depth; y < depth; y += 2) {
      randomBucket()
        .push(Shape.Prism(new Point(x, y, 1), 1.45, 1.45, .5));
    }
  }

  buckets.forEach(function (bucket, index) {
   iso.add(bucket, colors[index]);
  });
}

setInterval(drawGrid, 250);
