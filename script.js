var x=360; //початкова х точка авто
var y=500; //початкова у точка авто
var step=-20; // цикл повторення ліній розмітки (поки працює тільки для розширення 600рх)
var distance=100; // відстань між лініями розмітки
var speed_game=1; // швидкість руху в ігрі
var ran_step=20; //крок для зміни к-ті зустрічних авто
var f=0; //для лічильника рандомних координат
var s=10;
var l=1;

//допоміжні величини
var random;

//малюєм дорогу, розмітку і машину    
function draw() {
    var img = new Image();
    img.onload = function(){
        draw_grass();
        context=road.getContext('2d');
        context.fillStyle='gray';
        context.fillRect(80,0,(road.width-160),road.height);
        context.drawImage(img,x,y,40,88.08);
        context.beginPath();
        white_lines();
        an_car();
    };
    img.src = 'car.png';
}

//малюєм траву
function draw_grass(){
    document.getElementById('road'),
    context=road.getContext('2d');
    context.fillStyle='green';
    context.fillRect(0,0,road.width,road.height);
}

//робимо графіку
function white_lines(){
    context=road.getContext('2d');
    context.fillStyle='white';
    context.fillRect((road.width/2),((distance-300)+step),10,100);
    context.fillRect((road.width/2),((distance-100)+step),10,100);
    context.fillRect((road.width/2),(2*distance)+step,10,100);
    context.fillRect((road.width/2),((4*distance))+step,10,100);
}

//малюєм зустрічні машини (ще не працює)
function an_car(){
    context.fillStyle='yellow';
    context.fillRect(0,0,40,88.08);
}

//визначаємо рандомні координати (х) для зустрічних машин
function random_X(){
    
    if(f===ran_step){
        getRandom();
        f=1;
    }
    else{
        f=f+1;
    }
}

//затримка по часу (швидкусть пересування авто)
setInterval(start,(100/speed_game));

//визначаємо рандомні числа для подальшого знаходження координат
function getRandom(){
    random = 100 - 0.5 + Math.random() * ((road.width-140) - 100 + 1);
    random=(Math.floor((Math.round(random)/20))*20);
    return random;
}


//функція для рахування відстані між розміткою
function f_step (){
    if(step>=180){
        step=0;
        s=s+10; //рахуємо набрані бали
    }
    else{
        step=step+20;
    }
}

//виводимо бали гравця
function score(){
    $('#score').html(s);
}

//виводимо рівень гравця
function level(){
    $('#level').html(l);
}

//змінюємо рівень гри
function ch_lvl(){
    switch(s){
        case 100:
            l=2;
            speed_game=1.5;
            break;
        case 500:
            l=3;
            speed_game=2.5;
            break;
        case 800:
            l=4;
            break;
        case 1000:
            l=5;
            break;
        default:
            l=l;
    }
    return l,speed_game;
}

//реакція авто на кнопки
$(document).on('keydown', function(event){;
    if(event.which===37&&x>=100){
        x=x-20;
        draw();
    }
    if(event.which===39&&x<=(road.width-140)){
        x=x+20;
        draw();
    }
    if(event.which===38&&y>=(road.height-200)){
        y=y-20;
        draw();
    }
    if(event.which===40&&y<=(road.height-120)){
        y=y+20;
        draw();
    }
});


//початок гри
function start(){
    draw();
    random_X();
    f_step ();
    score();
    ch_lvl();
    level();
}

//затримка по часу (швидкусть пересування авто)
setInterval(start,(100/speed_game));