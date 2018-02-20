import React, { Component } from 'react';
import {StyleSheet, Image, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Footer, FooterTab, Icon, Button, Text, List, ListItem, Left, Right, Body, Thumbnail } from 'native-base';

export default class SideBar extends Component {
  render() {
    return (
      <Container style={styles.adminMenu}>        
        
                               
        <Content style={styles.menuContent}>

            <List>
            <ListItem itemHeader first>
              <Text> SCHOOLS </Text>
            </ListItem>
            <ListItem >
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