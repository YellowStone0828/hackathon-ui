import React from 'react'
import PropTypes from 'prop-types';
import { render } from "react-dom";
import AceEditor from "react-ace";
import {
Typography,
Button,
Box,
Grid,
CardHeader} 
from '@material-ui/core';
 
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Editor(props) {
  // console.log ("start",props.text)
  const [saveText,setSaveText] = React.useState();

    const onChange=(newValue) =>{
        console.log("change", newValue);
        console.log(props.text);
        // debugger
        if(props.value == 0){
          localStorage.setItem("configAcontent",newValue);
        }
        if(props.value == 1){
          localStorage.setItem("configBcontent",newValue);
        }
        if(props.value == 2){
          localStorage.setItem("configCcontent",newValue);
        }
        
        
        //setSaveText(newValue);
      }

      const save = () => {
        // props.config[props.value].file = saveText;
        console.log(props.value)
        if(props.value == 0){
          props.setA(localStorage.getItem("configAcontent"));
          props.setText(localStorage.getItem("configAcontent"));
        }
        if(props.value == 1){
          props.setB(localStorage.getItem("configBcontent"));
          props.setText(localStorage.getItem("configBcontent"));
        }

        if(props.value == 2){
          props.setC(localStorage.getItem("configCcontent"));
          props.setText(localStorage.getItem("configCcontent"));
        }
        
      }

  return (
    <div>
          <Grid
            item
            
          >
              <CardHeader
        action={(
            <Button
            color="primary"
            variant="contained"
            onClick={save}
          >
            Save
          </Button>
        )}
        title="Config Editor"
      />
        </Grid>
        
  <AceEditor
    mode="yaml"
    value={props.text}
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    style={{ width: "100%"}}
  />
  </div>
//   document.getElementById("example")
    
  );
};

Editor.propTypes = {
  className: PropTypes.string
};

