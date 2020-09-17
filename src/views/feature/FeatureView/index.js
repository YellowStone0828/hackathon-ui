import React, { useState } from 'react';
import {
  Container,
  Grid,
  AppBar,
  Button,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import FeatureList from './FeatureList';
import FeatureTemplate from './FeatureTemplate';
import FeatureResult from "./FeatureResult";
import AceFeatureEditor from 'src/components/AceFeatureEditor';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AntTabPanel from 'src/components/AntTabPanel';
import {sendGetRequest,sendPostRequest,convertRes2Blob} from 'src/utilities/RequestHelper';

import { AntTabs, AntTab } from 'src/components/AntTab';
import { format } from 'url';
import data from 'src/views/customer/CustomerListView/data';
import parseJson from 'parse-json';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    backgroundColor: '#dadada'
  },
  dashboardContainer: {
    minWidth: '100%'
  },
  tabroot: {
    flexGrow: 1,
  },
  tabpadding: {
    padding: theme.spacing(3),
  },
  tabdemo1: {
    backgroundColor: theme.palette.background.paper,
  },
  tabdemo2: {
    backgroundColor: '#2e1534',
  },
  btn:{
    zIndex:100
  }
}));


const Feature = () => {

  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [editorValue, setEditorValue]=useState("");
  const [anyValue, setAnyValue] = useState("");
  const [lstEditor, setLstEditor] = useState([]);
  const [runResult,setRunResult] = useState("Sample Result");

  const [saveBtnColor,setSaveBtnColor] = useState("black");

  const handleChange = (event, value) => {    
    setTabValue(value);
  }

  const handleTemplateItemSelected = (product)=>{ 
    lstEditor[tabValue].addLine(product.description);
  }

  const handleSaveClick=()=>{    
    const saveSuccessfully=(data)=>{
      setSaveBtnColor("green");
    }    
    const saveFailed=(data)=>{
      setSaveBtnColor("red");
    }
    sendPostRequest("http://192.168.8.116:8202/feature/add",{content:lstEditor[tabValue].getContent()},saveSuccessfully,saveFailed,saveFailed);    
  }

  const presentReport = (data)=>{
    if(data && data.length>0){      
      // console.log(data);
      convertRes2Blob(data);

    }else{

    }

  }

  const handleRunClick=()=>{        
    sendPostRequest("http://192.168.8.116:8202/cucumber/start",{content:lstEditor[tabValue].getContent()},presentReport,presentReport,presentReport);
  }

  return (
    <Page
      className={classes.root}
      title="Feature"
    >
      <Container className={classes.dashboardContainer}>
        <Grid
          container
          spacing={3}
          xs={12}
        >
          <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
            <FeatureList />
            {/* <Grid container spacing={1}>
              <Grid item lg={12} xs={12}><FeatureList /></Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}><FeatureTemplate onTemplateItemSelected={handleTemplateItemSelected}/></Grid> 
            </Grid> */}
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div style={{display:'block',position:'relative'}}><div style={{position:"absolute",top:"5px",right:"0px"}}>
              <Button style={{color:saveBtnColor}} onClick={handleSaveClick} className={classes.btn}>Save</Button>
              <Button onClick={handleRunClick} className={classes.btn}>Run</Button></div></div>
            <div className={classes.tabroot} description={anyValue}>
              <div className={classes.tabdemo1}>
                <AntTabs value={tabValue} onChange={handleChange} aria-label="ant example">
                  <AntTab label="feature 1.feature" />
                  <AntTab label="feature 2.feature" />
                  <AntTab label="feature 3.feature" />
                </AntTabs>  
                <AntTabPanel value={tabValue} index={0} description={editorValue}>
                  <AceFeatureEditor onLoad={(editor)=>{ lstEditor.push(editor); setLstEditor(lstEditor);}} mode="gherkin" value={editorValue}/>
                </AntTabPanel>
                <AntTabPanel value={tabValue} index={1} descript={editorValue}>
                  <AceFeatureEditor  onLoad={(editor)=>{ lstEditor.push(editor); setLstEditor(lstEditor);}} mode="gherkin" value={editorValue}/>
                </AntTabPanel>
                <AntTabPanel value={tabValue} index={2} descript={editorValue}>
                  <AceFeatureEditor  onLoad={(editor)=>{ lstEditor.push(editor); setLstEditor(lstEditor);}} mode="gherkin" value={editorValue}/>
                </AntTabPanel>
              </div>
            </div>            
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
            <FeatureTemplate onTemplateItemSelected={handleTemplateItemSelected}/>
            {/* <FeatureResult data={runResult}/> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Feature;
