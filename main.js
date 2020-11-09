canvas =document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

background_image="race track.jpg";

car_image_1="download.png";

car_image_1_width=100;
car_image_1_height=90;

car_image_1_x=15;
car_image_1_y=15;


car_image_2="car.png"

car_image_2_width=100;
car_image_2_height=90;

car_image_2_x=30;
car_image_2_y=30;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=background_image;

    car_imgTag1=new Image();
    car_imgTag1.onload=uploadcar2;
    car_imgTag1.src=background_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag,car_image_1_x,car_image_1_x,canvas.width,canvas.height);
}


function uploadcar2(){
    ctx.drawImage(car_imgTag1,car_image_2_x,car_image_2_x,canvas.width,canvas.height);
}
