import { Colors } from "./Colors"
import { Coloring, Overwrite } from "./interfaces"
function fformat(arg: string) {
    let date = new Date();
    return `${Colors.WHITE}${arg.length >= 1 ? "[" : ""}${arg.toUpperCase().replace("YY", `${date.getFullYear()}`)
        .replace("MM", `${date.getMonth() + 1}`)
        .replace("DD", `${date.getDate()}`)
        .replace("HH", `${date.getHours()}`)
        .replace("MI", `${date.getMinutes()}`)
        .replace("SS", `${date.getSeconds()}`)
        .replace("MS", `${date.getMilliseconds()}`)}${arg.length >= 1 ? "]" : ""}${Colors.RESET}`
}
function main(message: string, logger: Logger, name: string, overwrite?: Overwrite) {
    let res = logger.symbols;
    if(overwrite?.symbols?.[0] && overwrite?.symbols?.[1]) {
        res = overwrite.symbols;
    }
    let title;
    let format;
    if(overwrite?.date?.show === false) {
        format = ""
    }else if(overwrite?.date?.format) {
        format = overwrite.date.format
    }else {
        format = logger.date
    }
    if(!overwrite?.title) title = name
    if(overwrite?.title?.length === 0) {
        res = ["", ""]
        title = ""
    }else if(overwrite?.title) title = overwrite.title
    // @ts-ignore
    console.log(`${fformat(format)}  ${overwrite?.color ? overwrite.color : logger.colors[name.toLowerCase()]}${res[0]}${overwrite?.titleUnderline ? Colors.UNDERLINE : ""}${name.toLowerCase() === "fatal" ? `\u001b[41m${title}` : title}${Colors.RESET}${overwrite?.color ? overwrite.color : logger.colors[name.toLowerCase()]}${res[1]}${" ".repeat(8 - title.length + 2)}${overwrite?.underline ? Colors.UNDERLINE : ""}${message}${Colors.RESET}`);
}
export class Logger {
    public symbols: [string, string] = ["", ""];
    public date: string = "YY-MM-DD HH:MI"
    public colors: Coloring = {
        fatal: Colors.WHITE,
        error: Colors.RED,
        debug: Colors.MAGENTA,
        info: Colors.BLUE
    }
    public setSymbols(symbols: [string, string]) {
        if(symbols.length > 1) {
            //@ts-ignore
            this.symbols = symbols.slice(0,2)
            return this;
        }
        this.symbols = symbols
        return this;
    }
    public setColors(colors: Coloring) {
        if(!colors.debug) colors.debug = this.colors.debug
        if(!colors.error) colors.error = this.colors.error
        if(!colors.info) colors.info = this.colors.info
        this.colors = colors
        return this;
    }
    public setDate(date: string): this {
        this.date = date;
        return this;
    }
    public info(message: string, overwrite?: Overwrite) {
        main(message, this, "Info",overwrite)
    }
    public fatal(message: string, overwrite?: Overwrite) {
        main(message, this, "Fatal",overwrite)
    }
    public error(message: string, overwrite?: Overwrite) {
        main(message, this, "Error",overwrite)
    }
    public debug(message: string, overwrite?: Overwrite) {
        main(message, this, "Debug",overwrite)
    }
}