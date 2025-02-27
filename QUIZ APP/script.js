// const questions=[
//     {
//         question:"Which is laregst animal in the world",
//         answers:[
//             {
//                 text:"Shark",
//                 correct:false
//             },
//             {
//                 text:"Blue Whale",
//                 correct:true
//             },
//             {
//                 text:"Giraffe",
//                 correct:false
//             },
//             {
//                 text:"Elephant",
//                 correct:false
//             }

//         ]
//     }, {
//         question:"Aap gian h?",
//         answers:[
//             {
//                 text:"100% sure",
//                 correct:false
//             },
//             {
//                 text:"Bilkul Sahi",
//                 correct:true
//             },
//             {
//                 text:"hmein kaise pta",
//                 correct:false
//             },
//             {
//                 text:"Pappu",
//                 correct:false
//             }

//         ]
//     }, {
//         question:"Which is laregst desert in the world",
//         answers:[
//             {
//                 text:"Kalahari",
//                 correct:false
//             },
//             {
//                 text:"Gobi",
//                 correct:false
//             },
//             {
//                 text:"Sahara",
//                 correct:true
//             },
//             {
//                 text:"Antarctica",
//                 correct:false
//             }

//         ]
//     }, {
//         question:"Which is smallest continent in the world",
//         answers:[
//             {
//                 text:"Asia",
//                 correct:false
//             },
//             {
//                 text:"Australia",
//                 correct:true
//             },
//             {
//                 text:"Arctic",
//                 correct:false
//             },
//             {
//                 text:"Africa",
//                 correct:false
//             }

//         ]
//     }
// ];

// const questionElement=document.getElementById("question")
// const answerButtons=document.getElementById("answer-buttons")
// const nextButton=document.getElementById("next-btn")

// let currentQuestionIndex=0;
// let score=0;

// function startQuiz(){
//     currentQuestionIndex=0;
//     score=0;
//     nextButton.innerHTML="Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion= questions[currentQuestionIndex];
//     let questionNo=currentQuestionIndex+1;
//     questionElement.innerHTML=questionNo+". "+ currentQuestion.question;
    
//     currentQuestion.answers.forEach(answer=>{
//         const button=document.createElement("button");
//         button.innerHTML=answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);

//         if(answer.correct){
//             button.dataset.correct=answer.correct;
//         }
//         button.addEventListener("click",selectAnswer)
//     })
// }

// function resetState(){
//     nextButton.style.display="none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);

//     }
// }

// function selectAnswer(e){
//     const selectedBtn=e.target;
//     const isCorrect=selectedBtn.dataset.correct==="true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }
//     else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button=>{
//         if(button.dataset.correct==="true"){
//             button.classList.add("correct");
//         }
//         button.disabled=true;
//     });
//     nextButton.style.display="block";
// }
// function showScore(){
//     resetState();questionElement.innerHTML=`You Scored ${score} out of ${questions.length}`;
//     nextButton.innerHTML="Play Again";
//     nextButton.style.display="block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex<questions.length){
//         showQuestion();

//     }
//     else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click",()=>{
//     if(currentQuestionIndex<questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// })



// startQuiz();






const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Elephant", correct: false }
      ]
    },
    {
      question: "Aap gian h?",
      answers: [
        { text: "100% sure", correct: false },
        { text: "Bilkul Sahi", correct: true },
        { text: "hmein kaise pta", correct: false },
        { text: "Pappu", correct: false }
      ]
    },{
        question:"Which is laregst desert in the world",
        answers:[
            {
                text:"Kalahari",
                correct:false
            },
            {
                text:"Gobi",
                correct:false
            },
            {
                text:"Sahara",
                correct:true
            },
            {
                text:"Antarctica",
                correct:false
            }

        ]
    }, {
        question:"Which is smallest continent in the world",
        answers:[
            {
                text:"Asia",
                correct:false
            },
            {
                text:"Australia",
                correct:true
            },
            {
                text:"Arctic",
                correct:false
            },
            {
                text:"Africa",
                correct:false
            }

        ]
    }
    
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
  
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";
  
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  