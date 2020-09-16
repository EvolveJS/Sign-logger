# Sign-logger
### Changelog
* Added support for overwriting options, click [here](#overwriting-options) to see more.
* Added compatibility for custom text color, click [here](#text-coloring), and added support for custom symbols, click [here](#symbols) for more information.
* Added support for customizing logging configuration (Date and color configuration), and added fail-safe.
* Added debug() and warn(), Also fixed colors
### Simple usage
```js
// Import package
const { Logger } = require("sign-logger");
const logger = new Logger()
logger.error("Hello world!") // [2020-9-2] [Error] — Hello world!
logger.info("Hmm, something cool is happening here!") // [2020-9-2] [Info] — Hmm, something cool is happening here!
logger.success("Yay! Something went better than expected!") // [2020-9-2]  [Success] — Yay! Something went better than expected! 
logger.warn("Oh no! Something went wrong, but not fatal!") // [2020-9-2]  [Warn] — Oh no! Something went wrong, but not fatal!
logger.debug("Hmm, Someone needs to check this line of code out!") // [2020-9-2]  [Debug] — Hmm, Someone needsto check this line of code out!
``` 
### Constructor
```js
new Logger({ dateFormat: "YY-MM-DD", colors: myColorObject })
```
### Text coloring
##### Default object
```json
{
            "all": false,
            "error": "\u001b[31;1m",
            "info": "\u001b[34;1m",
            "success": "\u001b[32;1m",
            "debug": "\u001b[35;1m",
            "warn": "\u001b[33;1m"
}
```
##### textColors#all property
If you provide a value to the all property, all the logs texts will log with that color (if not any overwrite options were provided of course)</p>
##### Date Format
```
YY: Year
MM: Month
DD: Day
HH: Hour
MI: Minute
SS: Second
MS: Millisecond
```
### Symbols
> Default symbol: [ ]
##### Setting a new symbol
```js
let config = {
symbols: {
left: "<",
right: ">"
    }
}
let logger = new Logger(config)
```
### Overwriting options
```js
const log = new Logger()

log.warn("Meh, this is not fatal, but it is wrong", {title: "Warning"}) // [2020-9-2]  [Warning] — Meh, this is not fatal, but it is wrong
```
#### Possible options
```ts
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
```
### Default Colors
```
Black: \u001b[30;1m
Red: \u001b[31;1m
Green: \u001b[32;1m
Yellow: \u001b[33;1m
Blue: \u001b[34;1m
Magenta: \u001b[35;1m
Cyan: \u001b[36;1m
White: \u001b[37;1m
```
### Colors Object
```ts
const Colors = {
    Black: "\u001b[30;1m",
    Red: "\u001b[31;1m",
    Green: "\u001b[32;1m",
    Yellow: "\u001b[33;1m",
    Blue: "\u001b[34;1m",
    Magenta: "\u001b[35;1m",
    Cyan: "\u001b[36;1m",
    White: "\u001b[37;1m",
    Reset: "\u001b[0m"
}
```
### Default Date Format
```
YY-MM-DD
```
### Author
##### [Collbrothers](https://github.com/Collbrothers)