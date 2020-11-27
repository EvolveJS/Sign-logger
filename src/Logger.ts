import { Colors } from "./Colors"
import { Coloring, Overwrite } from "./interfaces"

export class Logger {
    public symbols: [string, string] = ["<", ">"];
    /**
     * Whether or not to log interal logs, ONLY USE FOR DEBUGGING
     */
    public internal: boolean = false;
    public date: string = "YY-MM-DD HH:MI"
    private format() {
        let date = new Date();
        return `${Colors.WHITE}[${this.date.toUpperCase().replace("YY", `${date.getFullYear()}`)
        .replace("MM", `${date.getMonth() + 1}`)
        .replace("DD", `${date.getDate()}`)
        .replace("HH", `${date.getHours()}`)
        .replace("MI", `${date.getMinutes()}`)
        .replace("SS", `${date.getSeconds()}`)
        .replace("MS", `${date.getMilliseconds()}`)}]${Colors.RESET}`
    }
    public colors: Coloring = {
        error: Colors.RED,
        success: Colors.GREEN,
        debug: Colors.BROWN,
        info: Colors.MAGENTA
    }
    public setSymbols(symbols: [string, string]) {
        if(symbols.length > 1) {
            if(this.internal) console.log(`${Colors.RED} Internal log found! ${Colors.RESET}\nSymbols array length exceeds 1 (${__dirname})`)
            //@ts-ignore
            this.symbols = symbols.slice(0,1)
            return this;
        }
        this.symbols = symbols
        return this;
    }
    public setColors(colors: Coloring) {
        if(!colors.debug) colors.debug = this.colors.debug
        if(!colors.error) colors.error = this.colors.error
        if(!colors.info) colors.info = this.colors.info
        if(!colors.success) colors.success = this.colors.success
        this.colors = colors
        if(this.internal) console.log("Colors set.")
        return this;
    }
    public setDate(date: string) {
        if(date.length < 1) {
            if(this.internal) console.log("Date string length should exceed 1 letters")
        }
        this.date = date;
        return this;
    }
    public info(message: string, overwrite?: Overwrite) {
        let res = this.symbols;
        if(overwrite?.symbols?.[0] && overwrite?.symbols?.[1]) {
            res = overwrite.symbols;
        }
        let title;
        if(!overwrite?.title) title = "Info"
        if(overwrite?.title?.length === 0) {
            res = ["", ""]
            title = ""
            if(this.internal) 
            console.log("Title length did not exceed the length of one letter, so no symbol or title is shown")
        }else if(overwrite?.title) title = overwrite.title
        console.log(`${this.format()}  ${this.colors.info}${res[0]}${title}${res[1]}  ${message}${Colors.RESET}`)
    }
    public error(message: string, overwrite?: Overwrite) {
        let res = this.symbols;
        if(overwrite?.symbols?.[0] && overwrite?.symbols?.[1]) {
            res = overwrite.symbols;
        }
        let title;
        if(!overwrite?.title) title = "Error"
        if(overwrite?.title?.length === 0) {
            res = ["", ""]
            title = ""
            if(this.internal) 
            console.log("Title length did not exceed the length of one letter, so no symbol or title is shown")
        }else if(overwrite?.title) title = overwrite.title
        console.log(`${this.format()}  ${this.colors.info}${res[0]}${title}${res[1]}  ${message}${Colors.RESET}`)
    }
    public debug(message: string, overwrite?: Overwrite) {
        let res = this.symbols;
        if(overwrite?.symbols?.[0] && overwrite?.symbols?.[1]) {
            res = overwrite.symbols;
        }
        let title;
        if(!overwrite?.title) title = "Debug"
        if(overwrite?.title?.length === 0) {
            res = ["", ""]
            title = ""
            if(this.internal) 
            console.log("Title length did not exceed the length of one letter, so no symbol or title is shown")
        }else if(overwrite?.title) title = overwrite.title
        console.log(`${this.format()}  ${this.colors.info}${res[0]}${title}${res[1]}  ${message}${Colors.RESET}`)
    }
    public success(message: string, overwrite?: Overwrite) {
        let res = this.symbols;
        if(overwrite?.symbols?.[0] && overwrite?.symbols?.[1]) {
            res = overwrite.symbols;
        }
        let title;
        if(!overwrite?.title) title = "Success"
        if(overwrite?.title?.length === 0) {
            res = ["", ""]
            title = ""
            if(this.internal) 
            console.log("Title length did not exceed the length of one letter, so no symbol or title is shown")
        }else if(overwrite?.title) title = overwrite.title
        console.log(`${this.format()}  ${this.colors.info}${res[0]}${title}${res[1]}  ${message}${Colors.RESET}`)
    }
}