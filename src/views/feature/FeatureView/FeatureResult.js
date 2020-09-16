import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles, CardHeader
} from '@material-ui/core';

const log = {
  content: 'Sample log'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const FeatureResult = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Result"
      />
      <CardContent>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {log.content}
          </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          View Report
        </Button>
      </CardActions>
    </Card>
  );
};

FeatureResult.propTypes = {
  className: PropTypes.string
};

export default FeatureResult;
