import React, { Component } from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Drawer, Container, Form, Item, Label, Input, Footer, FooterTab, Button, Text, H1, H3, Left, Body, Right, Header, Icon, Title, Content } from 'native-base';

import SideBar from './SideBar.js';

import AdminScreen from "./AdminHome.js";
import NewSchool from "./NewSchool.js";


const HomeScreenRouter = DrawerNavigator(
  {
    AdminHome: { screen: AdminScreen },
    NewSchool: { screen: NewSchool },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);


export default HomeScreenRouter;
