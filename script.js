// Function to add the typing effect
function typingEffect(element, text, index, callback) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typingEffect(element, text, index + 1, callback), 100);
    } else if (callback) {
        callback();
    }
}

document.getElementById("start-btn").addEventListener("click", function() {
    this.classList.add("hidden");
    typingEffect(document.getElementById("message"), "I have something special for you...", 0, () => {
        setTimeout(() => {
            typingEffect(document.getElementById("message"), "But first, answer a few questions!", 0, () => {
                setTimeout(() => {
                    document.getElementById("question1").classList.remove("hidden");
                }, 1000);
            });
        }, 1000);
    });
});

document.getElementById("yes1").addEventListener("click", function() {
    document.getElementById("question1").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Are you sure? Think again! 🤔", 0, () => {
        setTimeout(() => {
            document.getElementById("confirm1").classList.remove("hidden");
        }, 1000);
    });
});

document.getElementById("no1").addEventListener("click", function() {
    document.getElementById("question1").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Itni jaldi kya h? Soch lo! 🧐", 0, () => {
        setTimeout(() => {
            document.getElementById("confirm1").classList.remove("hidden");
        }, 1000);
    });
});

document.getElementById("yes2").addEventListener("click", function() {
    document.getElementById("confirm1").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Ok, now you are confirmed!", 0, () => {
        setTimeout(() => {
            document.getElementById("love-message").classList.remove("hidden");
            document.getElementById("bg-music").play();
        }, 1000);
    });
});

document.getElementById("final-yes").addEventListener("click", function() {
    document.getElementById("love-message").classList.add("hidden");
    typingEffect(document.getElementById("message"), "Happy Valentine's Day! 🎉💖", 0, () => {
        setTimeout(() => {
            document.getElementById("valentine").classList.remove("hidden");
        }, 1000);
    });
});

setTimeout(() => {
    document.getElementById("more-messages").classList.remove("hidden");
    setTimeout(() => {
        setInterval(() => {
            const slides = document.querySelectorAll('.message-slide');
            slides.forEach(slide => {
                slide.classList.add("hidden");
            });
            setTimeout(() => {
                slides.forEach(slide => {
                    slide.classList.remove("hidden");
                });
            }, 1000);
        }, 3000);
    }, 3000);
}, 2000);
