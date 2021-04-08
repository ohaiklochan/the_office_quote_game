# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

questions = [
    {
        difficulty: 1,
        question: "Who Said This?: Identity Theft Is Not A Joke, Jim!",
        correct_answer: "Dwight",
        incorrect_answers: [
            "Michael",
            "Pam",
            "Ryan"
        ]
    },

    {
        difficulty: 2,
        question: "Who Said This? : Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
        correct_answer: "Michael Scott",
        incorrect_answers: [
            "Ryan",
            "David Wallace",
            "Kevin"
        ]
    },

    {
        difficulty: 2,
        question: "Who Said This? : I talk a lot, so I’ve learned to tune myself out.",
        correct_answer: "Kelly",
        incorrect_answers: [
            "Jan",
            "Creed",
            "Meredith"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : Dwight mercy-killed Angela’s cat.",
        correct_answer: "Pam",
        incorrect_answers: [
            "Ryan",
            "Phyllis",
            "Jim"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : A few years ago, my family was on a safari in Africa and my cousin, Mufasa, was um, he was trampled to death by a pack of wildebeests and um, we all took it really hard.",
        correct_answer: "Ryan",
        incorrect_answers: [
            "Michael",
            "Pam",
            "Ryan"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : If I don’t have some cake soon, I might die.",
        correct_answer: "Stanley",
        incorrect_answers: [
            "Michael",
            "Pam",
            "Kevin"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.",
        correct_answer: "Michael Scott",
        incorrect_answers: [
            "Jan",
            "Angela",
            "Creed"
        ]
    },

    {
        difficulty: 2,
        question: "Who Said This? : The worst thing about prison was the dementors.",
        correct_answer: "Prison Mike",
        incorrect_answers: [
            "Michael Scott",
            "Date Mike",
            "Ping"
        ]
    },

    {
        difficulty: 1,
        question: "Who Said This? : It is not a good time for me to lose my job since I have some pretty big long-term plans in my personal life with Pam that I’d like her parents to be psyched about. So, I am about to do something very bold in this job that I’ve never done before: try.",
        correct_answer: "Jim",
        incorrect_answers: [
            "Roy",
            "Ryan",
            "Brian the Camera Guy"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : I’ve been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
        correct_answer: "Creed",
        incorrect_answers: [
            "Meredith",
            "Oscar",
            "Dwight"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : News flash: You are not special.",
        correct_answer: "Stanley Hudson",
        incorrect_answers: [
            "Dwight Schrute",
            "Angela Martin",
            "Jan Levinson-Gould"
        ]
    },

    {
        difficulty: 1,
        question: "Who Said This? : I wanted to eat a pig in a blanket, in a blanket.",
        correct_answer: "Kevin",
        incorrect_answers: [
            "Erin",
            "Michael",
            "Andy"
        ]
    },

    {
        difficulty: 2,
        question: "Who Said This? : I’m fast. To give you a reference point. I’m somewhere between a snake and a mongoose. And a panther.",
        correct_answer: "Dwight",
        incorrect_answers: [
            "Jim",
            "Creed",
            "Meredith"
        ]
    },

    {
        difficulty: 1,
        question: "Who Said This? : Tell ya one thing, I’m not gonna be a good mom tonight.",
        correct_answer: "Meredith",
        incorrect_answers: [
            "Angela",
            "Jan",
            "Pam"
        ]
    },

    {
        difficulty: 3,
        question: "Who Said This? : When Pam gets Michael’s old chair, I get Pam’s old chair. Then I’ll have two chairs. Only one to go.",
        correct_answer: "Creed",
        incorrect_answers: [
            "Kelly",
            "Kevin",
            "Gabe"
        ]
    },

    {
        difficulty: 1,
        question: "Who Said This? : Boy, have you done lost your mind? Cause I’ll help you find it!",
        correct_answer: "Stanley",
        incorrect_answers: [
            "Dwight",
            "Darryl",
            "David Wallace"
        ]
    },

    {
        difficulty: 1,
        question: "Who Said This? : I Am Not Superstitious, But I'm A Little 'Stitious.",
        correct_answer: "Michael Scott",
        incorrect_answers: [
            "Creed",
            "Clark",
            "Pete"
        ]
    },

    {
        difficulty: 2,
        question: "Who Said This? : Mini-Cupcakes? As In The Mini Version Of Regular Cupcakes? Which Is Already A Mini Version Of Cake? Honestly, Where Does It End With You People?",
        correct_answer: "Kevin",
        incorrect_answers: [
            "Kelly",
            "Robert California",
            "Nellie"
        ]
    }
]

questions.each do |question|
    q = Question.create(content: question[:question], difficulty: question[:difficulty])
    q.answers.create(content: question[:correct_answer], correct: true)
    question[:incorrect_answers].each do |answer| 
        q.answers.create(content: answer, correct: false)
    end
end

users = [
    {name: 'Not Jim', score: 30},
    {name: 'Phyllis Lapin-Vance', score: 35},
    {name: 'Pam', score: 100},
    {name: 'Kevin', score: 1},
    {name: 'Kelly', score: 25},
    {name: 'DWIGHT AND THIS GAME IS STUPID', score: 14},
    {name: 'Michael Gary Scott', score: 29},
    {name: 'Oscar M', score: 20},
    {name: 'Ryan', score: 7},
    {name: 'Meredith', score: 12}
]

User.create(users)