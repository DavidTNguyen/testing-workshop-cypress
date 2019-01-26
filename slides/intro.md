# David Nguyen,

- Lead Engineer, Target Corp
- David.T.Nguyen@Target.com
- [@vietroadie](https://twitter.com/vietroadie)

+++

## What we are going to cover

As long as ⏳ permits

- example TodoMVC (in ReactJS)
  * web app, data store, REST calls
- basic page load test
- selector playground
- resetting state
- XHR spying and stubbing, fixtures
- maybe CI and Cypress dashboard

+++

## Time 🕰

- total workshop duration 3 hours
- short breaks after 1 hour and 2 hours

+++

Please: if you have experience with Cypress.io, help others during the workshop 🙏

+++

## Requirements

You will need:

- `git` to clone this repo
- Node v6+ to install dependencies

```text
git clone <repo url>
cd testing-workshop-cypress
npm install
```

+++

## Repo organization

- `/redux-todomvc` is a web application we are going to test
- all tests are in `cypress/integration` folder
  - there are subfolders for exercises
    - `01-basic`
    - `02-adding-items`
    - `03-selector-playground`
    - `04-reset-state`
    - etc
- keep application `todomvc` running!

Note:
We are going to keep the app running, while switching from spec to spec for each part.

+++

## `redux-todomvc`

Let us look at the application.

- `cd redux-todomvc`
- `npm start`
- `open localhost:3000`

**important** keep application running through the entire workshop!

+++

It is a regular React TodoMVC application.

![TodoMVC](redux-todomvc/img/app.png)

+++

Look at XHR when using the app

![Network](todomvc/img/network.png)

+++

Look at `redux-todomvc/index.js`

![DOM](redux-todomvc/img/index.png)

+++

Look at `redux-todomvc/app.js`

![Application](redux-todomvc/img/app.png)

+++

## Questions

- what happens when you add a new Todo item?
- how does it get to the redux store?
- where does the redux store save it?
- what happens on start up?

Note:
The students should open **React & Redux** DevTools and look at **ACTIONS** that **DISPATCH** between the application and the store. Also the students should find the new items being saved in the store.

+++
