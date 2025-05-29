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

let websocket

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)

    return colors[randomIndex]
}

const processMessage = ({ data }) => {
    const { userId, userName, userColor, content } = JSON.parse(data)
}

const handleSubmit = (event) => {
    event.preventDefault()
    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = 'none'
    chat.style.display = 'flex'

    websocket = new WebSocket('ws://localhost:8080')
    websocket.onmessage = processMessage
}

const sendMessage = (event) => {
    event.preventDefault()

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    }

    websocket.send(JSON.stringify(message))

    chatInput.value = ''
}

loginForm.addEventListener('submit', handleSubmit)
chatForm.addEventListener('submit', sendMessage)