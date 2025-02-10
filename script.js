document.addEventListener("DOMContentLoaded", () => {
    let messageElement = document.getElementById("message");
    let music = document.getElementById("bg-music");

    // Message displaying function with typing effect
    function typeMessage(element, text, speed = 100, callback) {
        let i = 0;
        element.innerHTML = "";
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // Show the first message ("Hey Virat")
    function showFirstMessage() {
        typeMessage(messageElement, "Hey Virat ❤️", 150, () => {
            setTimeout(() => {
                messageElement.innerHTML = "";
                showSomethingSpecialMessage();
            }, 5000);
        });
    }

    // Show "I have something special" message
    function showSomethingSpecialMessage() {
        let somethingSpecial = document.getElementById("something-special");
        typeMessage(somethingSpecial, "I have something special for you.", 100, () => {
            setTimeout(() => {
                somethingSpecial.innerHTML = "";
                showNextQuestionMessage();
            }, 5000);
        });
    }

    // Show "But first you have to answer a few questions" message
    function showNextQuestionMessage() {
        typeMessage(messageElement, "But first, you have to answer few questions.", 100, () => {
            setTimeout(() => {
                showCanIAskMessage();
            }, 5000);
        });
    }

    // Show "Can I ask?" message with "Yes" option
    function showCanIAskMessage() {
        messageElement.innerHTML = "Can I ask?";
        let yesButton = document.createElement("button");
        yesButton.innerHTML = "Yes";
        yesButton.classList.add("btn");
        yesButton.onclick = () => showLoveQuestion();
        document.body.appendChild(yesButton);
    }

    // Show the "Do you love Isha?" message
    function showLoveQuestion() {
        let question1 = document.getElementById("question1");
        question1.classList.remove("hidden");
    }

    // Handle the answer of "Do you love Isha?"
    document.getElementById("yes1").addEventListener("click", () => {
        showAreYouSureMessage();
    });

    document.getElementById("no1").addEventListener("click", () => {
        showItniJaldiMessage();
    });

    // Show "Are you sure? Think again" message
    function showAreYouSureMessage() {
        let confirm1 = document.getElementById("confirm1");
        confirm1.classList.remove("hidden");
    }

    // If "Go Back" is clicked, continue from the previous message
    document.getElementById("back1").addEventListener("click", () => {
        document.getElementById("confirm1").classList.add("hidden");
        showLoveQuestion();
    });

    // If "Yes, I am sure" is clicked, show the next page
    document.getElementById("yes2").addEventListener("click", () => {
        showFinallyDoYouLoveMessage();
    });

    // Show the final message page
    function showFinallyDoYouLoveMessage() {
        messageElement.innerHTML = "Finally, puchh rhi hu, do you love me naa? Baad me mood change mat kr lena 🫣";
        let yesButton = document.createElement("button");
        yesButton.innerHTML = "Yes";
        yesButton.classList.add("btn");
        yesButton.onclick = () => showLoveYouMoreMessage();
        document.body.appendChild(yesButton);
    }

    // Show the "Itni jaldi kya h?" message if "No" is clicked
    function showItniJaldiMessage() {
        messageElement.innerHTML = "Itni jaldi kya h, aaram se socho";
        let stillNoButton = document.createElement("button");
        stillNoButton.innerHTML = "Still No";
        stillNoButton.classList.add("btn");
        stillNoButton.onclick = () => showItnaKyuBhaoMessage();
        document.body.appendChild(stillNoButton);

        let goBackButton = document.createElement("button");
        goBackButton.innerHTML = "Go Back";
        goBackButton.classList.add("btn");
        goBackButton.onclick = () => showLoveQuestion();
        document.body.appendChild(goBackButton);
    }

    // Show the "Itna kyu bhao kha rhe ho🙃" message if "Still No" is clicked
    function showItnaKyuBhaoMessage() {
        messageElement.innerHTML = "Itna kyu bhao kha rhe ho🙃. Haa boldo na 🫠";
        let stillNoButton = document.createElement("button");
        stillNoButton.innerHTML = "Still No";
        stillNoButton.classList.add("btn");
        document.body.appendChild(stillNoButton);

        let okButton = document.createElement("button");
        okButton.innerHTML = "Ok";
        okButton.classList.add("btn");
        okButton.onclick = () => showFinallyDoYouLoveMessage();
        document.body.appendChild(okButton);
    }

    // Show "Love You More ❤️" message
    function showLoveYouMoreMessage() {
        let loveMessage = document.getElementById("love-message");
        loveMessage.classList.remove("hidden");
        loveMessage.innerHTML = "Love You More! ❤️";
        setTimeout(() => {
            showYouAreReadyMessage();
        }, 5000);
    }

    // Show the "You Are Ready!" page (disclaimer page)
    function showYouAreReadyMessage() {
        let readyMessage = document.getElementById("you-are-ready");
        readyMessage.classList.remove("hidden");
        setTimeout(() => {
            showValentineMessage();
        }, 3000);
    }

    // Show the "Valentine's Day" message with a glitter background
    function showValentineMessage() {
        let valentineMessage = document.getElementById("valentine");
        valentineMessage.classList.remove("hidden");
        valentineMessage.innerHTML = "Happy Valentine's Day! 🎉💖";
    }

    // Start the page flow
    showFirstMessage();
});
