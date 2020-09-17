import React from 'react';
import {
  Grid,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';

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

  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Container maxWidth="lg">
      <Grid
            item
            lg={2}
            sm={3}
            xl={2}
            xs={3}
          >
            <Profile />
          </Grid>
        
      </Container>
    </Page>
  );
};

export default ConfigView;
