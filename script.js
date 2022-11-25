// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// for (let i = 0; i < 8; i++) {
//     ctx.fillRect(i * 10, i * 10, 10, 10);
// }


////Draw a square

// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'Red';
// ctx.fillRect(100, 0, 50, 25);
// ctx.fillRect(120, 25, 10, 10);
// ctx.fillRect(70, 35, 110, 5);
// ctx.fillRect(95, 40, 60, 30);
// ctx.fillRect(95, 70, 10, 25);
// ctx.fillRect(145, 70, 10, 25);


////Color selection

// let canvas1 = document.getElementById('canvas');
// let ctx = canvas1.getContext('2d');
// ctx.fillStyle = 'Red';
// ctx.fillRect(0, 0, 50, 100);
// ctx.fillStyle = 'Yellow';
// ctx.fillRect(50, 0, 50, 100);
// ctx.fillStyle = 'Brown';
// ctx.fillRect(100, 0, 50, 100);

// //Drawing rectangle outlines
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.strokeStyle = 'DeepPink';
// ctx.lineWidth = 4;
// ctx.strokeRect(10, 10, 100, 20);


// //Drawing lines or paths
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.strokeStyle = 'Turquoise';
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(60, 60);
// ctx.moveTo(60, 10);
// ctx.lineTo(10, 60);
// ctx.stroke();


// //Filling with color
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'Green';
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 60);
// ctx.lineTo(130, 30);
// ctx.lineTo(160, 60);
// ctx.lineTo(160, 100);
// ctx.lineTo(100, 100);
// ctx.fill();


// //Drawing arcs and circles
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.strokeStyle = 'Green';
// ctx.lineWidth = 2;

// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();



//Drawing multiple circles using the function

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let circle = function (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();

};
ctx.lineWidth = 4;
ctx.strokeStyle = 'Red';
circle(100, 100, 10);
ctx.strokeStyle = 'Orange';
circle(100, 100, 20);
ctx.strokeStyle = 'Yellow';
circle(100, 100, 30);
ctx.strokeStyle = 'Green';
circle(100, 100, 40);
ctx.strokeStyle = 'Blue';
circle(100, 100, 50);
ctx.strokeStyle = 'Purpule';
circle(100, 100, 60);



