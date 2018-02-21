import React from "react";
import {AppRegistry, StyleSheet, StatusBar} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Drawer, Container, Form, Item, Label, Input, Footer, FooterTab, Button, Text, H1, H3, Left, Body, Right, Header, Icon, Title, Content } from "native-base";
import SideBar from "./SideBar.js";

class AdminHome extends React.Component {
    constructor(props) { super(props) };

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    
//    const { navigate } = this.props.navigation;

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
        <Icon name='menu'/> 
       </Button>
        </Right>
      </Header>

<Container style={styles.AdminHome}>

    <Grid>
    <Row size={20} style={styles.topRow}>
      
    <Grid>

    <Col size={35} style={styles.leftTop}>
      <H1 style={styles.headtxt}
      onPress={() => this.props.navigation.navigate("NewSchool")}
      > 
       3 </H1>
      <Text style={styles.bodytxt}> Pending Activation </Text>    
    </Col>

    <Col size={65} style={styles.rightTop}>
    <H1 style={styles.headtxt}> 65 </H1>
    <Text style={styles.bodytxt}> Active Registrations </Text>
    </Col>

    </Grid>
    
    </Row>

    <Row size={30}></Row>


    <Row size={50} style={styles.bottomRow}>
      
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
//    backgroundColor: 'navy',
    },

    topRow: {      
      margin: 6,
    },

    leftTop: {
      backgroundColor: '#FF8C00',
      padding: 15,
    },

    rightTop: {
      backgroundColor: 'navy',
      padding: 15,
    },

    bottomRow: {
      backgroundColor: 'white',
    },
    bottomItem: {
      backgroundColor: '#00BFFF',
      margin: 5,
      padding: 7,
    },


    headtxt: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 32,
    },

    bodytxt: {
      color: 'white',
      fontSize: 16,
    },

});


