import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../dist/react-editorjs';

const el = document.getElementById('app');

const wrapperStyle = {
  width: '1280px',
  backgroundColor: '#efefef',
  padding: '20px',
  border: '1px solid #e0e0e0',
};

ReactDOM.render(
  <div style={wrapperStyle}>
    <Editor excludeDefaultTools={['checklist']} />
  </div>,
  el,
);
