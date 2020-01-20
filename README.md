# react-editor.js

![npm version](https://img.shields.io/npm/v/@stfy/react-editor.js.svg)

React wrapper component for [Editor.js](https://github.com/codex-team/editor.js)

## Install

```bash
npm install --save @stfy/react-editor.js

// or Yarn

yarn add @stfy/react-editor.js
```

## Usage

```jsx

import React, { Component } from 'react'
import Editor from '@stfy/react-editor.js'

const App => (
  <>
    <Editor
        autofocus
        holder="editorjs-container"
        excludeDefaultTools={['header']}
        onChange={() => console.log('Something is changing!!')}
        onData={(data) => console.log(data)}
        customTools={{
          header: CustomHeader
        }}
        onReady={() => console.log('Start!')}
        data={{
          "time" : 1554920381017,
          "blocks" : [
              {
                  "type" : "header",
                  "data" : {
                      "text" : "Hello Editor.js",
                      "level" : 2
                  }
              },
          ],
          "version" : "2.12.4"
        }}
      />
  </>
)

```

## Props

| Name                |    Type    |      Default      | Description                                   |
| :------------------ | :--------: | :---------------: | :-------------------------------------------- |
| autofocus           | `boolean`  |      `true`       | Set Caret to the Editor after initialisation  |
| holder              |  `string`  | `editorjs-holder` | Id of Element that should contain the Editor  |
| onChange            | `function` |      `null`       | onChange callback                             |
| onReady             | `function` |      `null`       | onReady callback                              |
| onData              | `function` |      `null`       | onData callback; used to access data after onChange is called |
| data                |  `object`  |      `null`       | Previously saved data that should be rendered |
| customTools         |  `object`  |      `null`       | Set custom tools config or overwrite existed  |
| excludeDefaultTools |  `array`   |      `null`       | Exclude default tool by tool name             |
| reinitOnPropsChange | `boolean`  |      `false`      | Re initialize the editor if the props change  |

## Default tools

| Name       |        Package         |
| :--------- | :--------------------: |
| header     |   `@editorjs/header`   |
| list       |    `@editorjs/list`    |
| inlineCode | `@editorjs/inlineCode` |
| image      |   `@editorjs/image`    |
| embed      |   `@editorjs/embed`    |
| quote      |   `@editorjs/quote`    |
| marker     |   `@editorjs/marker`   |
| code       |    `@editorjs/code`    |
| link       |    `@editorjs/link`    |
| delimiter  | `@editorjs/delimiter`  |
| raw        |    `@editorjs/raw`     |
| table      |   `@editorjs/table`    |
| warning    |  `@editorjs/warning`   |
| paragraph  | `@editorjs/paragraph`  |
| checklist  | `@editorjs/checklist`  |

## Contributing

Welcome to contribute.

## License

[MIT Licensed.](https://github.com/stfy/react-editor.js/blob/master/LICENSE) License 2019
