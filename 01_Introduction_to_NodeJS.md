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

## Install NodeJS
Node works on many platforms, and there are many ways to install Node on each platform. This short precursory chapter covers best-practice setup of Node.js on macOS, Linux and Windows machines.
Often Node.js can be installed with a particular Operating System's official or unofficial package manager. For instance apt-get on Debian/Ubuntu, Brew on macOs, Chocolatey on Windows. It is strongly recommended against using this approach to install Node.

Node can also be installed directly from the Node.js website. [NodeJS download](https://nodejs.org/uk/download/)

The recommended way to install Node.js on **macOS and Linux** is by using a Node version manager - **nvm**. 

The way to install nvm is via the install script at https://github.com/nvm-sh/nvm/blob/v0.37.2/install.sh. If curl is installed (it usually is) a single command can be used to install and setup nvm:

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash```

If using zsh (e.g. on newer macOS releases) the bash part of the command can be replaced with zsh.

Alternatively the file can be downloaded and saved, and then easily executed like so:

```cat install.sh | bash```

Again bash can be replaced with zsh. To check that the installation was successful execute the following in the terminal:

```command -v nvm```

It should output nvm. If this fails on Linux, close and reopen the terminal (or SSH session) and try running the command again.

Now that we have a version manager, let's install the Node version:

```nvm install 14```

This will install the latest version of Node 14
We can verify that Node is installed, and which version, with the following command:

```node -v```

## Windows setup 
The recommended version manager for Windows is [nvs](https://github.com/jasongin/nvs) (Node Version Switcher).
The nvs version manager is actually cross-platform so it can be used on macOS and Linux but nvm is a lot more popular.

To install nvs on Windows go to the [release page](https://github.com/jasongin/nvs/releases) and download the MSI installer file of the latest release

Once downloaded, run the installer and follow the steps to install. After it is installed open a cmd.exe or powershell prompt and run the following:

```nvs add 14```
This should result in the latest version of Node 14 being installed.

To activate the newly installed version we also need to run the following command:

```nvs use 14```

We can verify that Node is installed, and which version, with the following command:

```node -v```