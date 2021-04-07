class Answer {
    constructor(answer) {
        this.id = answer.id,
        this.content = answer.attributes.content,
        this.correct = answer.attributes.correct,
        Answer.call.push(this)
    }

    static all = []
}