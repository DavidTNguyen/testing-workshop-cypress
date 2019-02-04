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

Set up in your Dev Environment (VS Code) - _Preferences > Settings > User Settings_ and add the json.schemas property.

```json
{
  "json.schemas": [
    {
      "fileMatch": [
        "cypress.json"
      ],
      "url": "https://on.cypress.io/cypress.schema.json"
    }
  ]
}
```

+++

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

- `/react-todomvc` is a web application we are going to test
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

## `react-todomvc`

Let us look at the application.

- `cd react-todomvc`
- `npm run start`
- `open localhost:3000`

**important** keep application running through the entire workshop!

+++

It is a React TodoMVC application.

![TodoMVC](img/app.gif)

+++

Look at XHR when using the app

![Network](todomvc/img/network.png)

+++

Look at `react-todomvc/index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import './styles.css'

ReactDOM.render(<TodoApp />, document.getElementById('app'))
```

+++

## Questions

- what happens when you add a new Todo item?
- how does it get to the database?
- what happens on start up?

Note:

The students should open ** React ** DevTools and look at **Component Structure** of the application and the network traffic. Also the students should find the new items being saved in the database.

+++
