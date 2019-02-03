## Selector playground

- keep `todomvc` app running
- open `03-selector-playground/spec.js`

![Selector playground](img/selector-playground.png)

+++

It can suggest a weird selector

![Default suggestion](img/default-suggestion.png)

+++

##Default Selector Priority:

👉 data-cy
👉 data-test
👉 data-testid
👉 id
👉 class
👉 tag
👉 attributes
👉 nth-child

+++
## Questions
- read [API Docs] (https://docs.cypress.io/api/cypress-api/selector-playground-api.html#Arguments)
- read [best-practices.html#Selecting-Elements](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)
- add test data ids to `todomvc/index.html` DOM markup
- use new selectors to write `cypress/integration/spec.js`

+++

![Selectors](img/selectors.png)
