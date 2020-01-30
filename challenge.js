let timer = setInterval(updateTimer, 1000)

const counter = document.getElementById('counter')

function updateTimer(){
    counter.innerText = parseInt(counter.innerText) + 1
}

//Listen to click event on plus and minus and increment and decrement the counter inner text
const decrement = document.getElementById('-')
const increment = document.getElementById('+')

decrement.addEventListener("click", function(event){
    counter.innerText = parseInt(counter.innerText) - 1
})

increment.addEventListener("click", function(event){
    counter.innerText = parseInt(counter.innerText) + 1
})

//when you click like, it captures the number that's being displayed and adds an li element to a ul with the # and the number of times it's been liked
// 3 has been liked 1 time
const likeButton = document.getElementById('<3')
const likeList = document.getElementsByClassName("likes")[0]

const numbers = []

likeButton.addEventListener("click", function(event){
    const like = document.createElement("li")
    const numberDigit = counter.innerText
    const existingNode = document.querySelector(`li[data-number="${numberDigit}"]`)
    like.dataset.number = numberDigit
    if (existingNode) { 
        let numberCount = parseInt(existingNode.dataset.counter) + 1
        like.dataset.counter = numberCount
        like.innerText = `${numberDigit} has been liked ${numberCount} time`
        likeList.replaceChild(like, existingNode)
    }else {
        // numbers.push({"num": numberDigit, "numberCount": 1})
        // let numCount = numbers.find(functin(element){return element["num"]=== numberDigit})["numberCount"]
        like.innerText = `${numberDigit} has been liked 1 time`
        like.dataset.counter = 1
        likeList.appendChild(like)
    }
    
})

const pauseButton = document.getElementById('pause')
const resumeButton = document.createElement('button')
resumeButton.id = "resume"
resumeButton.innerText = "resume"
pauseButton.addEventListener("click", function(event){
    const numberDigit = counter.innerText
    console.log(numberDigit)
    function stopTimer(){
        clearInterval(timer)
    }
    stopTimer()
    pauseButton.replaceWith(resumeButton)
})

resumeButton.addEventListener("click", function(event){
    const numberDigit = counter.innerText
    resumeButton.replaceWith(pauseButton)
    timer = setInterval(updateTimer, 1000)
})

const commentForm = document.getElementById('comment-form')
commentForm.addEventListener("submit", function(event){
    event.preventDefault()
    let comment = event.target[0].value
    let post = document.createElement("p")
    post.innerText = comment
    let commentDiv = document.getElementById("comment-div")
    commentDiv.appendChild(post)
    event.target.reset()
})




