let score = 0;
let currentQuestion = 0 ;
let i = 0
const a = document.getElementById("a") ;
const b = document.getElementById("b") ;
const c = document.getElementById("c") ;
const d = document.getElementById("d") ;
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const question = document.getElementById("question");
const submitBtn = document.getElementById("submitBtn") ;
const ul = document.getElementById("ul");
const quizData = [
    {
        question : "Which is Victor's favorite fruit ?",
        a:'apple',
        b:'banana',
        c:'watermelon',
        d:'strawberry',
        correctAnswer:"watermelon",
    },

    {
        question : "which computer language is the most widely used in 2022 ?",
        a:'JavaScript',
        b:'Php',
        c:'C',
        d:'Ruby',
        correctAnswer:"JavaScript",

    },

    {
        question : "How many people in the world 2022?",
        a:'6.5 billion',
        b:'5.0 billion',
        c:'7.9 billion',
        d:'9.0 billion',
        correctAnswer:"7.9 billion",


    },

    {
        question : "How old is Victor ?",
        a:'20',
        b:'25',
        c:'18',
        d:'36',
        correctAnswer:"25",


    },
    {
        question : "How many days are in February during a leap year ?",
        a:'28',
        b:'27',
        c:'26',
        d:'29',
        correctAnswer:"29",


    }
];
submitBtn.addEventListener('click',()=>{
    getUserAnswer();
    nextQuestion();
})

function nextQuestion(){
    checkAnswer()
    currentQuestion++;
    if(currentQuestion!==quizData.length){
        question.textContent = quizData[currentQuestion].question;
        a_text.textContent = quizData[currentQuestion].a;
        b_text.textContent = quizData[currentQuestion].b;
        c_text.textContent = quizData[currentQuestion].c;
        d_text.textContent = quizData[currentQuestion].d;
        a.checked=false;
        b.checked=false;
        c.checked=false;
        d.checked=false;
        
    }else{
        ul.style.display = "none";
        submitBtn.textContent = "reload"
        question.textContent = "You answered correctly "+ score +" / 5 questions."; 
        submitBtn.addEventListener('click', ()=>{
            location.reload();
        })

    }
     
}

const userAnswerData  = []
function getUserAnswer(){
    if(a.checked){
        userAnswerData.push({
            question: question.textContent,
            answer:a_text.textContent
        });
    }else if(b.checked){
        userAnswerData.push({
            question: question.textContent,
            answer:b_text.textContent
        });
    }else if(c.checked){
        userAnswerData.push({
            question: question.textContent,
            answer:c_text.textContent
        });
    }else if(d.checked){
        userAnswerData.push({
            question: question.textContent,
            answer:d_text.textContent
        });
    }else{
        userAnswerData.push({
            question: question.textContent,
            answer:""
        });
    }


    
    console.log(userAnswerData);
}


function checkAnswer(){
    
        if(quizData[i].correctAnswer===userAnswerData[i].answer){
           return score++            
        }      
        i++;  
}

