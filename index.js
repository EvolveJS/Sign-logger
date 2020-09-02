const config = require("./config")
function base() {
    const date = new Date()
    return `${config.White}[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}]${config.Reset}`
}
module.exports = {
    error(message) {
        console.log(base() + `${config.Bold}${config.Red} <ERROR>${config.Reset} — ${config.White}${message}${config.Reset}`)
    },
    info(message) {
        console.log(base() + `${config.Bold}${config.Yellow} <DEBUG>${config.Reset} — ${config.White}${message}${config.Reset}`)
    },
    success(message) {
        console.log(base() + `${config.Bold}${config.Green} <SUCCESS>${config.Reset} — ${config.White}${message}${config.Reset}`)
    }
}