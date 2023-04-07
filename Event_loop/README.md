## What is the Event loop?

The event loop is what allows Node.js to perform non-blocking I/O operations (asynchronous tasks) — despite the fact that JavaScript is single-threaded. It does this by offloading operations to the system kernel whenever possible.

When Node.js starts, it initializes the event loop, processes the provided input script or drops into the REPL mode, which may make async API calls, schedule timers, or call process.nextTick(), and then begins processing the event loop.

## Explain the 6 phases of the event loop?

Timers, Pending and idle,prepare, Polling, Check and Close

Timers: This is a phase that executes callbacks scheduled by setTimeout() and setInterval(). This phase is where any completed timers are processed.

Pending callbacks: This is an internal phase, and it executes I/O callbacks deferred to the next loop iteration.

Idle, prepare: This phase is only used internally.

Polling: In this phase, the event loop retrieves new I/O events; executes I/O related callbacks and additionally, the polling phase waits for more input/output callbacks and if the queue is empty, it moves on to the fifth phase.

Check: This is the phase where any setImmediate() callbacks which are part of input/output are processed.

Close: In this phase, the event loop checks if there are no timers, or input/output calls left, if none, the event loop closes and the process ends. If there are additional timers or input/output calls, then the event loop continues until there are none left.


## List some of the best practices in server-side code development?
* Focus on code quality

* Prefer ES6+ and Async/Await

* Keep Code Small

* Handle Errors



## What is NPM ?
NPM is a tool for managing project dependencies via the command line and it is also a website hosting more than 1 million third-party packages that can be used for projects.

## How to initialize a package in npm?

npm init

## How to run a script in the package.json?

npm run <script name>

For example: npm run prettier

## Initialize a package of your choice, give it a name and install the following npm packages to it: Express, mongoose, joi.
[package.json](./package.json)