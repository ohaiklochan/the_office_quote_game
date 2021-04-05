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
                
            })
    }
}