const quiz = [
    {
     question: "What is the purpose of AJAX in web development?",
     A: "Asynchronous JavaScript and XML",
     B: "Advanced JavaScript and XML",
     C: "Asynchronous jQuery and XML",
     D: "Advanced JSON and XHTML",
     ans: "A"
    },
    {
     question: "Which of the following is a server-side JavaScript runtime?",
     A: "jQuery",
     B: "Angular",
     C: "Node.js",
     D: "React",
     ans: "C"
    },
    {
     question: "What does MVC stand for in the context of web development?",
     A: "Model View Controller",
     B: "Multiple View Configuration",
     C: "Master View Collaboration",
     D: "Modifiable View Component",
     ans: "A"
    },
    {
     question: "Which HTTP method is idempotent?",
     A: "GET",
     B: "POST",
     C: "PUT",
     D: "DELETE",
     ans: "A"
    },
    {
     question: "What is a closure in JavaScript?",
     A: "A sealed function",
     B: "A way to create private variables",
     C: "A loop that never ends",
     D: "A deprecated feature",
     ans: "B"
    },
    {
     question: "Which CSS property is used to control the layout flow of a document?",
     A: "display",
     B: "position",
     C: "float",
     D: "clear",
     ans: "A"
    },
    {
     question: "In the context of RESTful APIs, what does CRUD stand for?",
     A: "Create, Retrieve, Update, Delete",
     B: "Crawl, Retrieve, Update, Deploy",
     C: "Cross-browser, Responsive, Update, Design",
     D: "Collect, Remove, Update, Deploy",
     ans: "A"
    },
    {
     question: "What does the term \"Single Page Application (SPA)\" mean in web development?",
     A: "A website with only one page",
     B: "A website that loads pages slowly",
     C: "A website that requires multiple pages to function",
     D: "A website that loads content dynamically without refreshing the page",
     ans: "D"
    },
    {
     question: "Which of the following is NOT a valid HTTP status code?",
     A: "200 OK",
     B: "404 Not Found",
     C: "300 Redirection",
     D: "500 Internal Server Error",
     ans: "C"
    },
    {
     question: "What is the purpose of the localStorage object in JavaScript?",
     A: "To store data permanently on the server",
     B: "To store data temporarily on the client-side",
     C: "To store session data on the server",
     D: "To store cookies",
     ans: "B"
    },
    {
     question: "Which of the following is a NoSQL database?",
     A: "MySQL",
     B: "PostgreSQL",
     C: "MongoDB",
     D: "Oracle",
     ans: "C"
    },
    {
     question: "What is the role of the package.json file in a Node.js project?",
     A: "It contains the source code of the application",
     B: "It specifies the project dependencies and configuration",
     C: "It defines the layout of HTML pages",
     D: "It is used for styling the application",
     ans: "B"
    },
    {
     question: "Which CSS preprocessor is written in JavaScript and requires Node.js to run?",
     A: "Sass",
     B: "Less",
     C: "Stylus",
     D: "PostCSS",
     ans: "A"
    },
    {
     question: "What is the purpose of a CDN (Content Delivery Network) in web development?",
     A: "To store client-side scripts",
     B: "To optimize database queries",
     C: "To distribute content geographically closer to users",
     D: "To compress images",
     ans: "C"
    },
    {
     question: "Which JavaScript library is commonly used for building user interfaces?",
     A: "jQuery",
     B: "React",
     C: "Angular",
     D: "Vue.js",
     ans: "B"
    },
    {
     question: "What is the role of the robots.txt file in web development?",
     A: "To define the structure of the website",
     B: "To specify which pages should not be crawled by search engines",
     C: "To store user preferences",
     D: "To configure server settings",
     ans: "B"
    },
    {
     question: "Which of the following is a CSS framework for building responsive and mobile-first websites?",
     A: "Bootstrap",
     B: "Foundation",
     C: "Bulma",
     D: "All of the above",
     ans: "D"
    },
    {
     question: "What is the role of WebSockets in web development?",
     A: "To store data on the client-side",
     B: "To establish a continuous two-way communication channel between the client and server",
     C: "To define the structure of web pages",
     D: "To handle HTTP requests and responses",
     ans: "B"
    },
    {
     question: "What does the term \"Cross-Origin Resource Sharing (CORS)\" refer to in web development?",
     A: "A security feature that restricts web pages from making requests to a different domain than the one that served the web page",
     B: "A technique for optimizing the loading of images",
     C: "A method for compressing CSS files",
     D: "A way to define the order of elements on a web page",
     ans: "A"
    },
    {
     question: "Which of the following is a front-end JavaScript framework for building user interfaces?",
     A: "Express.js",
     B: "Django",
     C: "Flask",
     D: "Vue.js",
     ans: "D"
    },
    {
     question: "What is the purpose of the localStorage object in JavaScript?",
     A: "To store data permanently on the server",
     B: "To store data temporarily on the client-side",
     C: "To store session data on the server",
     D: "To store cookies",
     ans: "B"
    },
    {
     question: "Which of the following is NOT a valid HTTP status code?",
     A: "200 OK",
     B: "404 Not Found",
     C: "300 Redirection",
     D: "500 Internal Server Error",
     ans: "C"
    },
    {
     question: "What is the role of the robots.txt file in web development?",
     A: "To define the structure of the website",
     B: "To specify which pages should not be crawled by search engines",
     C: "To store user preferences",
     D: "To configure server settings",
     ans: "B"
    },
    {
     question: "What is the purpose of a CSS reset?",
     A: "To reset the color scheme of a webpage",
     B: "To standardize default styles across different browsers",
     C: "To clear the browser cache",
     D: "To reset the layout of a webpage",
     ans: "B"
    },
    {
     question: "What is the primary function of a web server in the context of web development?",
     A: "To design user interfaces",
     B: "To process database queries",
     C: "To manage client-side scripts",
     D: "To handle HTTP requests and responses",
     ans: "D"
    },
    {
     question: "Which of the following is a commonly used method for authenticating users in web development?",
     A: "OAuth",
     B: "MD5",
     C: "SHA-256",
     D: "HMAC",
     ans: "A"
    },
    {
     question: "What is the purpose of the npm command in a Node.js project?",
     A: "To create a new project",
     B: "To install project dependencies",
     C: "To start the Node.js server",
     D: "To compress images",
     ans: "B"
    },
    {
     question: "In the context of web development, what is the purpose of the viewport meta tag?",
     A: "To define the layout of a webpage",
     B: "To specify the character encoding of a webpage",
     C: "To control the dimensions and scaling of a webpage on different devices",
     D: "To configure server settings",
     ans: "C"
    },
    {
     question: "Which of the following is a popular version control system used in web development?",
     A: "Git",
     B: "Mercurial",
     C: "Subversion",
     D: "All of the above",
     ans: "A"
    },
    {
     question: "What is the purpose of the box-sizing CSS property?",
     A: "To define the color of a box",
     B: "To specify the size of a box",
     C: "To control the box model used for layout calculations",
     D: "To set the position of a box on a webpage",
     ans: "C"
    },
    {
     question: "Which of the following is a feature of Progressive Web Apps (PWAs)?",
     A: "Offline functionality",
     B: "Server-side rendering",
     C: "Complex animations",
     D: "External stylesheets",
     ans: "A"
    },
    {
     question: "What is the purpose of the defer attribute in a script tag?",
     A: "To load the script asynchronously",
     B: "To delay the execution of the script until after the document has been parsed",
     C: "To defer the rendering of images on a webpage",
     D: "To prevent the script from executing",
     ans: "B"
    },
    {
     question: "Which CSS property is used to create rounded corners on a box?",
     A: "border-radius",
     B: "box-shadow",
     C: "border-collapse",
     D: "border-spacing",
     ans: "A"
    },
    {
     question: "What is the purpose of the async attribute in a script tag?",
     A: "To load the script asynchronously",
     B: "To delay the execution of the script until after the document has been parsed",
     C: "To defer the rendering of images on a webpage",
     D: "To prevent the script from executing",
     ans: "A"
    },
    {
     question: "In the context of web development, what is a CDN (Content Delivery Network)?",
     A: "A system for managing databases",
     B: "A network of distributed servers that deliver web content to users based on their geographical location",
     C: "A tool for compressing images",
     D: "A protocol for secure data transfer",
     ans: "B"
    },
    {
     question: "What is the purpose of the event delegation in JavaScript?",
     A: "To delegate events to the document level",
     B: "To delegate events to specific elements",
     C: "To prevent event propagation",
     D: "To handle events asynchronously",
     ans: "B"
    },
    {
     question: "Which of the following is true about GraphQL?",
     A: "It is a database management system",
     B: "It is a query language for APIs",
     C: "It is primarily used for styling web pages",
     D: "It is a JavaScript testing framework",
     ans: "B"
    },
    {
     question: "What is the role of a reverse proxy in web development?",
     A: "To hide the IP address of the server",
     B: "To cache static content and distribute requests",
     C: "To manage database connections",
     D: "To handle client-side scripting",
     ans: "B"
    },
    {
     question: "How does the CSS Flexbox justify-content property work?",
     A: "It aligns items vertically",
     B: "It aligns items horizontally",
     C: "It adjusts the space between items",
     D: "It changes the order of items",
     ans: "B"
    },
    {
     question: "What is the purpose of the Jest framework in web development?",
     A: "To manage package dependencies",
     B: "To handle asynchronous operations in JavaScript",
     C: "To test JavaScript code",
     D: "To transpile TypeScript code",
     ans: "C"
    },
    {
     question: "Which HTTP header is used for security policies in web applications?",
     A: "Content-Type",
     B: "Cache-Control",
     C: "X-Frame-Options",
     D: "Access-Control-Allow-Origin",
     ans: "C"
    },
    {
     question: "What is the significance of the \"this\" keyword in JavaScript?",
     A: "It refers to the current function being executed",
     B: "It refers to the global object",
     C: "It refers to the object on which the current method is called",
     D: "It is used to define variables",
     ans: "C"
    },
    {
     question: "What is the purpose of the CSS Grid layout?",
     A: "To create flexible and responsive grid-based layouts",
     B: "To style HTML forms",
     C: "To apply animations to elements",
     D: "To control the font size of text",
     ans: "A"
    },
    {
     question: "What does the acronym API stand for in the context of web development?",
     A: "Advanced Programming Interface",
     B: "Application Programming Interface",
     C: "Asynchronous Protocol Integration",
     D: "Automated Processing Interface",
     ans: "B"
    },
    {
     question: "What is the role of a web server in the context of web development?",
     A: "To design user interfaces",
     B: "To process database queries",
     C: "To manage client-side scripts",
     D: "To handle HTTP requests and responses",
     ans: "D"
    },
    {
     question: "What is the purpose of the Fetch API in JavaScript?",
     A: "To manipulate the DOM",
     B: "To handle asynchronous operations",
     C: "To make HTTP requests and handle responses",
     D: "To create animations",
     ans: "C"
    },
    {
     question: "Which of the following is NOT a valid HTTP method?",
     A: "PUT",
     B: "PATCH",
     C: "UPDATE",
     D: "OPTIONS",
     ans: "C"
    },
    {
     question: "What is the purpose of the aria-label attribute in HTML?",
     A: "To define the role of an HTML element",
     B: "To specify alternative text for an image",
     C: "To provide a label for screen readers",
     D: "To set the language of the document",
     ans: "C"
    },
    {
     question: "What is the role of the ng-model directive in AngularJS?",
     A: "To define a new Angular module",
     B: "To bind the value of an input field to a variable",
     C: "To create a new controller in AngularJS",
     D: "To include external libraries in an Angular project",
     ans: "B"
    },
    {
     question: "How does the JavaScript map function differ from the forEach function?",
     A: "map returns a new array with the results of applying a function to each element, while forEach does not return anything",
     B: "map modifies the original array, while forEach creates a new array",
     C: "map can only be used with arrays of numbers, while forEach can be used with any data type",
     D: "There is no difference between map and forEach",
     ans: "A"
    }
   ]
   



