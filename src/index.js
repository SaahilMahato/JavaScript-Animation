const box = document.getElementById("box");

const boxWidth = 400;
const boxHeight = 400;

box.style.width = boxWidth + 'px';
box.style.height = boxHeight + 'px';
box.style.border = '2px solid green';
box.style.position = 'relative';


const ball = document.createElement("div");
ball.style.width = '50px';
ball.style.height = '50px';
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'blue';
ball.style.position = 'absolute';
ball.style.left = '175px';
ball.style.top = '0px';


box.appendChild(ball);

let direction = 'down';

const bounce = () => {
    if (direction === 'down') {
        ball.style.top = parseInt(ball.style.top) + 1 + 'px';
        if (parseInt(ball.style.top) + 50 >= boxHeight)
            direction = 'up';
    }
    else {
        ball.style.top = parseInt(ball.style.top) - 1 + 'px';
        if (parseInt(ball.style.top) <= 0)
            direction = 'down';
    }
}

setInterval(bounce, 1);