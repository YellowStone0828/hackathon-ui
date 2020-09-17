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

const SaveNotification = ({ className, ...rest }) => {
  const classes = useStyles();
  const handleDialogSaveClick=(event)=>{
    rest.onDialogSaveClick();
  }
  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>    
        <CardContent style={{width:'300px'}}>
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
                Group
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
                label="Private"
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
            onClick={handleDialogSaveClick}
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};

SaveNotification.propTypes = {
  className: PropTypes.string
};

export default SaveNotification;
