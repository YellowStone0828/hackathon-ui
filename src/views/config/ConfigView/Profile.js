import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Profile(props) {

  const classes = useStyles();
  const [open_common, setOpenCommon] = React.useState(false);
  const [open_personal, setOpenPersonal] = React.useState(false);
  const [open_projects, setOpenProjects] = React.useState(false);
  // const [config, setConfig] = React.useState();
  

  const handleClickCommon = () => {
    setOpenCommon(!open_common);
    // setConfig(this.props.config);
  };
  const handleClickProjects = () => {
    setOpenProjects(!open_projects);
  };
  const handleClickPersonal = () => {
    setOpenPersonal(!open_personal);
  };

  const handleAddCommon = () => {
    handleClickCommon();
    alert("clicked");
  }

  return (
    
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Config Profile
        </ListSubheader>
      }
      style={{ height: "100%"}}
      className={classes.root}
    >
      
      <ListItem button onClick={handleClickCommon}>
      {/* <ListItemIcon>
                    <IconButton aria-label="add" onClick={handleAddCommon}>
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </ListItemIcon> */}
        <ListItemText primary="Common" />
        {open_common ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open_common} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => {props.handleValue(0);}}>
            
            <ListItemText primary={props.configA} />
            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickProjects}>
        
        <ListItemText primary="Projects" />
        {open_projects ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open_projects} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => props.handleValue(1)}>
            
            <ListItemText primary={props.configB} />
            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickPersonal}>
        
        <ListItemText primary="Personal" />
        {open_personal ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      
      
      <Collapse in={open_personal} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => props.handleValue(2)}>
            
            <ListItemText primary={props.configC} />
            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
};

Profile.propTypes = {
  className: PropTypes.string
};

