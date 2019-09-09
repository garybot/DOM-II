const blocks = document.querySelectorAll('.block');

let stackTop = -1;
let travelLimit = 500;

blocks.forEach(block => {
  let moving;
  let movingBack;
  let offset = 0;
  block.style.position = 'relative';

  function move() {
    clearInterval(moveBack);
    if (offset < travelLimit) {
      block.style.left = `${offset++}px`;
    } else {
      clearInterval(moving);
      moving = setInterval(moveBack, 20);

    }
  }
  function moveBack() {
    if (offset > 0) {
      block.style.left = `${--offset}px`; 
    } else {
      clearInterval(movingBack);
    }
  }
  // move blocks to the top of the stack
  block.addEventListener('click', event => {
    if (block.style.order > stackTop) {
      block.style.order = `${--stackTop}`;                                                                                                                    
    }
  });

  // move blocks right
  block.addEventListener('mousedown', event => {
    clearInterval(movingBack);
    moving = setInterval(move, 20);
  });

  // move blocks back
  block.addEventListener('mouseup', event => {
    clearInterval(moving);
    clearInterval(movingBack);
    movingBack = setInterval(moveBack, 20);
  });
  block.addEventListener('mouseleave', event => {
    clearInterval(moving);
    clearInterval(movingBack);
    movingBack = setInterval(moveBack, 20);
  });
});

// How to keep funtion declaration in global scope while being able to access
// a unique offset for each block? this, closure, some kind of object for storage?
// Is there a way to combine those mouseup and mouseleave listeners?
