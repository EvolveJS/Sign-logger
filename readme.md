# Sign-Logger

The best JS/TS logger out there.

## Table of contents:

- [What's new](#what's-new)
- [Installation](#installation)
- [Getting started](#getting-started)

## What's new

###### If you used sign logger before, you might not recognize the new style of code being used, this revamp was made due to the [author](#authors) not being happy with the looks and mechanics.

1. Sign logger is now split into two classes - Logger and the Transformer! (See the difference [here](#difference))
2. The logger also comes with internal logs for debugging (optional)
3. New fail-safe for possible undefined objects/properties
4. No constructor, instead the logger uses methods to customize the logs

## Installation

```
npm install sign-logger
```

## Getting started

#### Simple error log ES6:

```ts
import { Logger } from "sign-logger";

const logger = new Logger();
logger.error("BEEP BOOP! ERROR!"); // [2020-11-27 16:55]  <Error>  BEEP BOOP! ERROR!
```

#### Transform usage

```ts
import { Transformer } from "sign-logger";

const transformer = new Transformer();
console.log(transformer.error("This RETURNS the value, it does not log it!")); // [2020-11-27 16:55]  <Error>  This RETURNS the value, it does not log it!
```

More information to come... im too sleepy rn

## Authors

#### [Collbrothers](https://github.com/Collbrothers)
