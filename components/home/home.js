import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Header, Container, Content, Text, Left, Right, Body, View, Button, Icon} from 'native-base';

export default class Home extends Component {

  render(){
    return(
      <Container>
        <Header>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color:'white'}}>Home</Text>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.navigate('')}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text>Welcome to the Home page</Text>

            </View>
          </View>
        </Content>

      </Container>
    );
  }
}
AppRegistry.registerComponent('Home', () => Home);
