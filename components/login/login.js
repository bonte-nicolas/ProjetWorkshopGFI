import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Header, Container, Content, Text, Left, Right, Body, View, Button, Card, Item, Input} from 'native-base';

export default class Login extends Component {

  render(){
    return(
      <Container>
        <Header>
          <Left style={{flex: 1}}>
          </Left>
          <Body style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color:'white'}}>Login</Text>
          </Body>
          <Right style={{flex: 1}}>
          </Right>
        </Header>

        <Content style={{margin: 10}}>

            <Card style={{flex: 1, borderRadius: 10}}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',margin: '10%'}}>
                <Item>
                  <Input placeholder="Email" />
                </Item>
                <Item>
                    <Input secureTextEntry={true} placeholder="Password" />
                </Item>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{borderRadius: 10, margin: 20, marginBottom: -10}} onPress={() => this.props.navigation.navigate('Home')}>
                  <Text>Log in</Text>
                </Button>
              </View>
            </View>
            </Card>
        </Content>

      </Container>
    );
  }
}
AppRegistry.registerComponent('Login', () => Login);
