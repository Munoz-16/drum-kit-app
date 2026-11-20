
// Select the Kick button from the HTML
const kickButton = document.getElementById("kick-button");

// Select the kick drum audio element
const kickSound = document.getElementById("kick-sound");

// Listen for clicks on the Kick button
kickButton.addEventListener("click", function() {

    // Restart the sound from the beginning
    kickSound.currentTime = 0;

    // Play the kick drum sound
    kickSound.play();

});
