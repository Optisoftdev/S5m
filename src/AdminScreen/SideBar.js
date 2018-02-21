import React, { Component } from 'react';
import {AppRegistry, StyleSheet, StatusBar} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Footer, FooterTab, Icon, Button, Text, List, ListItem, Left, Right, Body, Thumbnail } from 'native-base';

//import AdminScreen from "./index.js";
//import NewSchool from "./NewSchool.js";

const routes = ["AdminScreen", "NewSchool"];



export default class SideBar extends React.Component {

  render() {

//    const { navigate } = this.props.navigation;
    
    return (
      <Container style={styles.adminMenu}>        
        
                               
        <Content style={styles.menuContent}>

            <List>
            <ListItem itemHeader first>
              <Text> SCHOOLS </Text>
            </ListItem>
            <ListItem
            button
            //onPress={() => this.props.navigation.navigate('NewSchool')}>
            onPress={() => this.props.navigation.navigate("NewSchool")}>
              <Text> <Icon name="ios-add-circle-outline"> </Icon> Add School  </Text>
            </ListItem>
            <ListItem>
            <Text> <Icon name="ios-add-circle-outline"> </Icon> Add Subject  </Text>
            </ListItem>
            <ListItem last>
            
            
            </ListItem>
            <ListItem itemHeader>
              <Text> ADMINISTRATION </Text>
            </ListItem>
            <ListItem>
            <Text> <Icon name="ios-add-circle-outline"> </Icon> Add Admin  </Text>
            </ListItem>
            <ListItem>
            <Text> <Icon name="ios-add-circle-outline"> </Icon> Logout  </Text>
            </ListItem>
          </List>
          
        </Content>

      </Container>
    );
  }
}


const styles = StyleSheet.create({
    adminMenu: {
      backgroundColor: 'navy',
    },

    menuContent: {
      marginTop: 30,
    },
    
  });