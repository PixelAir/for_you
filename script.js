// Function to add the typing effect
function typingEffect(element, text, index, callback) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typingEffect(element, text, index + 1, callback), 100);
    } else if (callback) {
        callback();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Start playing the background music when the page loads
    const bgMusic = document.getElementById("bg-music");
    bgMusic.play();  // Starts the song (Char Kadam from PK)

    // Show first message "Hey Virat"
    const firstMessage = document.getElementById("message");
    firstMessage.innerHTML = "Hey Virat ❤️";

    setTimeout(() => {
        firstMessage.classList.add("hidden");
        typingEffect(firstMessage, "I have something special for you...", 0, () => {
            setTimeout(() => {
                typingEffect(firstMessage, "But first, you have to answer a few questions!", 0, () => {
                    setTimeout(() => {
                        document.getElementById("question1").classList.remove("hidden");
                    }, 1000);
                });
            }, 2000);
        });
    }, 2000);
});

// After pressing the "Yes" button for "Can I ask?"
document.getElementById("yes1").addEventListener("click", function() {
    document.getElementById("yes1").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Do you love Isha? ❤️", 0, () => {
        setTimeout(() => {
            // Show the "Yes" and "No" options for the question "Do you love Isha?"
            document.getElementById("question1").classList.remove("hidden");
        }, 1000);
    });
});

document.getElementById("no1").addEventListener("click", function() {
    // Handle "No" answer logic
    document.getElementById("question1").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Itni jaldi kya h? Soch lo! 🧐", 0, () => {
        setTimeout(() => {
            document.getElementById("confirm1").classList.remove("hidden");
        }, 1000);
    });
});

document.getElementById("yes2").addEventListener("click", function() {
    // Handle "Yes" answer logic
    document.getElementById("confirm1").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Ok, now you are confirmed!", 0, () => {
        setTimeout(() => {
            document.getElementById("love-message").classList.remove("hidden");
            document.getElementById("bg-music").play();  // Restart or continue the music
        }, 1000);
    });
});
