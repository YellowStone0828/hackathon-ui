import React, { Component } from 'react';
// // @import 'codemirror/lib/codemirror.css';
// // @import 'codemirror/theme/material.css';
// import { withStyles } from '@material-ui/styles';

// import { UnControlled as CodeMirror } from 'react-codemirror2';
// import "codemirror/lib/codemirror.css"
// import "codemirror/theme/material.css"
// require('codemirror/mode/xml/xml');
// require('codemirror/mode/gherkin/gherkin');
// require('codemirror/mode/javascript/javascript');


// const styles = {
//     codemirrorFeatureEditor: {
//         height: '100%',
//         width: '100%'
//     }
// }


// class FeatureEditor extends Component {

//     constructor(props) {
//         super(props);
//         this.code = "Feature";
//     }

//     render() {
//         return (
//             <CodeMirror
//                 className={this.props.classes.codemirrorFeatureEditor}
//                 value={this.code}
//                 options={{
//                     mode: 'gherkin',
//                     theme: 'material',
//                     lineWrapping: true,
//                     smartIndent: true,
//                     lineNumbers: true,
//                     extraKeys: {
//                         'Ctrl-Space': 'autocomplete'
//                     }
//                 }
//                 }
//     onChange = {(editor, data, value) => {
// }}
// />);
//     }

// }

// export default withStyles(styles)(FeatureEditor);

// import { Controlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/gherkin/gherkin';
// import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/hint/javascript-hint';
// import 'codemirror/addon/hint/show-hint.css';
// import 'codemirror/addon/hint/anyword-hint';
// import 'codemirror/keymap/sublime';
// import 'codemirror/addon/edit/closebrackets';
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/fold/foldcode';
// import 'codemirror/addon/fold/foldgutter';
// import 'codemirror/addon/fold/brace-fold';
// import 'codemirror/addon/fold/comment-fold';
// import 'codemirror/addon/fold/foldgutter.css';

// function FeatureEditor() {

//     const [code, setCode] = React.useState('// my code goes here');

//     return (

//         <CodeMirrorEditor

//             value={code}

//             options={{

//                 mode: 'gherkin',

//                 lineWrapping: true,

//                 smartIndent: true,

//                 lineNumbers: true,

//                 foldGutter: true,

//                 gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],

//                 autoCloseTags: true,

//                 keyMap: 'sublime',

//                 matchBrackets: true,

//                 autoCloseBrackets: true,

//                 extraKeys: {

//                     'Ctrl-Space': 'autocomplete'
//                 }

//             }}

//             onBeforeChange={(editor, data, value) => {

//                 setCode(value);

//             }}

//             onChange={(editor, data, value) => { }}
            

//         />

//     );

// } export default FeatureEditor;
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/solarized.css';
// 代码模式，clike是包含java,c++等模式的
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/css/css';
//ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint.js';
//代码高亮
import 'codemirror/addon/selection/active-line';
//折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
// import 'codemirror/addon/edit/closebrackets';
// import 'codemirror/addon/edit/matchBrackets';
import 'codemirror/mode/gherkin/gherkin';

export default class Index extends Component {
  constructor() {
    super();
    this.instance = null;
  }
  state = {
    data:'',
  }
  render(){
    const {data}=this.state
    let that=this
    return(
     <CodeMirror
          editorDidMount={editor => { this.instance = editor }}
          value={data}
          options={{
          mode: {name:'gherkin'},
          theme: 'solarized dark',
          autofocus:true,//自动获取焦点
          styleActiveLine:true,//光标代码高亮
          lineNumbers: true, //显示行号
          smartIndent:true,  //自动缩进
          //start-设置支持代码折叠
          lineWrapping:true,
          foldGutter:true,
          gutters:['CodeMirror-linenumbers','CodeMirror-foldgutter'],//end
          extraKeys:{
              "Ctrl":"autocomplete",
              "Ctrl-S": function (editor) {
                      that.codeSave(editor)
                    },
              "Ctrl-Z":function (editor) {
                      editor.undo();
                    },//undo
              "F8":function (editor) {
                      editor.redo();
                    },//Redo
                  },
              matchBrackets: true,  //括号匹配，光标旁边的括号都高亮显示
              autoCloseBrackets: true //键入时将自动关闭()[]{}''""
                }}
                // onChange={this.codeOnChange}

                // 在失去焦点的时候触发，这个时候放数据最好
                // onBlur={this.codeOnBlur}

            // // 这个必须加上，否则在一些情况下，第二次打开就会有问题
            // //     onBeforeChange={(editor, data, value) => {
            // //       console.log("onBeforeChange fresh")
            // //       console.log(JSON.stringify(data));
            // //     }}
            //     /* HERE: pick out only the value. and might as well get name. */
            />  )
}}