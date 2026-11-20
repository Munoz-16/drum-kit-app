// Select the Kick button
const kickButton = document.getElementById("kick-button");

// Select the Ride button
const rideButton = document.getElementById("ride-button");

// Select the Kick audio element
const kickSound = document.getElementById("kick-sound");

// Select the Ride audio element
const rideSound = document.getElementById("ride-sound");


// KICK BUTTON FUNCTIONALITY
kickButton.addEventListener("click", function() {

    // Restart the Kick sound
    kickSound.currentTime = 0;

    // Play the Kick sound
    kickSound.play();

});


// RIDE BUTTON FUNCTIONALITY
rideButton.addEventListener("click", function() {

    // Restart the Ride sound
    rideSound.currentTime = 0;

    // Play the Ride sound
    rideSound.play();

});


// KEYBOARD FUNCTIONALITY
document.addEventListener("keydown", function(event) {

    // Check if the A key was pressed
    if (event.key.toLowerCase() === "a") {

        // Restart and play the Kick sound
        kickSound.currentTime = 0;
        kickSound.play();

    }

    // Check if the S key was pressed
    else if (event.key.toLowerCase() === "s") {

        // Restart and play the Ride sound
        rideSound.currentTime = 0;
        rideSound.play();

    }

});
