
// ======================================
// SELECT ALL AUDIO ELEMENTS
// ======================================

const kickSound = document.getElementById("kick-sound");
const rideSound = document.getElementById("ride-sound");
const boomSound = document.getElementById("boom-sound");
const clapSound = document.getElementById("clap-sound");
const hihatSound = document.getElementById("hihat-sound");
const openhatSound = document.getElementById("openhat-sound");
const snareSound = document.getElementById("snare-sound");
const tinkSound = document.getElementById("tink-sound");
const tomSound = document.getElementById("tom-sound");


// ======================================
// FUNCTION TO PLAY A DRUM SOUND
// ======================================

function playSound(sound) {

    // Restart the sound from the beginning
    sound.currentTime = 0;

    // Play the audio
    sound.play();

}


// ======================================
// CONNECT KEYBOARD KEYS TO SOUNDS
// ======================================

const drumSounds = {

    "a": {
        sound: kickSound,
        button: document.getElementById("kick-button")
    },

    "s": {
        sound: rideSound,
        button: document.getElementById("ride-button")
    },

    "d": {
        sound: boomSound,
        button: document.getElementById("boom-button")
    },

    "f": {
        sound: clapSound,
        button: document.getElementById("clap-button")
    },

    "g": {
        sound: hihatSound,
        button: document.getElementById("hihat-button")
    },

    "h": {
        sound: openhatSound,
        button: document.getElementById("openhat-button")
    },

    "j": {
        sound: snareSound,
        button: document.getElementById("snare-button")
    },

    "k": {
        sound: tinkSound,
        button: document.getElementById("tink-button")
    },

    "l": {
        sound: tomSound,
        button: document.getElementById("tom-button")
    }

};


// ======================================
// BUTTON FUNCTIONALITY
// ======================================

// Add a click event to every drum button
Object.values(drumSounds).forEach(function(drum) {

    drum.button.addEventListener("click", function() {

        // Play the corresponding drum sound
        playSound(drum.sound);

    });

});


// ======================================
// KEYBOARD FUNCTIONALITY
// ======================================

document.addEventListener("keydown", function(event) {

    // Get the pressed key
    const key = event.key.toLowerCase();

    // Find the corresponding drum
    const drum = drumSounds[key];

    // Check if the key has a drum assigned
    if (drum) {

        // Play the corresponding sound
        playSound(drum.sound);

    }

});
