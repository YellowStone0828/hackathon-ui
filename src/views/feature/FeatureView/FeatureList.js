import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors, Table, TableHead, TableRow, TableCell, Tooltip, TableSortLabel, TableBody, Chip
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "../../reports/DashboardView/LatestOrders";
import {v4 as uuid} from "uuid";
import {sendGetRequest} from "../../../utilities/RequestHelper";

const data = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Test Feature 1.feature'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Test Feature 2.feature'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Test Feature 3.feature'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Test Feature 4.feature'
    },
    createdAt: 1554757200000,
    status: 'pending'
  }
  ,
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Test Feature 5.feature'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Test Feature 6.feature'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

const useStyles = makeStyles(() => ({
  root: {height:'100%'}
}));

const FeatureList = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders,setOrders] = useState(data);
  useEffect(()=>{
      sendGetRequest("http://192.168.8.116:8202/feature/findFeatureGroup?group=public",null,(data)=>{setOrders(data)});
  },[])
  const handleDeleteClick=(order)=>{
    let newOrders = [];
    for(let i=0;i<orders.length;i++){
      if(orders[i].id===order.id){
        continue;
      }
      newOrders.push(orders[i]);
    }
    
    setOrders(newOrders);
    sendGetRequest("http://192.168.8.116:8202/feature/delete?id="+order.id,null,()=>{});
  }
  const handleNameClick=(order)=>{
    rest.onNameClick(order);
  }
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Common
          </Button>
        )}
        title="Feature"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={100}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Feature
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell
                    onClick={()=>{handleNameClick(order)}}
                  >
                    {order.name}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="danger"
                      label="X"
                      size="small"
                      onClick={()=>{handleDeleteClick(order)}}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
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

FeatureList.propTypes = {
  className: PropTypes.string
};

export default FeatureList;
