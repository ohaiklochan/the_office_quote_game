const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')
const questionContainer = document.getElementById('question_container')
const welcome = document.getElementById('welcome')
const scoreCardDiv = document.querySelector("#score_card")
const endGameDiv = document.querySelector('#end_of_game_message')
const hiScoresDiv = document.querySelector('#hiscores')
const gameWindow = document.getElementById('game_window')

// buttons
const startBtn = welcome.querySelector('#go')
const restartBtn = hiScoresDiv.querySelector('#play_again')
const hiScoresBtn = endGameDiv.querySelector('#to_hiscores')

// initialize the game
const newGame = new Game

// listeners
const headerClick = document.querySelector('h1')

headerClick.addEventListener('click', showTopScore)

function showTopScore() {
    fetch(`${BASE_URL}/hiscores`)
    .then(resp => resp.json())
    .then(topUser => {
        console.log(topUser.data[0].attributes.name)
    })
    alert(`This user has the top score: ${user.name}`)
}

User.userFormSubmit(newGame)
newGame.start()
newGame.hiScores()
newGame.restart()