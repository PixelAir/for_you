const messages = [
    { text: "Hey Virat", delay: 3000 },
    { text: "I have something special for you", delay: 5000 },
    { text: "But first, you have to answer a few questions", delay: 5000 },
    { text: "Can I ask?", button: "Yes" },
    { text: "Do you love Isha?", options: ["Yes", "No"] },
    { text: "Are you sure? Think again", options: ["Yes, I am sure", "Go back"], goBackIndex: 4 },
    { text: "Finally, puchh rhi hu, do you love me naa?", options: ["Yes", "No"], noMoves: true },
    { text: "Itni jaldi kya h, aaram se socho", options: ["Still No", "Go back"], goBackIndex: 6 },
    { text: "Itna kyu bhao kha rhe ho🙃. Haa boldo na 🫠", options: ["Still No", "Ok"] },
    { text: "Finally, puchh rhi hu, do you love me naa?", options: ["Yes"] },
    { text: "Love you more ❤️", hearts: true, delay: 5000 },
    { text: "So now you are ready", delay: 3000 },
    { text: "Happy Valentine's Day", finalMusic: true }
];

let currentIndex = 0;
const messageElement = document.getElementById("message");
const buttonElement = document.getElementById("nextBtn");
const audioElement = document.getElementById("backgroundMusic");

function nextMessage(selectedOption = null) {
    if (selectedOption === "Go back") {
        currentIndex = messages[currentIndex].goBackIndex;
    } else if (selectedOption) {
        currentIndex++;
    }

    if (currentIndex >= messages.length) return;
    
    const msg = messages[currentIndex];
    messageElement.innerHTML = "";
    buttonElement.style.display = "none";

    if (msg.text) {
        typeMessage(msg.text, () => {
            if (msg.button) {
                buttonElement.innerText = msg.button;
                buttonElement.style.display = "block";
                buttonElement.onclick = () => nextMessage("Yes");
            } else if (msg.options) {
                buttonElement.style.display = "none";
                createOptions(msg.options, msg.noMoves);
            } else if (msg.delay) {
                setTimeout(nextMessage, msg.delay);
            }
        });
    }

    if (msg.finalMusic) {
        audioElement.pause();
        playFinalMusic();
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

function createOptions(options, noMoves) {
    messageElement.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => nextMessage(option);
        
        if (option === "No" && noMoves) {
            btn.style.position = "absolute";
            btn.style.left = Math.random() * 80 + "%";
            btn.style.top = Math.random() * 80 + "%";
            btn.onmouseover = () => moveButton(btn);
        }
        
        document.body.appendChild(btn);
    });
}

function moveButton(button) {
    button.style.left = Math.random() * 80 + "%";
    button.style.top = Math.random() * 80 + "%";
}

function playFinalMusic() {
    const finalMusic = new Audio("https://raw.githubusercontent.com/PixelAir/for_you/main/music/Love-You-Forever-Mashup.mp3");
    finalMusic.play();
}

window.onload = function() {
    audioElement.play();
    nextMessage();
};
