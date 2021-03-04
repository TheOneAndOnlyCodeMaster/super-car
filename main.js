myCanvas = document.getElementById("myCanvas");
ctx = myCanvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img ="https://studio.code.org/v3/assets/1iqF0I7fSUUFQ3nBqeoThAfL8TMKDEBVlemFVGmouH0/772df9c4adaa99d5838a939957ed0a77_animated-race-cars-free-download-on-clipartmag_829-324.gif";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img ="https://cdn.gamedevmarket.net/wp-content/uploads/20191203194912/e107d64cd980fa41ff9b852ad6c6a7f897f83fcb.gif";
car2_x = 10;
car2_y = 100;


function start_your_engines(){
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    scar = e.keyCode;
    console.log(scar);
    if(scar == 38){
        console.log("up1");
        up1();
    }
    if(scar == 40){
        console.log("down1");
        down1();
    }
    if(scar == 37){
        console.log("left1");
        left1();
    }
    if(scar == 39){
        console.log("right1");
        right1();
    }
    if(scar == 87){
        console.log("up2")
        up2();
    }
    if(scar == 83){
        console.log("down2")
        down2();
    }
    if(scar == 65){
        console.log("left2")
        left2();
    }
    if(scar == 68){
        console.log("right2")
        right2();
    }
}
function left1(){
    if(car1_x >= 0){
        car1_x -= 2;
        console.log("car 1 x =" + car1_x, "car 1 y =" + car1_y);
        uploadcar1();
        uploadcar2();
    }
}

function left2(){
    if(car2_x >= 0){
        car2_x -= 2;
        console.log("car 2 x =" + car2_x, "car 2 y =" + car2_y);
        uploadcar1();
        uploadcar2();
    }
}

function up1(){
    if(car1_y >= 0){
        car1_y -= 2;
        console.log("car 1 x =" + car1_x, "car 1 y =" + car1_y);
        uploadcar1();
        uploadcar2();
    }
}

function up2(){
    if(car2_y >=0){
        car2_y -= 2;
        console.log("car 2 x =" + car2_x, "car 2 y =" + car2_y);
        uploadcar1();
        uploadcar2();
    }
}

function right2(){
    if(car2_x <=700){
        car2_x += 2;
        console.log("car 2 x =" + car2_x, "car 2 y =" + car2_y);
        uploadcar1();
        uploadcar2();
    }
}

function right1(){
    if(car1_x <=700){
        car1_x += 2;
        console.log("car 2 x =" + car2_x, "car 2 y =" + car2_y);
        uploadcar1();
        uploadcar2();
    }
}
function down2(){
    if(car2_y <=500){
        car2_y += 2;
        console.log("car 2 x =" + car2_x, "car 2 y =" + car2_y);
        uploadcar1();
        uploadcar2();
    }
}
function down1(){
    if(car1_y <=500){
        car1_y += 2;
        console.log("car 1 x =" + car1_x, "car 1 y =" + car1_y);
        uploadcar1();
        uploadcar2();
    }
}