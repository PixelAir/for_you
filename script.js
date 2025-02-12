let messages = [
    { text: "Hey Virat", showButtons: false },
    { text: "I have something special messages for you", showButtons: false },
    { text: "But... first you have to answer a few questions", showButtons: false },
    { text: "Can I ask?", showButtons: true },
    { text: "Do you love Isha?", showButtons: true },
    { text: "Are you sure? Think again", showButtons: true },
    { text: "Finally, puchh rhi hu, do you love me naa? Baad me mood change mat kr lena 🫣", showButtons: true },
    { text: "Itni jaldi kya h, aaram se socho", showButtons: true },
    { text: "Itna kyu bhao kha rhe ho🙃. Haa boldo na 🫠", showButtons: true },
    { text: "Love you more ❤️", showButtons: false },
    { text: "So now you are ready", showButtons: false },
    { text: "Happy Valentine's Day", showButtons: false, specialClass: 'happy-valentine' } // Add class for styling
];

let currentMessage = 0;

document.getElementById("yes-btn").addEventListener("click", function() {
    handleYesClick();
});

document.getElementById("no-btn").addEventListener("click", function() {
    handleNoClick();
});

// Show messages with a delay
function showMessage() {
    let message = messages[currentMessage];
    let messageElement = document.getElementById("message");
    messageElement.innerText = message.text;

    // Apply special class for Happy Valentine's Day
    if (message.specialClass) {
        messageElement.classList.add(message.specialClass);
    }

    // Toggle buttons
    document.getElementById("yes-btn").style.display = message.showButtons ? "inline-block" : "none";
    document.getElementById("no-btn").style.display = message.showButtons ? "inline-block" : "none";

    // Proceed to the next message after a delay
    setTimeout(() => {
        if (currentMessage < messages.length) {
            currentMessage++;
            showMessage();
        }
    }, 5000);
}

// Handle the "Yes" button click
function handleYesClick() {
    // Custom logic for Yes button (e.g., proceed with the flow)
    if (currentMessage === 3) {
        // "Can I ask?" -> "Do you love Isha?"
        currentMessage = 4;
        showMessage();
    } else if (currentMessage === 4) {
        // "Do you love Isha?" -> "Are you sure?"
        currentMessage = 5;
        showMessage();
    } else if (currentMessage === 5) {
        // "Are you sure?" -> "Finally, puchh rhi hu"
        currentMessage = 6;
        showMessage();
    } else if (currentMessage === 6) {
        // "Finally, puchh rhi hu" -> "Itni jaldi kya h?"
        currentMessage = 7;
        showMessage();
    } else if (currentMessage === 7) {
        // "Itni jaldi kya h?" -> "Itna kyu bhao kha rhe ho"
        currentMessage = 8;
        showMessage();
    } else if (currentMessage === 8) {
        // "Itna kyu bhao kha rhe ho" -> "Love you more ❤️"
        currentMessage = 9;
        showMessage();
    }
}

// Handle the "No" button click
function handleNoClick() {
    // Custom logic for No button (e.g., return to previous page or show a message)
    if (currentMessage === 4) {
        // "Do you love Isha?" -> "Itni jaldi kya h?"
        currentMessage = 7;
        showMessage();
    } else if (currentMessage === 6) {
        // "Finally, puchh rhi hu" -> "Itni jaldi kya h?"
        currentMessage = 7;
        showMessage();
    } else if (currentMessage === 7) {
        // "Itni jaldi kya h?" -> "Itna kyu bhao kha rhe ho"
        currentMessage = 8;
        showMessage();
    } else if (currentMessage === 8) {
        // "Itna kyu bhao kha rhe ho" -> "Haa boldo na 🫠"
        currentMessage = 9;
        showMessage();
    }
}

// Function to start the password prompt
function startPasswordPrompt() {
    document.getElementById("password-screen").style.display = "block";
}

// Function to check the password
function checkPassword() {
    let enteredPassword = document.getElementById("password-input").value;
    let correctPassword = "31May"; // Set the password you want

    if (enteredPassword === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        showMessage(); // Show the first message after password validation
    } else {
        alert("Incorrect Password! Please try again.");
    }
}

window.onload = startPasswordPrompt; // Show the password prompt as soon as the page loads
