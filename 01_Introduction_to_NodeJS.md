# Introduction to NodeJS

Before we start talking about NodeJS, I want to tell you a few words about JavaScript.
JavaScript - scripting program language, which appears in the World in 1994
Until 2009, JS was used to write web applications on the client-side using various engines. Each Browser have own engine to run js code. 
That takes our JS code and converts it to code that a computer can understand.
That’s why the same js code can look differently on every browser.

And in 2009, Ryan Dahl came up with a brilliant idea to create an environment where you can run js code not only in the browser.
So, he took Google’s v8 engine.  It is an open source JS engine develop by Google which is the fastest JS engine out there and embedded it inside a C++ program , modules, magic and called that program Node.
Thus appeared NodeJS, which began to gain popularity very quickly in the js world.

In few words, **Node.js is a runtime environment for running js code**. It contains a JS engine that can execute our JS code plus additional capabilities not available inside the browser. 
But these capabilities are different from capabilities we have in a browsers.
For example, *document* object

In Node we can work with the file system, network, OS and so on
We will talk about those capabilities a little bit later.

## What Basic facts do you need to know about Node.JS?

* Node is Not a programing language.
It's like comparing a banana with a table

* By the same token node should not be compared with frameworks
like ASP.NET or Django and so on. 

* Node is Not a framework
**Node.js is a runtime environment for executing js code.**

## When to use Node.js?
* Use Node to build back-end services (API)
* Highly-scalable, data-intensive and real-time  apps (PayPal, Uber, Netflix)
* Test automation

## Why to use Node.js?
* Superfast and highly scalable
* JS everywhere (Slack, VS Code)
* Cleaner and more consistent codebase
* Large ecosystem of open-source libs

## How node Works
Early I mention that node applications are highly scalable. But Why? 
This is because of the non-blocking or asynchronous nature of Node.

What I mean by asynchronies? Let me give you a metaphor.
Let’s imagine that we cook the Pasta. 
While pasta is cooking, you can prepare tomato sauce on the souse pan.
Or You can wait until pasta is prepared and only then cook tomato sauce. And spend 7 minutes more. In the meantime your pasta becomes cool.

With such an approach It makes nodes ideal for building applications that include a lot of disk or network access. We can serve more clients without need to throw in more hardware and that’s why node application is highly scalable.
