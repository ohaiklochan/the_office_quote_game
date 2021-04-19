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
let newGame = new Game

// listeners
User.userFormSubmit(newGame)
newGame.start()
newGame.hiScores()
newGame.restart()