document.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#A');
    const option2 = document.querySelector('#B');
    const option3 = document.querySelector('#C');
    const option4 = document.querySelector('#D');
    const options = document.querySelector('.opt');
    const submit = document.querySelector('#submit');
    const homeButton = document.querySelector('#homeButton');
    const answers = document.querySelectorAll('.answer');
    const showScore = document.querySelector('#showScore');
    const timerDisplay = document.querySelector('#timer');

    let questionCount = Math.floor(Math.random() * quiz.length);
    let count = 0;
    let score = 0;
    let timerSeconds = 300;
    let timerInterval;

    const updateTimerDisplay = () => {
        timerDisplay.innerText = `Time left: ${timerSeconds}s`;
    };

    const startTimer = () => {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                finishQuiz();
            }
        }, 1000);
    };

    const hideSubmitButton = () => {
        submit.style.display = 'none';
    };

    const showHomeButton = () => {
        homeButton.style.display = 'block';
    };

    const finishQuiz = () => {
        clearInterval(timerInterval); // Stop the timer
        const congratulationMessage = getCongratulationMessage();
        showScore.innerHTML = `
            <h2>${congratulationMessage} You scored ${score}/10</h2>
            <button class='btn' onclick='location.reload()'>Restart</button>
            <button id="homeButton" class='btn' onclick="location.href='../subject/quiz-page.html'">Go to Home</button>
        `;
        showScore.classList.remove('scoreArea');
        question.classList.add('scoreArea');
        options.classList.add('scoreArea');
        hideSubmitButton();
        showHomeButton();
    };

    const getCongratulationMessage = () => {
        if (score === 10) {
            return "Congratulations! Perfect score!";
        } else if (score >= 7) {
            return "Well done! You did great!";
        } else {
            return "Nice try! Keep learning and try again!";
        }
    };

    const loadQuestion = () => {
        const questionList = quiz[questionCount];

        question.innerText = questionList.question;
        option1.innerText = questionList.A;
        option2.innerText = questionList.B;
        option3.innerText = questionList.C;
        option4.innerText = questionList.D;

        if (count === 0) {
            startTimer();
        }
    };

    loadQuestion();

    const getCheckAnswer = () => {
        let answer;
        answers.forEach((currAnsElem) => {
            if (currAnsElem.checked)
                answer = currAnsElem.id;
        });
        return answer;
    };

    const deselectAll = () => {
        answers.forEach((curr) => curr.checked = false);
    };

    submit.addEventListener('click', () => {
        const checkedAnswer = getCheckAnswer();

        if (checkedAnswer === quiz[questionCount].ans)
            score++;

        questionCount++;
        count++;
        deselectAll();

        if (count < 10) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });

    
});
