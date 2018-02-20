import React, { Component } from 'react';
import {StyleSheet, Image, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Footer, FooterTab, Icon, Button, Text, List, ListItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LoginForm extends Component {
  render() {
    return (
      <Container style={styles.loginscreen}>        
        
        
            <ImageBackground source={require('./bg.png')} style={styles.backgroundImage}> 
            
            <Content>

            <Form style={styles.signinform}>

            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item> 

            
            <Button block style={styles.signinbtn}>
            <Text>Signin</Text>
            </Button>
                      

          </Form>
          
          </Content>

            </ImageBackground>

          
        

        <Footer>
          <FooterTab>
            <Button active>
              <Text> Forgot Password? </Text>
            </Button>
            <Button>
            <Text> Signup </Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
    signinbtn: {
      marginTop: 15,
    },
    loginscreen: {
        justifyContent: 'center',
      },

    logo: {
        marginTop: 15,
        marginBottom: 10,
        width: 120,
        height: 120,
    },
    signinform: {
        margin: 15,
        marginTop: 200,
        backgroundColor: 'transparent',
    },

    backgroundImage: {
        flex: 1,
      }
    
  });