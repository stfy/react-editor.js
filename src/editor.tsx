import React from 'react';
import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs';

export interface WrapperProps extends EditorConfig {
  reinitOnPropsChange?: boolean;
  onData?: (data: OutputData) => void;
}

export class EditorWrapper extends React.PureComponent<WrapperProps> {
  /**
   * Editor instance
   */
  public editor: EditorJS;

  
  /**
   * Node to append ref
   */
  private node = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.initEditor();
  }

  async componentDidUpdate() {
    const { reinitOnPropsChange } = this.props;

    if (reinitOnPropsChange) {
      const removed = await this.removeEditor();

      if (removed) {
        this.initEditor();
      }
    }
  }

  componentWillUnmount() {
    this.removeEditor();
  }

  async initEditor() {
    const { holder, ...config } = this.props;
    const { handleChange } = this;

    const holderNode = !holder ? this.getHolderNode() : holder;

    this.editor = new EditorJS({
      ...config,
      holder: holderNode,
      onChange: handleChange,
    });
  }

  handleChange = async () => {
    const { onChange, onData } = this.props;

    if (onChange && typeof onChange === 'function') {
      onChange();
    }

    if (onData && typeof onData === 'function') {
      this.emitDataEvent(onData);
    }
  };

  emitDataEvent = async (cb: (data: OutputData) => void) => {
    try {
       setTimeout(async () => {
        const output = await this.editor.save();
        cb(output);
      }, 50);
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error('Saving failed: ', error);
    }
  };

  removeEditor = async () => {
    if (this.editor) {
      try {
        await this.editor.isReady;

        this.editor.destroy();
        delete this.editor;

        return true;
      } catch (err) {
        // tslint:disable-next-line: no-console
        console.error(err);
        return false;
      }
    }

    return false;
  };

  getHolderNode = () => {
    const holder = this.node.current;

    if (!holder) {
      throw new Error('No node to append Editor.js');
    }

    return holder;
  };

  render() {
    if (!this.props.holder) {
      return <div ref={this.node} />;
    }

    return null;
  }
}


export default EditorWrapper