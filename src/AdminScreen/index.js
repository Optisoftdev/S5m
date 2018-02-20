import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Drawer, Container, Form, Item, Label, Input, Footer, FooterTab, Button, Text, Left, Body, Right, Header, Icon, Title, Content } from 'native-base';
import SideBar from './SideBar.js';


export default class AdminHome extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (  

      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar/>}
  //      content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>

      <Header>
        <Right>
        <Button transparent
              onPress={()=>this.openDrawer()} style={styles.Headerbtn}>
        <Icon name='menu' /> 
       </Button>
        </Right>
      </Header>

<Container style={styles.AdminHome}>

    <Grid>
    <Row size={1} style={styles.topRow}></Row>
    <Row size={1}></Row>


    <Row size={2} style={styles.bottomRow}>
      
    <Grid>
    <Col>
        <Row style={styles.bottomItem}>
            <Text>1</Text>
        </Row>
        <Row style={styles.bottomItem}>
            <Text>2</Text>
        </Row>
    </Col>
    <Col>
        <Row style={styles.bottomItem}> 
            <Text>3</Text>
        </Row>
        <Row style={styles.bottomItem}>
            <Text>4</Text>
        </Row>
    </Col>
</Grid>

    </Row>


</Grid>

</Container>   

      </Drawer>



    );
  }
}

const styles = StyleSheet.create({
  AdminHome: {
    backgroundColor: 'navy',
    },

    topRow: {
      backgroundColor: 'yellowgreen',
    },
    bottomRow: {
      backgroundColor: 'white',
    },
    bottomItem: {
      backgroundColor: '#00BFFF',
      margin: 5,
      padding: 7,
    }
});