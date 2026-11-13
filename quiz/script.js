const quiz = [
    {
        question: "What is 1 + 1 ?",
        answer: "2",
        options: ["1", "2", "3", "4"]
    },
    {
        question: "What is 1 + 2 ?",
        answer: "3",
        options: ["1", "2", "3", "4"]
    },
    {
        question: "What is 2 + 2 ?",
        answer: "4",
        options: ["1", "2", "3", "4"]
    }
]

let index = -1
let score = 0
const MAX_TIMER = 5
let timer = MAX_TIMER
const questionElt = document.querySelector(".question")
const timerElt = document.querySelector(".timer")
const optionsElt = document.querySelector(".options")

function resetInterval() {
    if (resetInterval.interval) {
        clearInterval(resetInterval.interval)
    }
    timer = MAX_TIMER
    timerElt.textContent = `Timer: ${timer}s`
    resetInterval.interval = setInterval(() => {
        timer--
        if (timer == -1) {
            nextQuestion()
        }
        timerElt.textContent = `Timer: ${timer}s`
    }, 1000);
}

function nextQuestion() {

    resetInterval()
    index++

    if (index >= quiz.length) {
        showResults()
        return
    }

    optionsElt.innerHTML = ''

    questionElt.textContent = `${index + 1}. ${quiz[index].question}`

    quiz[index].options.forEach(option => {
        const btn = document.createElement("button")
        btn.textContent = option
        optionsElt.appendChild(btn)

        btn.onclick = () => {
            if (option == quiz[index].answer) {
                score++
            }
            nextQuestion()
        }
    })

}

function showResults() {
    optionsElt.innerHTML = ''
    questionElt.innerHTML = `Your Score = ${score}`
    timerElt.hidden = true

    const tryAgain = document.createElement("button")
    optionsElt.appendChild(tryAgain)
    tryAgain.textContent = 'Try Again'
    tryAgain.onclick = () => {
        timerElt.hidden = false
        index = -1
        score = 0
        nextQuestion()
    }
}

window.addEventListener("load", () => {
    timerElt.textContent = `Timer: ${timer}s`
    timerElt.hidden = false

    nextQuestion()
})