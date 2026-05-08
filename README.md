# 📝 Simple Todos (Meteor 3 + Blaze)

[![Meteor Version](https://img.shields.io/badge/Meteor-3.4.1-red?logo=meteor)](https://meteor.com)
[![Frontend](https://img.shields.io/badge/Frontend-Blaze-orange)](#)
[![Bundler](https://img.shields.io/badge/Bundler-Rspack-yellow)](#)
[![CSS Framework](https://img.shields.io/badge/CSS-PicoCSS-blue)](#)
[![Deployed on Galaxy](https://img.shields.io/badge/Deployed-Meteor_Galaxy-success?logo=meteor)](https://kheai-todo.sandbox.galaxycloud.app/)

A reactive, full-stack To-Do application built to demonstrate the power and speed of **Meteor 3.4.1** using its native **Blaze** templating engine.

This project showcases modern Meteor features including `Rspack` for lightning-fast bundling, fully asynchronous database operations (`Async/Await`), user authentication, and Optimistic UI.

## 🚀 Live Demo

**[Play with the live app here!](https://kheai-todo.sandbox.galaxycloud.app/)** *(Deployed via Meteor Galaxy)*



## ✨ Features

* **Real-time Reactivity:** Changes in the database are instantly reflected in the UI without manual DOM manipulation.
* **Optimistic UI:** When a user checks or deletes a task, the UI updates instantly (zero latency) while the server processes the request securely in the background.
* **User Authentication:** Built-in secure login system using `accounts-password` and `bcrypt`.
* **Data Security:** Strict data-flow control using Meteor Publications/Subscriptions and secure Remote Procedure Calls (Meteor Methods).
* **State Management:** Client-side state filtering (hiding completed tasks) managed via `reactive-dict`.
* **Semantic Styling:** Zero-config, responsive design using lightweight [Pico.css](https://picocss.com/).
* **Mobile Ready:** Configured viewport meta tags for a native-app feel on mobile devices.



## 🛠 Tech Stack

* **Core Framework:** [Meteor 3.4.1](https://www.meteor.com/)
* **Frontend:** [Blaze](http://blazejs.org/) (Meteor's deeply integrated, Handlebars-like UI engine)
* **Database:** MongoDB (Embedded locally via MiniMongo; hosted via Galaxy Cloud in production)
* **Styling:** PicoCSS
* **Bundler:** Rspack (Default in Meteor 3 for incredibly fast Hot Module Replacement)



## 📂 Project Structure

```text
todos-app/
├── client/
│   ├── main.html          # HTML entry point (HEAD and BODY tags)
│   └── main.js            # Client JS entry point (imports UI and PicoCSS)
├── server/
│   └── main.js            # Server entry point (seeds DB, imports API)
├── imports/
│   ├── api/               # Server/Client shared logic
│   │   ├── TasksCollection.js  # MongoDB Collection definition
│   │   ├── TasksMethod.js      # Secure server actions (RPCs)
│   │   └── TasksPublication.js # Data visibility rules
│   └── ui/                # Frontend Blaze Components
│       ├── App.html / .js      # Main layout and logic
│       ├── Task.html / .js     # Individual task component
│       └── Login.html / .js    # Authentication form
├── private/               # Server-only configurations
│   └── settings.json      
└── package.json
```



## 💻 Running the App Locally

Want to run this project on your own machine? Follow these steps:

### 1. Install Meteor

If you don't have Meteor installed, open your terminal and run:

```bash
curl https://install.meteor.com/ | sh
```

*(Alternatively, if you use Node, run `npm install -g meteor`)*

### 2. Clone the Repository

```bash
git clone https://github.com/kheai/todos-app.git
cd todos-app
```

### 3. Install Dependencies

```bash
meteor npm install
```

### 4. Start the Application

```bash
meteor
```

### 5. View the App

Open your web browser and navigate to `http://localhost:3000`. 
*(Note: A default user `meteorite` with the password `password` is automatically generated on startup so you can test the app immediately).*



## 🧠 Key Meteor Concepts Demonstrated

If you are exploring the codebase, pay attention to these modern Meteor paradigms:

1. **`Async/Await` Everywhere:** Meteor 3 transitioned fully to modern JavaScript Promises. You will see `TasksCollection.insertAsync()` and `Meteor.callAsync()` instead of the older synchronous callbacks.
2. **Publications & Subscriptions:** Located in `imports/api/TasksPublication.js`. Notice how the server only publishes tasks where `userId: this.userId`, ensuring users cannot download other users' private data.
3. **Meteor Methods:** Located in `imports/api/TasksMethod.js`. These act as secure APIs. By importing them on *both* the client and server, Meteor achieves its famous "Optimistic UI" behavior.



