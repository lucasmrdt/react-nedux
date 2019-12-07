# React-Nedux - The `n`ext react-r`edux`

![typescript](https://img.shields.io/badge/-typescript-blueviolet) [![version](https://img.shields.io/badge/version-beta-blue)](https://www.npmjs.com/package/react-nedux) [![size](https://img.shields.io/bundlephobia/minzip/react-nedux?color=green&label=size)](https://www.npmjs.com/package/react-nedux)

> The official React bindings for [nedux](https://github.com/lucasmrdt/nedux). Performant and flexible.

## 📦 Installation

```bash
npm install react-nedux --save
```

## 💻 Usage with examples

|     Name     |                                         Source                                         |                                              Codesandbox                                              |
| :----------: | :------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| ✅ Todo List |         [here](https://github.com/lucasmrdt/nedux/tree/master/examples/todos)          |      [here](https://codesandbox.io/s/nedux-todos-nm8j0?fontsize=14&hidenavigation=1&theme=dark)       |
|  🎛 Counter   | [here](https://github.com/lucasmrdt/nedux/tree/master/examples/counter-nedux-vs-redux) | [here](https://codesandbox.io/s/counter-nedux-vs-redux-n34b2?fontsize=14&hidenavigation=1&theme=dark) |

## 📜 Documentation

### `Import`

```javascript
// ES6
import { createStoreHook } from 'react-nedux';

// ES5
var createStoreHook = require('react-nedux').createStoreHook;
```

### `createStoreHook(store)`

Creates a Nedux hook with the same usage of [useState](https://reactjs.org/docs/hooks-reference.html#usestate).

| argument | required |                       type                        | description                                                                                                 |
| :------: | :------: | :-----------------------------------------------: | :---------------------------------------------------------------------------------------------------------- |
| `store`  |    ✅    | [Store](https://github.com/lucasmrdt/nedux#store) | The store created by [createStore](https://github.com/lucasmrdt/nedux#createstoreinitialstate-middlewares). |

### `useStore`

The `useStore` hook created by `createStoreHook` can be used as same as [useState](https://reactjs.org/docs/hooks-reference.html#usestate).

## 🎛 Basic Usage

> Feel free to test it [here](https://codesandbox.io/s/condescending-butterfly-u9lnf?fontsize=14&hidenavigation=1&theme=dark).

```tsx
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'nedux';
import { createStoreHook } from 'react-nedux';

type Store = {
  counter: number;
};

const store = createStore<Store>({
  counter: 0,
});

const useStore = createStoreHook<Store>(store);

const increment = () => store.set('counter', prev => prev + 1);
const decrement = () => store.set('counter', prev => prev - 1);

const App = () => {
  const [counter] = useStore('counter');

  return (
    <span>
      <p>you've clicked {counter} times</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </span>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
```

## 🙋🏼 Contributions

All [Pull Requests](https://github.com/lucasmrdt/react-nedux/compare?expand=1), [Issues](https://github.com/lucasmrdt/react-nedux/issues) and [Discussions](https://github.com/lucasmrdt/react-nedux/issues) are welcomed !
