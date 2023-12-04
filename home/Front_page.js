document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById('content');
    content.classList.add('visible');

    var welcomeMessage = document.getElementById('welcome-message');
    var welcomeText = "Welcome to the Quiz!";
    var charIndex = 0;

    function typeWelcomeMessage() {
        if (charIndex < welcomeText.length) {
            var currentChar = welcomeText.charAt(charIndex);
            welcomeMessage.innerHTML += '<span style="font-size: 2em;">' + currentChar + '</span>';
            charIndex++;
            setTimeout(typeWelcomeMessage, 100); // Adjust typing speed (milliseconds)
        } else {
            // After typing, show blinking cursor
            showBlinkingCursor();
        }
    }

    function showBlinkingCursor() {
        var cursorSpan = document.createElement('span');
        cursorSpan.id = 'cursor';
        cursorSpan.innerHTML = '|';
        cursorSpan.style.fontSize = '2em'; // Adjust cursor size
        cursorSpan.style.color = 'black'; // Adjust cursor color
        welcomeMessage.appendChild(cursorSpan);

        // Blink the cursor
        setInterval(function () {
            var cursor = document.getElementById('cursor');
            cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
        }, 500); // Adjust blinking speed (milliseconds)
    }

    // Start the typing effect
    typeWelcomeMessage();

    // Change text color based on background color
    var animatedBackground = document.getElementById('animated-background');
    var textColor = getTextColor(animatedBackground);
    document.getElementById('content').style.color = textColor;
});
