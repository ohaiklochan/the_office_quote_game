class Game {
    constructor() {
        Question.loadQuestions.call(this)
    }

    set user(user) {
        this._user = user
    }

    get user() {
        return this._user
    }

    renderWelcome() {
        welcome.setAttribute('show', 'class')
    }

    startGame(e) {
        e.preventDefault()
        this.toggleWelcome()
        Question.shuffleQuestions()
        for(const question of Question.all) {
            question.shuffleAnswers()
        }
        this.showFirstQuestion()
        Question.toggleQuestionContainer()
    }

    showFirstQuestion() {
        const firstQuestion = Question.all[0]
        const questionDiv = toggleQuestionContainer.querySelectoryAll('div')
        for(let div of questionDiv) {
            if(div.getAttribute('id') === `question-${firstQuestion.id}-div`) {
                div.setAttribute('class', 'show')
            }
        }
    }

    evaluateAnswer(e) {
        const form = e.target
        const formRadios = form.querySelectoryAll('#radio')

        e.preventDefault()
        for (let radio of formRadios) {
            if(!!radio.checked) {
                let answer = Answer.all.find(a => a.id === radio.value)
                form.reset()
                if(answer.correct) {
                    this.user.score += this.currentQuestion().difficulty
                    this.user.updateScoreCard()
                    if(this.indexOfCurrentQuestion() === Question.all.length-1) {
                        this.endGame()
                    } 
                    else {
                        this.switchQuestionDivs()
                    }
                } 
                else {
                    this.endGame()
                }
            }
        }
    }

    endGame() {
        this.user.updateUserHiScore()
        this.hideCurrentQuestionDiv()
        this.toggleGameWindow()
        Question.toggleQuestionContainer()
        this.toggleEndOfGameMessage()
    }

    listenForStart() {
        startBtn.addEventListener('click', this.startGame.bind(this))
    }

    listenForSubmits() {
        const answerForms = document.querySelectorAll('#answer-form')
        for (const form of answerForms) {
            form.addEventListener('submit', this.evaluateAnswer.bind(this))
        }
    }

    listenForHiScores() {
        hiScoresBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.user.toggleScoreCard()
            this.toggleEndOfGameMessage()
            User.getHiScores()
        })
    }

    listenForRestart() {
        restartBtn.addEventListener('click', (e) => {
            e.preventDefault()
            User.toggleHiScores()
            User.clearHiScores()
            User.toggleUserForm()
        })
    }

    listenForHints() {
        const hintBtns = document.querySelectorAll('#hint')

        for(const btn of hintBtns) {
            const hintDiv = btn.parentElement.querySelector('div')
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                this.toggleHintDiv(hintDiv)
            })
        }
    }

    switchQuestionDivs() {
        let i = this.indexOfCurrentQuestion()

        this.hideCurrentQuestionDiv()
        this.showNextQuestionDiv(i)
    }

    hideCurrentQuestionDiv() {
        this.currentQuestionDiv().setAttribute('class', 'hide')
    }

    showNextQuestionDiv(lastIndex) {
        const nextQuestionDiv = questionContainer.querySelector(`#question-${Question.all[lastIndex+1].id}-div`)

        nextQuestionDiv.setAttribute('class', 'show')
    }

    indexOfCurrentQuestion() {
        return Question.all.indexOf(this.currentQuestion())
    }

    currentQuestion() {
        return Question.all.find(q => this.currentQuestionDiv().getAttribute('id') === `question-${q.id}-div`)
    }

    currentQuestionDiv() {
        return questionContainer.querySelector('.show')
    } 

    toggleWelcome() {
        welcome.getAttribute('class') === 'show' ? welcome.setAttribute('class', 'hide') : welcome.setAttribute('class', 'show')
    }

    toggleGameWindow() {
        gameWindow.getAttribute('class') === 'show' ? gameWindow.setAttribute('class', 'hide') : gameWindow.setAttribute('class', 'show')
    }

    toggleEndOfGameMessage() {
        endGameDiv.getAttribute('class') === 'hide' ? endGameDiv.setAttribute('class', 'show') : endGameDiv.setAttribute('class', 'hide')
    }

    toggleHintDiv(hintDiv) {
        hintDiv.getAttribute('class') === 'hide' ? hintDiv.setAttribute('class', 'show') : hintDiv.setAttribute('class', 'hide')
    }

}