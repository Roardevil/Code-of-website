

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// create our questions
let questions = [
    {
        question : "How is COVID-19 passed on?",
        choiceA : "Through droplets that come from your mouth and nose when you cough or breathe out",
        choiceB : "In sexual fluids, including semen, vaginal fluids or anal mucous",
        choiceC : "By drinking unclean water",
        correct : "A"
    },{
        question : "What are the common symptoms of COVID-19? ",
        choiceA : "A new and continuous cough",
        choiceB : "Fever",
        choiceC : "All of the above",
        correct : "C"
    },{
        question : "Which of the following people is COVID-19 more dangerous for?",
        choiceA : "Children",
        choiceB : "Older people – especially those aged 70 and above",
        choiceC : "European people",
        correct : "B"
    },
    {
        question : "What date was the first case of coronavirus reported?",
        choiceA : "1 December 2019",
        choiceB : "31 December 2019",
        choiceC : "21 December 2019",
        correct : "B"
    },
    {
        question : "What is the R number?",
        choiceA : "The R number is the average number of people to whom one infected person will pass on the virus",
        choiceB : "The R number is the average number of  infected people to whom one  person will pass on the virus",
        choiceC : "None of the above",
        correct : "A"
    }
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 60; // 60s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    let obj=JSON.parse(localStorage.getItem(sessionStorage.loggedInUser)) //step 1 parse data from localstorage
    console.log(obj)
    obj["Score"]=scorePerCent; //step 2 update field from localstorage
    obj=JSON.stringify(obj);  //step 3 stringify the object
    localStorage.setItem(sessionStorage.loggedInUser,obj) //step 4 update key in localstorage
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    window.location.href="Ranking.php";
}



