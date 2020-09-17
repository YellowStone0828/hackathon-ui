import React from 'react'

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-gherkin'
import 'ace-builds/src-noconflict/mode-yaml'
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import{sendGetRequest} from 'src/utilities/RequestHelper';

// 增加需要自定义的代码提示
const defaultCompleters = [
    {
        name: 'Then',
        value: 'Then',
        // score: 100,
        // meta: 'keyword'
    },{name:'Feature',value:'Feature'},
    {name:'Scenario',value:'Scenario'},
    {name:'When',value:'When'},
    {name:'Given',value:'Given'},
    {name:'And',value:'And'},
    // {name:'Click', value:"Then (\\w+) click on (\\w+)"}
];

const DEFAULT_MODE = "gherkin";

class AceFeatureEditor extends React.Component {
    // completers                                       to set hints,ex:[{name:"",value:""}]
    // mode                                             "gherkin" or "yaml"
    //void onLoad(AceFeatureEditor editor)              onLoadEvent

    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode?this.props.mode:DEFAULT_MODE,
            readOnly: false,
            editorContent: props.value,
        }
        this.message = "";
        this.front = 15;

        if(this.props.onLoad)this.props.onLoad(this);
    }

    loadCompleters=(editor)=>{
        sendGetRequest("http://192.168.8.116:8202/feature/findHint",null,(data)=>{
            let completers = data.result;
            if(this.props.completers && this.props.completers.length>0){
                completers.push(this.props.completers);
            }
            if(completers.length===0){
                completers=defaultCompleters;
            }
            if(!editor.completers){
                editor.completers=[];
            }
            editor.completers.push({
                getCompletions: function (editors, session, pos, prefix, callback) {
                    callback(null, completers);
                }
            });

        },(data)=>{},(data)=>{});       
    }

    getContent=()=>{
        return this.state.editorContent;
    }
    setContent=(content)=>{
        this.setState({
            editorContent:content
        })
    }
    
    addLine=(line)=>{
        this.setState({
            editorContent: this.state.editorContent&&this.state.editorContent!==""?(this.state.editorContent+"\r\n"+line):line
        });
    }   
    
    handleContentChange=(value,event)=>{
        this.setState({editorContent:value});
    }

    render() {

        return (<AceEditor
            mode={this.state.mode}
            readOnly={this.state.readOnly}
            theme="github"
            name="app_code_editor"            
            fontSize={this.front}
            showPrintMargin
            showGutter
            highlightActiveLine  //突出活动线
            enableSnippets  //启用代码段
            value={this.state.editorContent}
            style={{ width: '100%', height: this.state.deskHeight, minHeight: 600 }}
            commands={[{    //命令是键绑定数组。
                name: 'saveFile', //键绑定的名称。
                bindKey: { win: 'Ctrl-S', mac: 'Command-S' }, //用于命令的组合键。
                exec: () => {
                    if (!this.state.changed) {
                        alert('文件未改动')
                    } else {
                        //保存文件操作
                    }
                }   //重新绑定命令的名称
            }]}
            setOptions={{
                enableBasicAutocompletion: true,   //启用基本自动完成功能
                enableLiveAutocompletion: true,   //启用实时自动完成功能 （比如：智能代码提示）
                enableSnippets: false,  //启用代码段
                showLineNumbers: true,
                tabSize: 4
            }}
            onLoad={this.loadCompleters}
            onChange={this.handleContentChange}
        />);
    }
}

export default AceFeatureEditor;