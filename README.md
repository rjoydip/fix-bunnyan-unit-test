# fix-bunnyan-unit-test

There is an issue on bunyan declaration.

## Problem

```txt
can't access lexical declaration 'bunyan_1' before initialization
```

## Solution

Solution made when calling `bunyan.createLogger` or logger function in `beforeAll` jest hook.
