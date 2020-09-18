import React, { useState } from 'react';
import {
  Container,
  Grid,
  AppBar,
  Button,
  makeStyles,
  IconButton
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
import { sendGetRequest, sendPostRequest, convertRes2Blob } from 'src/utilities/RequestHelper';

import { AntTabs, AntTab } from 'src/components/AntTab';
import { format } from 'url';
import data from 'src/views/customer/CustomerListView/data';
import parseJson from 'parse-json';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import FeatureTemplateItems from './FeatureTemplateItems';
import { withStyles } from '@material-ui/styles'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Notifications from './Notifications';
import SaveNotification from './SaveNotification';
import { minHeight } from '@material-ui/system';
import Save from '@material-ui/icons/Save';
import ArrowRight from '@material-ui/icons/ArrowRight';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: 'flex'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


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
    backgroundColor: '#dadada',
    display:'flex'
  },
  dashboardContainer: {
    minWidth: '100%',
    minHeight:'100%',
    margin:'auto 0',
    verticalAlign:'middle'
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
  btn: {
    zIndex: 100
  }
}));


const Feature = () => {

  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [editorValue, setEditorValue] = useState("");
  const [anyValue, setAnyValue] = useState("");
  const [lstEditor, setLstEditor] = useState([]);
  const [runResult, setRunResult] = useState("Sample Result");
  const [open, setOpen] = useState(false);
  const [checked, setChecked]=useState([]);

  const [saveNotificationOpen,setSaveNotificationOpen] = useState(false);
  const [runNotificationOpen,setRunNotificationOpen] = useState(false);

  const [tabName,setTabName] = useState("undefined.feature")
  
  const handleToggle = (value)=>{
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  const handleClose = (event, value) => {
    setOpen(false);
    setRunNotificationOpen(false);
    setSaveNotificationOpen(false);
  }

  const [saveBtnColor, setSaveBtnColor] = useState("black");

  const handleChange = (event, value) => {
    setTabValue(value);
  }

  const handleTemplateItemSelected = (product) => {
    lstEditor[tabValue].addLine(product.description);
  }
  const handleSaveClick = ()=>{
    setOpen(true);
    setSaveNotificationOpen(true);
  }

  const handleDialogSaveClick = () => {
    const saveSuccessfully = (data) => {
      setSaveBtnColor("green");
    }
    const saveFailed = (data) => {
      setSaveBtnColor("red");
    }
    sendPostRequest("http://127.0.0.1:8202/feature/add", { content: lstEditor[tabValue].getContent(),name:tabName, group:"public" }, saveSuccessfully, saveFailed, saveFailed);
    setOpen(false);
    setSaveNotificationOpen(false);
  }

  const presentReport = (data) => {
    if (data && data.length > 0) {
      // console.log(data);
      convertRes2Blob(data);

    } else {
    }

  }

  const handleRunClick = () => {
    setOpen(true);    
    setRunNotificationOpen(true);
  }
  const handleDialogRunClick=()=>{
    sendPostRequest("http://127.0.0.1:8202/cucumber/start", { content: lstEditor[tabValue].getContent(),name:tabName,group:"public"}, presentReport, presentReport, presentReport);
    setOpen(false);
    setRunNotificationOpen(false);
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
        >
          <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
            <FeatureList  onNameClick={(order)=>{lstEditor[tabValue].setContent(order.content); setTabName(order.name+".feature");}}/>
            {/* <Grid container spacing={1}>
              <Grid item lg={12} xs={12}><FeatureList /></Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}><FeatureTemplate onTemplateItemSelected={handleTemplateItemSelected}/></Grid> 
            </Grid> */}
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div style={{ display: 'block', position: 'relative' }}><div style={{ position: "absolute", top: "0px", right: "0px" }}>
              <IconButton style={{ color: saveBtnColor }} onClick={handleSaveClick} className={classes.btn} color="primary">
                <Save style={{height:'30px',width:'30px'}}  color="primary" fontSize="small"/>
                </IconButton>
              <IconButton onClick={handleRunClick} className={classes.btn} 
              ><ArrowRight fontSize="large" style={{height:'30px',width:'30px',color:'#04d004e0'}}/>
              </IconButton></div></div>
            <div className={classes.tabroot} description={anyValue}>
              <div className={classes.tabdemo1}>
                <AntTabs value={tabValue} onChange={handleChange} aria-label="ant example">
                  <AntTab label={tabName} />              
                </AntTabs>
                <AntTabPanel value={tabValue} index={0} description={editorValue}>
                  <AceFeatureEditor onLoad={(editor) => { lstEditor.push(editor); setLstEditor(lstEditor); }} mode="gherkin" value={editorValue} />
                </AntTabPanel>
               
              </div>
            </div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Modal title
             </DialogTitle>
              <DialogContent dividers>
                <Notifications onDialogRunClick={handleDialogRunClick} style={{display:runNotificationOpen?"block":"none"}}/>
                <SaveNotification style={{display:saveNotificationOpen?"block":"none"}} onDialogSaveClick={handleDialogSaveClick}/>
              </DialogContent>
            </Dialog>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={12}s
          >
            <FeatureTemplate onTemplateItemSelected={handleTemplateItemSelected} />
            {/* <FeatureResult data={runResult}/> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Feature;
