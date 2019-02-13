# Next.js 8.0.1 – babel not compiling properly

A simple test repo to reproduce issue [#6273](https://github.com/zeit/next.js/issues/6273) in Next.js `8.0.1`.

`npm run dev`/`yarn dev` will start a Next.js application with a custom express server.
Accessing [http://localhost:3000](http://localhost:3000) will result in a 500 Internal Server Error and the following stack trace:

```
(...)next8-babel-issue/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js:1
(function (exports, require, module, __filename, __dirname) { import _Symbol$iterator from "../../core-js/symbol/iterator";
                                                                     ^^^^^^^^^^^^^^^^

SyntaxError: Unexpected identifier
(...)
```

Changing `presets: ['next/babel']` to `presets: [['next/babel', { 'transform-runtime': { useESModules: false } }]]` solves the issue.
