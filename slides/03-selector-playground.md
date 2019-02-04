## Selector playground

- keep `todomvc` app running
- open `03-selector-playground/spec.js`

![Selector playground](img/selector-playground.png)

+++

It can suggest a weird selector

![Default suggestion](img/default-suggestion.png)

+++

## Default Selector Priority

_fully customizable_

1. data-cy
2. data-test
3. data-testid
4. id
5. class
6. tag
7. attributes
8. nth-child

+++
## Questions
- read [API Docs] (https://docs.cypress.io/api/cypress-api/selector-playground-api.html#Arguments)
- read [best-practices.html#Selecting-Elements](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)
- add test data ids to `todomvc/index.html` DOM markup
- use new selectors to write `cypress/integration/spec.js`

+++

![Selectors](img/selectors.png)
