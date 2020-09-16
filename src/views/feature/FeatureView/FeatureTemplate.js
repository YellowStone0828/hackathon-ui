import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    name: 'Web',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: 'Web related action'
  },
  {
    id: uuid(),
    name: 'Server',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: 'Server related action'
  },
  {
    id: uuid(),
    name: 'Business',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: 'Business related action'
  },
  {
    id: uuid(),
    name: 'Database',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: 'Database related action'
  },
  {
    id: uuid(),
    name: 'File',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: 'File related action'
  }
];

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const FeatureTemplate = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Template"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={product.updatedAt}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

FeatureTemplate.propTypes = {
  className: PropTypes.string
};

export default FeatureTemplate;
