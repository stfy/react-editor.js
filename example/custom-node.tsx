import React from 'react';
import EditorJS from '../src/editor';

export default () => {

  return (
    <>
      <div id="editor-container"></div>

      <EditorJS holder="editor-container" onData={(data) => {console.log(data)}}/>
    </>
  );
};
