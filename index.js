const config = require("./config")
function base() {
    const date = new Date()
    return `${config.White}[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}]${config.Reset}`
}
module.exports = {
    /**
     * @param {string} message The message you want to display
     */
    error(message) {
        console.log(base() + `${config.Bold}${config.Red} <Error> — ${message}${config.Reset}`)
    },
    /**
     * @param {string} message The message you want to display
     */
    info(message) {
        console.log(base() + `${config.Bold}${config.Blue} <Info> — ${message}${config.Reset}`)
    },
    /**
     * @param {string} message The message you want to display
     */
    success(message) {
        console.log(base() + `${config.Bold}${config.Green} <Success> — ${message}${config.Reset}`)
    },
    /**
     * @param {string} message The message you want to display
     */
    debug(message) {
        console.log(base() + `${config.Bold}${config.Magenta} <Debug> — ${message}${config.Reset}`)
    },
    /**
     * @param {string} message The message you want to display
     */
    warn(message) {
        console.log(base() + `${config.Bold}${config.Yellow} <Warn> — ${message}${config.Reset}`)
    }
}