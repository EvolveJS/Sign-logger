# Sign-logger
### Changelog
* Added compatibility for custom text color, click [here](#text coloring)
* Added support for customizing logging configuration (Date and color configuration), and added fail-safe.
* Added debug() and warn(), Also fixed colors
### Simple usage
```js
// Import package
const Logger = require("sign-logger");
const logger = new Logger()
logger.error("Hello world!") // [2020-9-2] <Error> — Hello world!
logger.info("Hmm, something cool is happening here!") // [2020-9-2] <Info> — Hmm, something cool is happening here!
logger.success("Yay! Something went better than expected!") // [2020-9-2]  <Success> — Yay! Something went better than expected! 
logger.warn("Oh no! Something went wrong, but not fatal!") // [2020-9-2]  <Warn> — Oh no! Something went wrong, but not fatal!
logger.debug("Hmm, Someone needs to check this line of code out!") // [2020-9-2]  <Debug> — Hmm, Someone needsto check this line of code out!
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
If you provide a value to the all property, all the logs texts will log with that color </p>
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
### Default Colors:
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
### Default Date Format
```
YY-MM-DD
```
### Author:
##### [Collbrothers](https://github.com/Collbrothers)