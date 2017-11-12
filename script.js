var x=360; //початкова х точка авто
var y=500; //початкова у точка авто
var step=-20; // цикл повторення ліній розмітки (поки працює тільки для розширення 600рх)
var distance=100; // відстань між лініями розмітки
var speed_game=1; // швидкість руху в ігрі
var f=0; //для лічильника рандомних координат
var s=10;
var l=1;
var btnMoveRight=false,btnMoveLeft=false;
var car={};

car.draw=function(){
        var road=document.getElementById('road'),
        context=road.getContext('2d');
        context.fillStyle='yellow';
        context.drawImage(this.img1,this.car,this.step,40,88.08);
        context.beginPath();
    if(this.chndCarsStep){
        this.step+=this.carStep;
        this.chndCarsStep=false;
    }
    if(this.step>=680){
        this.step=-50;
        this.carStep=getRandom(20,40);
        this.car=getRandom(this.carMin,this.carMax);
    }
};
car.chndCarsStep=true;

//допоміжні величини
var random,random1,random_s;
var img = new Image();
//робимо графіку  
function draw() {
    draw_grass();
    context=road.getContext('2d');
    context.fillStyle='gray';
    context.fillRect(80,0,(road.width-160),road.height);
    white_lines();
    drawCars();
    context.drawImage(img,x,y,40,88.08);
    context.beginPath();
    checkLose();
    img.src = 'car.png';
}

function checkLose(){
    if((x>car1.car-40&&x<car1.car+30&&y<car1.step+50&&y>car1.step-100)||(x>car2.car-40&&x<car2.car+30&&y<car2.step+50&&y>car2.step-100)||(x>car3.car-40&&x<car3.car+30&&y<car3.step+50&&y>car3.step-100)||(x>car4.car-40&&x<car4.car+30&&y<car4.step+50&&y>car4.step-100)||(x>car5.car-40&&x<car5.car+30&&y<car5.step+50&&y>car5.step-100)||(x>car6.car-40&&x<car6.car+30&&y<car6.step+50&&y>car6.step-100)){
        var restart=confirm('You Lose.\n\Restart the game?');
        speed_game=1;
        l=1;
        s=0;
        clearInterval(beginID);
        if(restart){
            beginID=setInterval(start,(150/speed_game));
            car1.step=0;
            car2.step=-150;
            car3.step=-220;
            car4.step=0;
            car5.step=-150;
            car6.step=-220;
        }
    }
}

//малюєм траву
function draw_grass(){
    document.getElementById('road'),
    context=road.getContext('2d');
    context.fillStyle='green';
    context.fillRect(0,0,road.width,road.height);
}

function drawCars(){
    car1.draw();
    car2.draw();
    car3.draw();
    car4.draw();
    car5.draw();
    car6.draw();
}

