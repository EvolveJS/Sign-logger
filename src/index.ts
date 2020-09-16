import { config } from "./config"
interface OverwriteOptions {
    title?: string | boolean;
    date?: boolean | string;
    textColor?: string | boolean;
    symbols?: {
       left?: string | boolean;
       right?: string | boolean;
    }
    color?: string | boolean;
}

function base(baseFormat: string | boolean) {
    const date = new Date()
    if(!baseFormat) return `${config.White}[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}]${config.Reset}`
    let complete: string = "";
    if(typeof baseFormat === "string") {
    complete = baseFormat.toUpperCase().replace("MM", `${date.getMonth() + 1}`)
        .replace("YY", date.getFullYear().toString())
        .replace("DD", `${date.getDate()}`)
        .replace("HH", date.getHours().toString())
        .replace("MI", date.getMinutes().toString())
        .replace("SS", date.getSeconds().toString())
        .replace("MS", date.getMilliseconds().toString())
    }
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
    },
    symbols : {
        left: "[",
        right: "]"
    },
    textColors: {
        all: false,
        error: config.Red,
        info: config.Blue,
        success: config.Green,
        debug: config.Magenta,
        warn: config.Yellow
    }
}
/**
 * Colors object, click {@link https://www.npmjs.com/package/sign-logger#default-colors|here} to see more
 */
export const Colors = config

/**
 * The main class of the package
 * @example
 * const log = new Logger()
 * log.error("Oh no! Something went wrong!") // => [2020-8-10] [Error] - Oh no! Something went wrong!
 */
 export class Logger {
     private readonly format: string | boolean
     private colors = defaultConfig.colors;
     private symbols: { left: string; right: string }
     private textColors: { all: boolean; error: string; info: string; success: boolean; debug: string; warn: string } | { all: boolean; error: string; info: string; success: string; debug: string; warn: string; }

    constructor (options = defaultConfig) {
        if(options.dateFormat) this.format = options.dateFormat
        else this.format = defaultConfig.dateFormat
        if(options.colors) this.colors = options.colors
        else this.colors = defaultConfig.colors
        if(options.symbols) this.symbols = options.symbols
        else this.symbols = defaultConfig.symbols
        if(options.textColors) this.textColors = options.textColors
        else this.textColors = defaultConfig.textColors
    }
    /**
     * @param {string} message The message you want to display
     * @param {OverwriteOptions} options These options (if provided) will overwrite the constructor options
     */
    error(message: string, options?: OverwriteOptions) {
        if(!options) {
            options = {symbols: {}}
            options.color = false
            options.textColor = false
            options.symbols.right = false
            options.symbols.left = false
            options.date = false
            options.title = false
        }
        if(!options.symbols) options.symbols = {left: false, right: false}
        if(!this.colors.error && !options.color) throw new Error("Error color is not found")
        if(!this.symbols.left && options.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right && options.symbols.right) throw new Error("Right symbol not found")
        let res;
        if(options && options.textColor) res = options.textColor
        else if (this.textColors.all) res = this.textColors.all
        else res = this.textColors.error
        console.log(base(this.format) + `${options.color ? options.color : this.colors.error} ${options.symbols.left ? options.symbols.left : this.symbols.left}${options.title ? options.title : "Error"}${options.symbols.right ? options.symbols.right : this.symbols.right}${config.Reset} — ${res}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     * @param {OverwriteOptions} options These options (if provided) will overwrite the constructor options
     */
    info(message: string, options?: OverwriteOptions) {
        if(!options) {
            options = {symbols: {}}
            options.color = false
            options.textColor = false
            options.symbols.right = false
            options.symbols.left = false
            options.date = false
            options.title = false
        }
        if(!options.symbols) options.symbols = {left: false, right: false}
        if(!this.colors.info && !options.color) throw new Error("Info color is not found")
        if(!this.symbols.left && options.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right && options.symbols.right) throw new Error("Right symbol not found")
        let res;
        if(options && options.textColor) res = options.textColor
        else if (this.textColors.all) res = this.textColors.all
        else res = this.textColors.info
        console.log(base(this.format) + `${options.color ? options.color : this.colors.info} ${options.symbols.left ? options.symbols.left : this.symbols.left}${options.title ? options.title : "Info"}${options.symbols.right ? options.symbols.right : this.symbols.right}${config.Reset} — ${res}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     * @param {OverwriteOptions} options These options (if provided) will overwrite the constructor options
     */
    success(message: string, options?: OverwriteOptions) {
        if(!options) {
            options = {symbols: {}}
            options.color = false
            options.textColor = false
            options.symbols.right = false
            options.symbols.left = false
            options.date = false
            options.title = false
        }
        if(!options.symbols) options.symbols = {left: false, right: false}
        if(!this.colors.success && !options.color) throw new Error("Success color is not found")
        if(!this.symbols.left && options.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right && options.symbols.right) throw new Error("Right symbol not found")
        let res;
        if(options && options.textColor) res = options.textColor
        else if (this.textColors.all) res = this.textColors.all
        else res = this.textColors.success
        console.log(base(this.format) + `${options.color ? options.color : this.colors.success} ${options.symbols.left ? options.symbols.left : this.symbols.left}${options.title ? options.title : "Success"}${options.symbols.right ? options.symbols.right : this.symbols.right}${config.Reset} — ${res}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     * @param {OverwriteOptions} options These options (if provided) will overwrite the constructor options
     */
    debug(message: string, options?: OverwriteOptions) {
        if(!options) {
            options = {symbols: {}}
            options.color = false
            options.textColor = false
            options.symbols.right = false
            options.symbols.left = false
            options.date = false
            options.title = false
        }
        if(!options.symbols) options.symbols = {left: false, right: false}
        if(!this.colors.debug && !options.color) throw new Error("Debug color is not found")
        if(!this.symbols.left && options.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right && options.symbols.right) throw new Error("Right symbol not found")
        let res;
        if(options && options.textColor) res = options.textColor
        else if (this.textColors.all) res = this.textColors.all
        else res = this.textColors.debug
        console.log(base(this.format) + `${options.color ? options.color : this.colors.debug} ${options.symbols.left ? options.symbols.left : this.symbols.left}${options.title ? options.title : "Debug"}${options.symbols.right ? options.symbols.right : this.symbols.right}${config.Reset} — ${res}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     * @param {OverwriteOptions} options These options (if provided) will overwrite the constructor options
     */
    warn(message: string, options?: OverwriteOptions) {
        if(!options) {
            options = {symbols: {}}
            options.color = false
            options.textColor = false
            options.symbols.right = false
            options.symbols.left = false
            options.date = false
            options.title = false
        }
        if(!options.symbols) options.symbols = {left: false, right: false}
        if(!this.colors.warn && !options.color) throw new Error("Warn color is not found")
        if(!this.symbols.left && options.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right && options.symbols.right) throw new Error("Right symbol not found")
        let res;
        if(options && options.textColor) res = options.textColor
        else if (this.textColors.all) res = this.textColors.all
        else res = this.textColors.warn
        console.log(base(this.format) + `${options.color ? options.color : this.colors.warn} ${options.symbols.left ? options.symbols.left : this.symbols.left}${options.title ? options.title : "Warn"}${options.symbols.right ? options.symbols.right : this.symbols.right} ${config.Reset}— ${res}${message}${config.Reset}`)
    }

    /**
     * Clears the console
     * @param   {boolean} logDate Weather or not you want to log after clearing it
     */
    clear(logDate: boolean) {
        console.clear()
        if(logDate) this.info("Cleared the console")
    }
}