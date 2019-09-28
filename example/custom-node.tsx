import React from 'react';
import EditorJS from '../src/editor';

export const Example = () => {
  const [editorData, setEditorData] = React.useState(null);
  const component = React.useRef(null);

  React.useEffect(() => {
    console.log(component.current.editor);
  });

  return (
    <>
      <div id="editor-container" />

      <EditorJS
        holder="editor-container"
        data={editorData}
        onData={e => setEditorData(e)}
      />
    </>
  );
};
