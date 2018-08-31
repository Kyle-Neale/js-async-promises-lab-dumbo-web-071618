const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let askButton = document.querySelector("div.center-align a.btn");
let questionContainer = document.querySelector(".question-container");

function askQuestionThen(time) {
  question = questions[0];
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(question)
    }, time).then(appendQuestion(question));
  })
};

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText;
}

function removeQuestion() {
  questionContainer.innerHTML = "";
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn');
}

function toggleTrueAndFalseButtons() {
  let buttons = trueAndFalseButtons();
  for (var i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (button.classList.contains("hide")) {
      button.classList.remove("hide");
    } else {
      button.classList.add("hide");
    }
  }
}

function displayQuestionOnClick() {
  let toggleButtons = toggleTrueAndFalseButtons();
  return new Promise((resolve, reject) => {
    setInterval((toggleButtons) => {
      resolve(toggleButtons);
    }, 10000)
  });
}
