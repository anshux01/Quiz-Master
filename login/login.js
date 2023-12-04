document.addEventListener('DOMContentLoaded', function () {
    const attemptButton = document.getElementById('attempt-button');
    const errorMessage = document.getElementById('error-message');
    const userNameInput = document.getElementById('userName');

    attemptButton.addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const userName = userNameInput.value;

        if (userName.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || mobile.trim() === '') {
            errorMessage.textContent = 'Please fill in all required details to attempt the quiz.';
        } else if (!isUserNameValid(userName)) {
            errorMessage.textContent = 'Username must contain at least 8 characters, one letter, one number, and one special character.';
        } else {
            // Clear error message and navigate to the quiz page
            errorMessage.textContent = '';
            window.location.href = newPath;
        }
    });
    var newPath = '../subject/quiz-page.html';
    // Function to check if the username meets certain criteria
    function isUserNameValid(userName) {
        // Minimum 8 characters, at least one letter, one number, and one special character
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(userName);
    }
});
