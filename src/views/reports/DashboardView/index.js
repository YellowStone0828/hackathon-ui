import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';

// import FeatureEditor from 'src/components/FeatureEditor';
import AceFeatureEditor from 'src/components/AceFeatureEditor';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  dashboardContainer:{
    minWidth:'100%'
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [editor,setEditor] = useState(null);  

  const getEditorHanldler=(handler)=>{
      setEditor(handler);
  }

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container className={classes.dashboardContainer}>
        <Grid
          container
          spacing={3}>
          <Grid item lg={2}><Button onClick={(event)=>{console.log(editor.getContent())}}>Print in console</Button></Grid>
          <Grid item lg={2}><Button onClick={(event)=>{editor.addLine("hello world.")}}>Add a line</Button></Grid>        
        <Grid item xs={12}>
        <AceFeatureEditor onLoad={getEditorHanldler}/>
        </Grid>          
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
