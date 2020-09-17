import React, { useState } from 'react';
import {
  Grid,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import Editor from './Editor';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ConfigView = () => {
  const classes = useStyles();
//   const [config, setConfig] = React.useState([{
//     name: 'config_a.yml',
//     file: 'config_a\nbalabala'
//   },
// {
//   name: 'config_b.yml',
//   file: 'config_b\nbalabala'
// },
// {
//   name: 'config_c.yml',
//   file: 'config_c\nbalabala'
// }])

const [configA_name, setConfigA_name] = React.useState('config_a.yml');
const [configA_file, setConfigA_file] = React.useState('config_a\nbalabalabala');
const [configB_name, setConfigB_name] = React.useState('config_b.yml');
const [configB_file, setConfigB_file] = React.useState('config_b\nbalabalabala');
const [configC_name, setConfigC_name] = React.useState('config_c.yml');
const [configC_file, setConfigC_file] = React.useState('config_c\nbalabalabala');

  const [value, setValue] = React.useState();
  const [text, setText] = React.useState();
console.log(value);
  const handleValue = (num) => {
    setValue(num);
    console.log(value);
    console.log(num);
    if(num == 0){
      setText(configA_file);
      console.log(text);
    }
    if(num == 1){
      setText(configB_file);
    }
    if(num == 2){
      setText(configC_file);
    }
      
    console.log(text);
  }

  // const handleDelete = (num) => {
  //   config.splice(num,1);
  //   console.log(config);
  //   setConfig(config);
  // }
  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Container maxWidth="lg">
      <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={3}
          >
            <Profile configA={configA_name} handleA={setConfigA_name} configB={configB_name} handleB={setConfigB_name} configC={configC_name} handleC={setConfigC_name} handleValue={handleValue}/>
          </Grid>
          <Grid
            item
            lg={9}
            md={12}
            xl={12}
            xs={12}
          >
            <Editor text={text} setText={setText} value={value} setA={setConfigA_file} setB={setConfigB_file} setC={setConfigC_file}/>
          </Grid>
        </Grid>
      
        
      </Container>
    </Page>
  );
};

export default ConfigView;
