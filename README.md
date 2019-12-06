# React-Nedux - The `n`ext react-r`edux`

![typescript](https://img.shields.io/badge/-typescript-blueviolet) [![version](https://img.shields.io/badge/version-beta-blue)](https://www.npmjs.com/package/react-nedux) [![size](https://img.shields.io/bundlephobia/minzip/react-nedux?color=green&label=size)](https://www.npmjs.com/package/react-nedux)

> The official React bindings for [nedux](https://github.com/lucasmrdt/nedux). Performant and flexible.

## 📦 Installation

```bash
npm install nedux react-nedux --save
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

## 🙋🏼 Contributions

All [Pull Requests](https://github.com/lucasmrdt/react-nedux/compare?expand=1), [Issues](https://github.com/lucasmrdt/react-nedux/issues) and [Discussions](https://github.com/lucasmrdt/react-nedux/issues) are welcomed !
