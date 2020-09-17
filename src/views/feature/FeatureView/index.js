import React, { useState } from 'react';
import {
  Container,
  Grid,
  AppBar,
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

import { AntTabs, AntTab } from 'src/components/AntTab';

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
}));


const Feature = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [editorValue, setEditorValue]=useState("");
  const handleChange = (event, value) => {    
    setTabValue(value);
  }

  const handleTemplateItemSelected = (product)=>{      
    setEditorValue(product.description);  
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
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}><FeatureList /></Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}><FeatureTemplate onTemplateItemSelected={handleTemplateItemSelected}/></Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className={classes.tabroot}>
              <div className={classes.tabdemo1}>
                <AntTabs value={tabValue} onChange={handleChange} aria-label="ant example">
                  <AntTab label="feature 1.feature" />
                  <AntTab label="feature 2.feature" />
                  <AntTab label="feature 3.feature" />
                </AntTabs>
                <AntTabPanel value={tabValue} index={0} descript={editorValue}>
                  <AceFeatureEditor mode="gherkin" value={editorValue}/>
                </AntTabPanel>
                <AntTabPanel value={tabValue} index={1} descript={editorValue}>
                  <AceFeatureEditor mode="gherkin" value={editorValue}/>
                </AntTabPanel>
                <AntTabPanel value={tabValue} index={2} descript={editorValue}>
                  <AceFeatureEditor mode="gherkin" value={editorValue}/>
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
            <FeatureResult />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Feature;
