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
import {
  List as ListIcon
} from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FeatureTemplateItems from './FeatureTemplateItems';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
  const [open,setOpen] = useState(false);
  const handleClose = (event,value)=>{
    setOpen(false);
  }
  const onItemClick=(event)=>{
    setOpen(true);
  }

  const handleTempleteItemSelected=(product)=>{    
    rest.onTemplateItemSelected(product);
    setOpen(false);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title={(<div style={{fontSize:"large",display:"flex"}}><ListIcon/><span>Templates</span></div>)}
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
            onClick={onItemClick}
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
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <FeatureTemplateItems onTemplateItemSelected={handleTempleteItemSelected}/>
        </DialogContent>        
      </Dialog>
    </Card>
  );
};

FeatureTemplate.propTypes = {
  className: PropTypes.string
};

export default FeatureTemplate;
