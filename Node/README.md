### Node Basics

## Define monolithic architecture

An application with a monolithic architecture is built as a single unified unit that is self-contained and independent from other applications. The monolithic architecture has one large code base that serves all the needs of the application or business.
It is really hard to make updates to the application with this type of architecture because it requires updating the entire stack by accessing the code base, building and deploying an updated version of the service-side interface, which makes updates restrictive and time consuming. It has slower development speed, the individual components are not scalable , a single error in a module can affect the availability of the entire application.

Monolithic architecture does have its advantages at the early on set of the project, by making it easy to manage the code, testing , performance, an deployment, . Everything in a monolithic architecture application can be release at once.

## Explain microservices in your own understanding

A microservice architecture relies on a series of independently deployable services. Each deployable service has its own business logic and database with a specific goal. updating, testing,deployment and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases.

Microservices separates tasks into smaller processes that function independently of each other and contribute to the overall whole.

## Which of the backend architecture appeals to me?

Microservices

Microservices promotes agility, has flexible scaling, continuous deployment, highly maintainable and testable, independently deployable, highly reliable and promotes happier teams.

## Is Nodejs a multithreaded language?

According to Node.js documentation, a Node.js application runs using the event loop. The event loop is what allows Node.js to perform non-blocking I/O operations and explains how Node.js can be asynchronous. The event loop also known as the main thread makes Node.js highly performant and efficient, as it can handle multiple concurrent connections without the need for multiple threads or processes. Therefore Node.js JavaScript code runs on a single thread.

## What does REPL stand for?

READ, EVALUATE, PRINT AND LOOP