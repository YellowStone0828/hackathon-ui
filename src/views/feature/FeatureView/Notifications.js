import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();
  const handleDialogRunClick=(event)=>{
    rest.onDialogRunClick();
  }
  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        {/* <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        /> */}
        {/* <Divider /> */}
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Environments
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Common"
              />
              <FormControlLabel
                control={(
                  <Checkbox  />
                )}
                label="ProjectA"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="ProjectB"
              />
              
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Configurations
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox  />
                )}
                label="Common.yml"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="ProjectA.yml"
              />
              <FormControlLabel
                control={(
                  <Checkbox  />
                )}
                label="ProjectB.yml"
              /> <FormControlLabel
              control={(
                <Checkbox  defaultChecked/>
              )}
              label="Lutos.yml"
            />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleDialogRunClick}
          >
            Run
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