//малюєм розмітку
function white_lines(){
    context=road.getContext('2d');
    context.fillStyle='white';
    context.fillRect((road.width/2),((distance-300)+step),10,100);
    context.fillRect((road.width/2),((distance-100)+step),10,100);
    context.fillRect((road.width/2),(2*distance)+step,10,100);
    context.fillRect((road.width/2),((4*distance))+step,10,100);
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

//малюєм зустрічні машини (ще не працює)
var car1={};
var car2={};
var car3={};
var car4={};
var car5={};
var car6={};

car1.__proto__=car;
    car1.carMin=120;
    car1.carMax=180;
    car1.car=getRandom(this.carMin,this.carMax);
    car1.step=0;
    car1.carStep=getRandom(35,60);
    car1.img1 = new Image();
    car1.img1.src = 'car4.png';
    
car2.__proto__=car;
    car2.carMin=200;
    car2.carMax=240;
    car2.car=getRandom(this.carMin,this.carMax);
    car2.step=-150;
    car2.carStep=getRandom(35,60);
    car2.img1 = new Image();
    car2.img1.src = 'car5.png';
    
car3.__proto__=car;
    car3.carMin=300;
    car3.carMax=340;
    car3.car=getRandom(this.carMin,this.carMax);
    car3.step=-220;
    car3.carStep=getRandom(35,60);
    car3.img1 = new Image();
    car3.img1.src = 'car6.png';
    
car4.__proto__=car;
    car4.carMin=420;
    car4.carMax=460;
    car4.car=getRandom(this.carMin,this.carMax);
    car4.step=0;
    car4.carStep=getRandom(0,5);
    car4.img1 = new Image();
    car4.img1.src = 'car1.png';
    
car5.__proto__=car;
    car5.carMin=520;
    car5.carMax=560;
    car5.car=getRandom(this.carMin,this.carMax);
    car5.step=-150;
    car5.carStep=getRandom(0,5);
    car5.img1 = new Image();
    car5.img1.src = 'car2.png';
    
car6.__proto__=car;
    car6.carMin=640;
    car6.carMax=680;
    car6.car=getRandom(this.carMin,this.carMax);
    car6.step=-220;
    car6.carStep=getRandom(0,5);
    car6.img1 = new Image();
    car6.img1.src = 'car3.png';
   
//визначаємо рандомні координати (х) для зустрічних машин
function random_X(min,max){
    getRandom(min,max);
    random=(Math.floor((Math.round(random1)/20))*20);
    return random;
}

function random_step(min,max){
    getRandom(min,max);
    random_s=Math.round(random1);
    return random_s;
}

function runstep(){
    if(f>=600){
        run_step=0;
        f=0;
    }
    else{
        f=f+1;
        run_step=run_step+random_s;
    }
    return run_step;
}

//визначаємо рандомні числа для подальшого знаходження координат
function getRandom(min,max){
    random1 = min - 0.5 + Math.random() * (max - min + 1);
    random=(Math.floor((Math.round(random1)/20))*20);
    return random1;
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
        case 200:
            clearInterval(beginID);
            l=2;
            speed_game=1.5;
            beginID=setInterval(start,(100/speed_game));
            break;
        case 500:
            clearInterval(beginID);
            l=3;
            speed_game=2;
            beginID=setInterval(start,(100/speed_game));
            break;
        case 800:
            clearInterval(beginID);
            l=4;
            speed_game=2.5;
            beginID=setInterval(start,(100/speed_game));
            break;
        case 1000:
            clearInterval(beginID);
            l=5;
            speed_game=3;
            beginID=setInterval(start,(100/speed_game));
            break;
        case 5000:
            clearInterval(beginID);
            if(confirm("You Win!!!!")){
                s=0;
                l=1;
            }
            break;
        default:
            l=l;
    }
    return l,speed_game,s;
}

//реакція авто на кнопки
$(document).on('keydown', function(event){
    if(event.which===37&&x>=100){
        x=x-15;
        draw();
    }
    if(event.which===39&&x<=(road.width-140)){
        x=x+15;
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


//mouse event
/*$('canvas').on('mousemove',function(e){
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    var Xinner = e.pageX - elem_left;
    var Yinner = e.pageY - elem_top;
    //console.log("X: " + Xinner + " Y: " + Yinner);
    
    if(Xinner>80&&Xinner<680){
        x=Xinner;
    }else if(Xinner<80){
        x=80;
    }else if(Xinner>680){
        x=680;
    }
    
    if(Yinner>350&&Yinner<500){
       y=Yinner;
    }else if(Yinner<350){
       y=350; 
    }else if(Yinner>500){
        y=500;
    }
    draw();
});*/


//початок гри
function start(){
    draw();
    f_step ();
    score();
    ch_lvl();
    level();
    car1.chndCarsStep=true;
    car2.chndCarsStep=true;
    car3.chndCarsStep=true;
    car4.chndCarsStep=true;
    car5.chndCarsStep=true;
    car6.chndCarsStep=true;
}

//затримка по часу (швидкiсть пересування авто)
var beginID=setInterval(start,(100/speed_game));
random_step(5,10);
