// Benja Guzzetta

// This is my variable to store the interval for the circular movement of the gif.
let circularMovementInterval = null;

// These are my variables to keep track of the angle and speed of the gif's movement.
let angle = 0;
const speed = 0.05; // <-- This part is the speed of the gif movement, smaller values mean slower movement.

// This function moves the gif in a circular motion on the page.
function moveGifInCircle() {
    // This gets the gif image element.
    const gif = document.getElementById('fry_gif');
    
    // This defines the radius of the circular motion for the gif.
    const radius = 200; // <-- I can adjust this to part make the circle bigger or smaller.
    
    // This part calculates the center of the screen, (where the circle will be drawn around.)
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // This part calculates the new 'x' and 'y' positions based on the angle.
    const newX = centerX + radius * Math.cos(angle);
    const newY = centerY + radius * Math.sin(angle);

    // This updates the gif's position on the screen.
    gif.style.left = newX + 'px';
    gif.style.top = newY + 'px';

    // This little part increments the angle to update the gif's position on the circular motion, for the next go-around.
    angle += speed;
}

// This function starts the circular motion of the gif.
function startGifMovement() {
    // This disables the Start button to prevent multiple clicks from the user.
    document.getElementById('startBtn').disabled = true;
    
    // This enables the Stop button.
    document.getElementById('stopBtn').disabled = false;
    
    // This part starts the circular motion by calling the moveGifInCircle function every 50 miliseconds.
    circularMovementInterval = setInterval(moveGifInCircle, 50);
}

// This function stops the circular motion of the gif.
function stopGifMovement() {
    // This enables the Start button so the user can start the merry-go-round again.
    document.getElementById('startBtn').disabled = false;
    
    // This disables the Stop button.
    document.getElementById('stopBtn').disabled = true;
    
    // This stops the circular motion of the gif.
    clearInterval(circularMovementInterval);
}