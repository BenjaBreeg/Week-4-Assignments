// Benja Guzzetta

// The function that checks if the string entered by the user is a palindrome or not.
function isPalindrome(str) {
    // This removes spaces from text and converts it to lowercase for an accurate comparison.
    var cleanedStr = str.replace(/\s+/g, '').toLowerCase(); 
    // This reverses the 'cleaned' string.
    var reversedStr = cleanedStr.split('').reverse().join(''); 
    // This part checks if the 'cleaned' string is equal to its reversed version, aka a palindrome.
    return cleanedStr === reversedStr; 
}

// The function to check if the string entered is palindrome when user clicks the button.
function checkPalindrome() {
    // This gets the user input from the text field.
    var userInput = document.getElementById('userInput').value;

    // This part checks if the input is empty.
    if (userInput.trim() === '') {
        alert('Please enter a possible palindrome...'); // This line is to alert the user to enter a string.
        return;
    }

    // This part checks if the user's string is a palindrome or not.
    if (isPalindrome(userInput)) {
        // Displays the results + an encouranging message afterward if it IS a palindrome.
        document.getElementById('result').innerHTML += `<p>'${userInput}' is a palindrome! Woot!!</p>`;
    } else {
        // Displays the results + an encouraging message afterward if it IS NOT a palindrome.
        document.getElementById('result').innerHTML += `<p>'${userInput}' is not a palindrome, but feel free to try again!!</p>`;
    }

    // This clears the input field after checking, so the user can enter another string.
    document.getElementById('userInput').value = '';
}

// The new function added to validate user's full name and zip code.
function userValidate() {
    // This part gets the user's first and last name, and zip code from the input fields.
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

    // This combines the first and last name with a space in between them.
    var fullName = firstName + ' ' + lastName;

    // This checks if the names enetered are more than 20 characters.
    if (fullName.length > 20) {
        alert('Name cannot exceed 20 characters.'); // This warns the user if the name entered is too long.
        return; // This exits the function if their name is invalid.
    }

    // This checks if the zip code entered is exactly 5 digits long.
    if (!/^\d{5}$/.test(zipCode)) {
        alert('Please enter a 5-digit zip code.'); // Warn the user if the zip code is invalid.
        return; // This exits the function if their zip code is invalid.
    }

    // This shows the secret message if both of the user's inputs are valid.
    document.getElementById('secretMessage').innerHTML = "<p>OMG! You're In!! Here's the Secret Message: Stay Curious & Question EVERYTHING!!!</p>";
}

// These are my new variables to store the audio files.
let socialMediaBrainAudio = new Audio('C:\\Users\\benja\\OneDrive\\Desktop\\old-car-engine_daniel_simion.mp3');
let noSocialMediaBrainAudio = new Audio('C:\\Users\\benja\\OneDrive\\Desktop\\muscle-car-daniel_simon.mp3');

// This is my function to play "Your Brain ON Social Media" audio file.
function socialMediaBrain() {
    // This part pauses the other audio file, "Your Brain OFF Social Media," if it's playing.
    noSocialMediaBrainAudio.pause(); // <-- This stops the current audio file playing.
    noSocialMediaBrainAudio.currentTime = 0; // <-- This resets audio to the beginning.

    // This plays the "Your Brain ON Social Media" audio file.
    socialMediaBrainAudio.play();
}

// This function is to play "Your Brain OFF Social Media" audio file.
function noSocialMediaBrain() {
    // Again, pauses the other audio file if it's playing.
    socialMediaBrainAudio.pause();
    socialMediaBrainAudio.currentTime = 0;

    // This part plays the "Your Brain OFF Social Media" audio file.
    noSocialMediaBrainAudio.play();
}