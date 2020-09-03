const config = require("./config")
function base(baseFormat) {
    const date = new Date()
    if(!baseFormat) return `${config.White}[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}]${config.Reset}`
    let complete = baseFormat.toUpperCase().replace("MM", date.getMonth().toString())
        .replace("YY", date.getFullYear().toString())
        .replace("DD", `${date.getDate() + 1}`)
        .replace("HH", date.getHours().toString())
        .replace("MI", date.getMinutes().toString())
        .replace("SS", date.getSeconds().toString())
        .replace("MS", date.getMilliseconds().toString())
    return `${config.White}[${complete}]${config.Reset}`
}
const defaultConfig = {
    dateFormat: "YY-MM-DD",
    colors: {
        error: config.Red,
        info: config.Blue,
        success: config.Green,
        debug: config.Magenta,
        warn: config.Yellow
    }
}
module.exports = class {
    constructor(options = defaultConfig) {
        if(options.dateFormat) this.format = options.dateFormat
        else this.format = false
        if(options.colors) this.colors = options.colors
        else this.colors = defaultConfig.colors
    }
    /**
     * @param {string} message The message you want to display
     */
    error(message) {
        if(!this.colors.error) throw new Error("Error color is not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.error} <Error> — ${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    info(message) {
        if(!this.colors.info) throw new Error("Info color is not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.info} <Info> — ${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    success(message) {
        if(!this.colors.success) throw new Error("Success color is not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.success} <Success> — ${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    debug(message) {
        if(!this.colors.debug) throw new Error("Debug color is not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.debug} <Debug> — ${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    warn(message) {
        if(!this.colors.warn) throw new Error("Warn color is not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.warn} <Warn> — ${message}${config.Reset}`)
    }
}