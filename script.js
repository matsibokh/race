var x=360;

var board=document.getElementById('road'),
    context=road.getContext('2d');
    context.fillStyle='aqua';
    context.fillRect(0,0,road.width,road.height);



var img = new Image();
img.onload = function(){
      context.drawImage(img,x,700,40,88.08);
      context.beginPath();
    };
img.src = 'car.png';