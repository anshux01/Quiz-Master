document.addEventListener('DOMContentLoaded', function () {
    const subjectButtons = document.querySelectorAll('.subject-button');
    const startButton = document.getElementById('start-button');
    const subjectError = document.getElementById('subject-error');

    let selectedSubject = null;

    subjectButtons.forEach(button => {
        button.addEventListener('click', function () {
            subjectButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedSubject = button.id;
        });
    });

    startButton.addEventListener('click', function () {
        if (!selectedSubject) {
            subjectError.textContent = 'Please select a subject before starting the quiz.';
        } else {
            // Clear error message and navigate to the selected subject's quiz page
            subjectError.textContent = '';
            const quizPageURL = getQuizPageURL(selectedSubject);
            window.location.href = quizPageURL;
        }
    });

    // Helper function to construct the URL for the selected subject's quiz page
    function getQuizPageURL(subject) {
        switch (subject) {
            case 'subject1':
                return '/ml/ML_quiz.html'; // Machine Learning
            case 'subject2':
                return '../awd/AWD_quiz.html'; // Advance Web Development
            case 'subject3':
                return '../gk/gk_quiz.html'; // General Knowledge
            case 'subject4':
                return '../cc/CC_quiz.html'; // Cloud Computing
            default:
                return 'direct-page.html'; // Default to a direct page if subject is not recognized
        }
    }
});

