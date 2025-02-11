let currentIndex = 0;
const messages = [
    { text: "Hey Virat", delay: 3000 },
    { text: "I have something special for you", delay: 5000 },
    { text: "But first, you have to answer a few questions", delay: 5000 },
    { text: "Can I ask?", button: "Yes" },
    { text: "Do you love Isha?", options: ["Yes", "No"] },
    { text: "Are you sure? Think again", options: ["Yes, I am sure", "Go back"], goBackIndex: 4 },
    { text: "Finally, puchh rhi hu, do you love me naa?", options: ["Yes", "No"] },
    { text: "Love you more ❤️", hearts: true, delay: 5000 },
    { text: "So now you are ready", delay: 3000 },
    { text: "Happy Valentine's Day", finalMusic: true }
];

const messageElement = document.getElementById("message");
const buttonElement = document.getElementById("nextBtn");

function nextMessage(selectedOption = null) {
    // Update the currentIndex based on user options (Go back or Yes)
    if (selectedOption === "Go back") {
        currentIndex = messages[currentIndex].goBackIndex;
    } else if (selectedOption) {
        currentIndex++;
    }

    // Exit if all messages are shown
    if (currentIndex >= messages.length) return;

    const msg = messages[currentIndex];
    messageElement.innerHTML = "";
    buttonElement.style.display = "none"; // Hide the button initially

    if (msg.text) {
        typeMessage(msg.text, () => {
            if (msg.button) {
                buttonElement.innerText = msg.button;
                buttonElement.style.display = "block"; // Show the button
                buttonElement.onclick = () => nextMessage("Yes");
            } else if (msg.options) {
                buttonElement.style.display = "none";
                createOptions(msg.options);
            } else if (msg.delay) {
                setTimeout(nextMessage, msg.delay); // Set delay for next message
            }
        });
    }

    if (msg.finalMusic) {
        playFinalMusic(); // Play final music when the last message appears
    }
}

function typeMessage(text, callback) {
    let i = 0;
    function typingEffect() {
        if (i < text.length) {
            messageElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        } else {
            callback();
        }
    }
    typingEffect();
}

function createOptions(options) {
    messageElement.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => nextMessage(option);
        document.body.appendChild(btn);
    });
}

function playFinalMusic() {
    const finalMusic = new Audio("https://raw.githubusercontent.com/PixelAir/for_you/main/music/Love-You-Forever-Mashup.mp3");
    finalMusic.play();
}

// Start the flow of messages once the page is loaded
window.onload = function() {
    nextMessage();
};
