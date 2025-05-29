const login = document.querySelector('.login')
const loginForm = document.querySelector('.login_form')
const loginInput = document.querySelector('.login_input')

const chat = document.querySelector('.chat')
const chatForm = document.querySelector('.chat_form')
const chatInput = document.querySelector('.chat_input')
const chaMessage = document.querySelector('.chat_message')

const user = {
    id: "",
    name: "",
    color: "",
}

const colors = [
    "aqua",
    "cadetblue",
    "blueviolet",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold",
    "navy",
]

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)

    return colors[randomIndex]
}

const handleSubmit = (event) => {
    event.preventDefault()
    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = 'none'
    chat.style.display = 'flex'

    console.log(user)
}

loginForm.addEventListener('submit', handleSubmit)