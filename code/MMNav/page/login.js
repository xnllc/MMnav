/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator
} from 'react-native';

import Toolbar from "../Toolbar";

var {height, width} = Dimensions.get('window');

class pagelogin extends Component {
    
    back(){
        // this.navigator.pop();
    }
    login(){
        
    }
    
  render() {
      
    return (
      <View style={styles.container}>
        {/*<Toolbar {...this.props} navigator={this.props.navigator} />*/}
        <Text style={styles.welcome}>
         login
        </Text>
        
        
        <View style = {styles.viewbtn}>
            <Text style = {{flex:1,textAlign: 'center',}} 
                  // onPress={this.back.bind(this)}
                  onPress={this.props.onBack}
            >取消</Text>
            <Text style = {{flex:1,textAlign: 'center',}}
                  onPress={this.props.onLgoin}
                  // onPress={this.login.bind(this)}
            >登录</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 viewbtn: {
    flexDirection: 'row',
    height :40,
    margin:50,
    // backgroundColor:'#8f8f8f'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('rn_qpl', () => rn_qpl);
module.exports = pagelogin
