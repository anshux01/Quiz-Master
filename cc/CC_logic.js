const quiz = [
    
        {
         "question": "What is Cloud Computing?",
         "A": "Storing data on physical servers",
         "B": "Running applications on local machines",
         "C": "Accessing computing resources over the internet",
         "D": "None of the above",
         "ans": "C"
        },
        {
         "question": "Which of the following is a deployment model for cloud computing?",
         "A": "On-premises",
         "B": "Off-premises",
         "C": "Hybrid",
         "D": "All of the above",
         "ans": "D"
        },
        {
         "question": "What is IaaS?",
         "A": "Internet as a Service",
         "B": "Infrastructure as a Service",
         "C": "Integration as a Service",
         "D": "Identity as a Service",
         "ans": "B"
        },
        {
         "question": "Which cloud service model provides the highest level of abstraction?",
         "A": "Infrastructure as a Service (IaaS)",
         "B": "Platform as a Service (PaaS)",
         "C": "Software as a Service (SaaS)",
         "D": "Function as a Service (FaaS)",
         "ans": "C"
        },
        {
         "question": "What is the main advantage of a public cloud?",
         "A": "High security",
         "B": "Cost savings",
         "C": "Dedicated resources",
         "D": "None of the above",
         "ans": "B"
        },
        {
         "question": "Which programming language is commonly used for creating applications on the AWS platform?",
         "A": "Java",
         "B": "Python",
         "C": "Ruby",
         "D": "All of the above",
         "ans": "D"
        },
        {
         "question": "What is the purpose of load balancing in a cloud environment?",
         "A": "Ensure high availability",
         "B": "Enhance security",
         "C": "Reduce latency",
         "D": "All of the above",
         "ans": "D"
        },
        {
         "question": "Which cloud service is suitable for hosting a static website?",
         "A": "Amazon S3",
         "B": "Amazon EC2",
         "C": "Amazon RDS",
         "D": "Amazon Lambda",
         "ans": "A"
        },
        {
         "question": "What does the acronym CDN stand for in the context of cloud computing?",
         "A": "Content Delivery Network",
         "B": "Cloud Data Network",
         "C": "Centralized Domain Name",
         "D": "Clustered Data Node",
         "ans": "A"
        },
        {
         "question": "Which of the following is an example of a container orchestration tool?",
         "A": "Docker",
         "B": "Kubernetes",
         "C": "OpenStack",
         "D": "Ansible",
         "ans": "B"
        },
        {
         "question": "What is the role of a hypervisor in virtualization?",
         "A": "Manage network connections",
         "B": "Control access to cloud resources",
         "C": "Virtualize hardware to support multiple operating systems",
         "D": "Monitor server performance",
         "ans": "C"
        },
        {
         "question": "Which cloud computing characteristic ensures that resources are automatically scaled based on demand?",
         "A": "On-demand self-service",
         "B": "Broad network access",
         "C": "Rapid elasticity",
         "D": "Measured service",
         "ans": "C"
        },
        {
         "question": "What is the primary benefit of serverless computing?",
         "A": "Cost savings",
         "B": "Increased control over infrastructure",
         "C": "Reduced development speed",
         "D": "Improved security",
         "ans": "A"
        },
        {
         "question": "What is the purpose of the OAuth protocol?",
         "A": "Data encryption",
         "B": "Authentication and authorization",
         "C": "Network routing",
         "D": "File storage",
         "ans": "B"
        },
        {
         "question": "Which cloud service provides a fully managed NoSQL database?",
         "A": "Amazon RDS",
         "B": "Amazon DynamoDB",
         "C": "Amazon Redshift",
         "D": "Amazon Aurora",
         "ans": "B"
        },
        {
         "question": "In cloud computing, what does the term \"multi-tenancy\" refer to?",
         "A": "Hosting multiple websites on a single server",
         "B": "Running multiple virtual machines on a single physical server",
         "C": "Distributing data across multiple cloud providers",
         "D": "Using multiple clouds for redundancy",
         "ans": "B"
        },
        {
         "question": "Which cloud service is known for providing serverless computing?",
         "A": "Google Cloud Platform (GCP)",
         "B": "Microsoft Azure",
         "C": "Amazon Web Services (AWS)",
         "D": "IBM Cloud",
         "ans": "C"
        },
        {
         "question": "What is the purpose of a VPC (Virtual Private Cloud) in AWS?",
         "A": "Securely connect on-premises data centers to the cloud",
         "B": "Isolate resources within the cloud",
         "C": "Manage virtual machines",
         "D": "All of the above",
         "ans": "B"
        },
        {
         "question": "Which cloud deployment model provides the most control over the infrastructure?",
         "A": "Public Cloud",
         "B": "Private Cloud",
         "C": "Hybrid Cloud",
         "D": "Community Cloud",
         "ans": "B"
        },
        {
         "question": "What is the role of a CDN (Content Delivery Network) in cloud computing?",
         "A": "Secure data transmission",
         "B": "Load balancing",
         "C": "Accelerating content delivery",
         "D": "All of the above",
         "ans": "D"
        },
        {
         "question": "Which AWS service is used for scalable and fully managed machine learning?",
         "A": "Amazon S3",
         "B": "Amazon RDS",
         "C": "Amazon SageMaker",
         "D": "Amazon Lambda",
         "ans": "C"
        },
        {
         "question": "What is the primary advantage of a microservices architecture in the cloud?",
         "A": "Reduced development speed",
         "B": "Improved scalability and flexibility",
         "C": "Centralized management",
         "D": "Increased security",
         "ans": "B"
        },
        {
         "question": "What is the role of a reverse proxy in a cloud infrastructure?",
         "A": "Distribute incoming network traffic",
         "B": "Authenticate users",
         "C": "Manage database connections",
         "D": "Monitor server performance",
         "ans": "A"
        },
        {
         "question": "Which AWS service is used for serverless computing?",
         "A": "Amazon EC2",
         "B": "Amazon S3",
         "C": "AWS Lambda",
         "D": "Amazon RDS",
         "ans": "C"
        },
        {
         "question": "What is the purpose of cloud bursting?",
         "A": "Redirecting network traffic",
         "B": "Automatically scaling to handle increased load",
         "C": "Encrypting data in transit",
         "D": "Load balancing across multiple servers",
         "ans": "B"
        },
        {
         "question": "Which cloud computing service is suitable for real-time data processing?",
         "A": "Amazon RDS",
         "B": "Amazon S3",
         "C": "Amazon Kinesis",
         "D": "Amazon Redshift",
         "ans": "C"
        },
        {
         "question": "What is the role of a firewall in a cloud environment?",
         "A": "Manage network traffic",
         "B": "Virtualize hardware",
         "C": "Monitor server performance",
         "D": "Control access to cloud resources",
         "ans": "A"
        },
        {
         "question": "Which cloud service is known for providing a wide range of machine learning services?",
         "A": "Google Cloud Platform (GCP)",
         "B": "Microsoft Azure",
         "C": "Amazon Web Services (AWS)",
         "D": "IBM Cloud",
         "ans": "A"
        },
        {
         "question": "What is the primary purpose of a cloud service level agreement (SLA)?",
         "A": "Specify the terms and conditions of service",
         "B": "Encrypt data in transit",
         "C": "Monitor server performance",
         "D": "Manage network traffic",
         "ans": "A"
        },
        {
         "question": "Which cloud service provides a fully managed relational database?",
         "A": "Amazon RDS",
         "B": "Amazon DynamoDB",
         "C": "Amazon S3",
         "D": "Amazon Lambda",
         "ans": "A"
        },
        {
         "question": "What is the role of a container in cloud computing?",
         "A": "Virtualize hardware",
         "B": "Isolate applications and their dependencies",
         "C": "Manage network traffic",
         "D": "Control access to cloud resources",
         "ans": "B"
        },
        {
         "question": "Which cloud computing service is commonly associated with object storage?",
         "A": "Amazon RDS",
         "B": "Amazon S3",
         "C": "Amazon EC2",
         "D": "Amazon Redshift",
         "ans": "B"
        },
        {
         "question": "What is the purpose of a CDN (Content Delivery Network) in cloud computing?",
         "A": "Secure data transmission",
         "B": "Load balancing",
         "C": "Accelerating content delivery",
         "D": "All of the above",
         "ans": "D"
        },
        {
         "question": "Which AWS service is used for scalable and fully managed machine learning?",
         "A": "Amazon S3",
         "B": "Amazon RDS",
         "C": "Amazon SageMaker",
         "D": "Amazon Lambda",
         "ans": "C"
        },
        {
         "question": "What is the primary advantage of a microservices architecture in the cloud?",
         "A": "Reduced development speed",
         "B": "Improved scalability and flexibility",
         "C": "Centralized management",
         "D": "Increased security",
         "ans": "B"
        },
        {
         "question": "What is the role of a reverse proxy in a cloud infrastructure?",
         "A": "Distribute incoming network traffic",
         "B": "Authenticate users",
         "C": "Manage database connections",
         "D": "Monitor server performance",
         "ans": "A"
        }
       
]




document.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
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
