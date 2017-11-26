# react-json-pn

Create stateless React component from JSON templates

# Motivation

React project can not import components from untrusted place. It makes moving of UI templates to external configuration hard. The main idea of **react-json-pn** is to use ui templates in JSON form.


# Usage 

## Include

```js
import { createCompiler } from 'json-pn'
import { createComponentFactory } from 'react-json-pn'
```

## Create components factory
```js
const componentsFactory = createComponentFactory(createCompiler())
```
## Create component from JSON template

```js
const HelloWord = componentsFactory(['div', {}, 'Hello  Word'])
```

## Use component in your project

```jsx
render( <HelloWord />, document.getElementById('root_id'))
```
