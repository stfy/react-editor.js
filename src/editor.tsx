import React from 'react';
import EditorJS,  { EditorConfig, OutputData } from '@editorjs/editorjs'

const noop = () => {};

interface WrapperProps extends EditorConfig {
  reinitOnPropsChange?: boolean,
  onData?: (data : OutputData) => void;
}

class EditorWrapper extends React.PureComponent<WrapperProps> {
  /**
   * Node to append ref
   */
  node = React.createRef<HTMLDivElement>();

  /**
   * Editor instance
   */
  editor: EditorJS

  componentDidMount(){
    const { holder , ...config } = this.props

    const holderNode = holder !== null ? holder : this.getHolderNode();

    this.editor = new EditorJS({
      holder: holderNode,
      ...config
    })
  }

  async componentDidUpdate(){
    const { reinitOnPropsChange } = this.props;


    if(reinitOnPropsChange){
      const removed = await this.removeEditor();
      if(removed){
        this.initEditor()
      }
    }
  }

  componentWillUnmount(){
    this.removeEditor()
  }


  async initEditor() {
    const { holder, onChange, ...config } = this.props

    const holderNode = holder !== null ? holder : this.getHolderNode();

    this.editor = new EditorJS({
      holder: holderNode,
      ...config,
      
      onChange: () => {console.log('A?')}
    })
  }

  handleChange = async () => {
    console.log('handle change')
    const onChange = this.props.onChange || noop;
    const onData = this.props.onData || noop
    
    onChange();

    try {
      const output = await this.editor.save()
      console.log(output)
      onData(output)

    } catch (error) {
      console.error('Saving failed: ', error) 
    }
  }


  async removeEditor(): Promise<boolean> {
    if (this.editor) {
      try {
        await this.editor.isReady
      
        this.editor.destroy()
        delete this.editor;

        return true;
      } catch(err){
        console.error(err);
        return false
      }
    }

    return false;
  }

  getHolderNode = () =>{
    const holder = this.node.current;

    if(!holder){
      throw('No node to append Editor.js');
    }

    return holder
  }

  render(){
    if(this.props.holder !== null){
      return null
    }

    return <div ref={this.node}/>
  }
}



export default EditorWrapper;