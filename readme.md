# Sign-logger

### Simple usage:
```js
// Import package
const logger = require("sign-logger");
logger.error("Hello world!") // [2020-9-2-16:35] <Error> — Hello world!
logger.info("Hmm, something cool is happening here!") // [2020-9-2-16:35] <Info> — Hmm, something cool is happening here!
logger.success("Yay! Something went better than expected!") // [2020-9-2-16:35]  <Success> — Yay! Something went better than expected! 
logger.warn("Oh no! Something went wrong, but not fatal!") // [2020-9-2-16:35]  <Warn> — Oh no! Something went wrong, but not fatal!
logger.debug("Hmm, Someone needs to check this line of code out!") // [2020-9-2-16:35]  <Debug> — Hmm, Someone needsto check this line of code out!
``` 
### Changelog
* Added debug() and warn(), Also fixed colors
### Author:
##### [Collbrothers](https://github.com/Collbrothers)