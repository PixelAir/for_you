
let password = "31 may";  // Set your password

function checkPassword() {
    let input = document.getElementById("password-input").value;
    if (input === password) {
        document.getElementById("password-screen").style.display = "none";
        startMessages();
    } else {
        alert("Incorrect password!");
    }
}

let messages = [
    { text: "Hey Virat", showButtons: false },
    { text: "I have something special messages for you", showButtons: false },
    { text: "But... first you have to answer a few questions", showButtons: false },
    { text: "Can I ask?", showButtons: true }
];

let currentMessage = 0;

function startMessages() {
    document.getElementById("message-container").style.display = "block";
    showMessage();
}

function showMessage() {
    let message = messages[currentMessage];
    document.getElementById("message").innerText = message.text;
    document.getElementById("yes-btn").style.display = message.showButtons ? "inline-block" : "none";
    document.getElementById("no-btn").style.display = message.showButtons ? "inline-block" : "none";

    setTimeout(() => {
        currentMessage++;
        if (currentMessage < messages.length) {
            showMessage();
        }
    }, 5000);
}

function nextMessage(yesClicked) {
    if (yesClicked) {
        alert("Proceeding to next question...");
    } else {
        alert("You have to say Yes!");
    }
}
