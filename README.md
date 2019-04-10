# react-editor.js

React wrapper component for [Editor.js](https://github.com/codex-team/editor.js)

## Install

```bash
npm install --save react-editor.js

# or Yarn

yarn add react-editor.js
```

## Usage


```jsx

import React, { Component } from 'react'
import Editor from 'react-editor.js'

const App => (
  <>
    <Editor 
        autofocus
        holderId="editorjs-container"
        excludeTools={['header']}
        onChange={(data) => console.log(data)}
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

