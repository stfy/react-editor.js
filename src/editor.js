import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditorJS from '@editorjs/editorjs';

import commonTools from './common-tools';

class Editor extends Component {
  constructor(props) {
    super(props);

    this._holderId = props.holderId;
    this._tools = this._initTools(props.tools, props.excludeTools);

    this._onChange = props.onChange;
    this._onReady = props.onReady;

    this._initialData = props.data;
    this._autofocus = props.autofocus;

    this._el = React.createRef();
  }

  componentDidMount() {
    this._initEditor();
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  _initEditor = () => {
    this.editor = new EditorJS({
      holderId: this._holderId,
      tools: this._tools,

      onChange: this._handleChange,
      onReady: this._handleReady,
      data: this._initialData,
      autofocus: this._autofocus,
    });
  };

  _handleChange = async () => {
    const data = await this.editor.save();
    this._onChange(data);
  };

  _handleReady = () => {
    this._onReady();
  };

  _initTools = (tools, excludeTools) => {
    let toolsList = tools.length === 0 ? commonTools : tools;

    if (excludeTools.length !== 0) {
      toolsList = Object.keys(toolsList)
        .filter(tool => !excludeTools.includes(tool))
        .map(toolKey => ({ [toolKey]: toolsList[toolKey] }));
    }

    return toolsList.reduce((acc, current) => ({ ...acc, ...current }), {});
  };

  render() {
    return React.createElement('div', {
      id: this._holderId,
      ref: this._el,
    });
  }
}

Editor.defaultProps = {
  holderId: 'editorjs-holder',
  tools: [],
  excludeTools: [],
  onChange: () => {},
  onReady: () => {},
  data: {},
  autofocus: true,
};
// eslint-disable-next react/forbid-prop-types
Editor.propTypes = {
  holderId: PropTypes.string,
  tools: PropTypes.arrayOf(
    PropTypes.oneOfType(PropTypes.object, PropTypes.string),
  ),
  excludeTools: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onReady: PropTypes.func,
  data: PropTypes.shape,
  autofocus: PropTypes.bool,
};

export default Editor;
