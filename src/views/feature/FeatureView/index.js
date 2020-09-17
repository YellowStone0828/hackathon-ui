import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import FeatureList from './FeatureList';
import FeatureTemplate from './FeatureTemplate';
import FeatureResult from "./FeatureResult";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Feature = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Feature"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          xs={6}
        >
          <Grid
            item
            lg={6}
            md={6}
            xs={3}
          >
            <FeatureList />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={3}
          >
            <FeatureResult />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          xs={6}
        >
          <Grid
            item
            lg={6}
            md={6}
            xs={3}
          >
            <FeatureTemplate />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Feature;
