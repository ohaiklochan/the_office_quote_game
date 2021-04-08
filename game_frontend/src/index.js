const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')
const questionContainer = document.getElementById('question_container')
const welcome = document.getElementById('welcome')
const scoreCardDiv = document.querySelector("#score_card")
const endGameDiv = document.querySelector('#end_of_game_message')
const hiScoresDiv = document.querySelector('#hiscores')
const gameWindow = document.getElementById('game_window')

const startBtn = welcome.querySelector('#go')
const restartBtn = hiScoresDiv.querySelector('#start_over')
const hiScoresBtn = endGameDiv.querySelector('#to_hiscores')

let newGame = new Game

User.userFormSubmit(newGame)
newGame.listenForStart()
newGame.listenForHiScores()
newGame.listenForRestart()