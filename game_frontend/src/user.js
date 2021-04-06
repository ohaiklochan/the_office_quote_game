const BASE_URL = "http://localhost:3000/"

class User {
    constructor(user) {
        this.id = user.id,
        this.name = user.attributes.name,
        this.score = user.attributes.score
    }

    static userFormSubmit(game) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault()
            User.addUser(game)
        })
    }

    static addUser(game) {
        const name = userForm.querySelector('input').value
        let user = {user: {name}}
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch(`${BASE_URL}/users`, options)
        .then(resp => resp.json())
        .then(user => {
            let newUser = new User(user.data)
            game.user = newUser
            userForm.reset()
            User.toggleUserForm()
            newUser.toggleScoreCard()
            game.toggleWelcome()
            game.toggleGameWindow()
        })
        .catch(error => {
            this.serverError(error)
        })
    }

    updateUserHiScore() {
        let score = this.score
        let user = {user: {score}}
        let options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch(`${BASE_URL}/users/${this.id}`, options)
        .then(resp => resp.json())
        .then(user => {
            this.score = user.data.attributes.hiscore
        })
        .catch(error => User.serverError(error))
    }

    toggleScoreCard() {
        if(scoreCardDiv.getAttribute('class') === 'hide') {
            scoreCardDiv.innerHTML = `<p><str>${this.name}'s Score: <span>0</span></str></p>`
            scoreCardDiv.setAttribute('class', 'show')
        }
        else {
            scoreCardDiv.setAttribute('class', 'hide')
        }
    }

    updateScoreCard() {
        const scoreSpan = scoreCardDiv.querySelector('span')
        scoreSpan.innerText = this.score
    }

    static serverError(error) {
        alert(error + "\nThat doesn't seem right. Try again.")
    }

    static toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }

    static displayHiScores(top_users) {
        this.renderHiScoresTable(top_users)
        this.toggleHiScores()
    }

    static clearHiScores() {
        hiScoresDiv.querySelector('table').remove
    }

    static renderHiScoresTable(top_users) {
        const table = document.createElement('table')
        table.innerHTML += "<tr> <th>user</th> <th>score</th> </tr>"
        for (const user of top_users) {
            table.innerHTML += `<tr> <td>${user.name}</td> <td>${user.score}</td> </tr>`
        }

        hiScoresDiv.appendChild(table)
    }

    static toggleHiScores() {
        hiScoresDiv.getAttribute('class') === 'hide' ? hiScoresDiv.setAttribute('class', 'show') : hiScoresDiv.setAttribute('class', 'hide')
    }

    static getHiScores() {
        fetch(`${BASE_URL}/hiscores`)
        .then(resp => resp.json())
        .then(hiscores => {
            let top_users = []
            for(let user of hiscores.data) {
                top_users.push(new User(user))
            }
            this.displayHiScores(top_users)
            })
        .catch(error => this.serverError(error))
    }

}