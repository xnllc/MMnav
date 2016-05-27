/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid
} from 'react-native';

import Toolbar from "../Toolbar";


class page2 extends Component {
  
  gotopage301(id){
    
    let vpag = page201;
    if(id === '201')  vpag = page201;
    if(id === '202')  vpag = page202;
    if(id === '203')  vpag = page203;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
  }
  

  
  render() {
    return (
      <View style={styles.container}>
      <Toolbar {...this.props} navigator={this.props.navigator} name="page2" back = {false}/>
        <Text style={styles.welcome}>
          page2 
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('201')}>
          go to page201
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page202
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page203
        </Text>
      </View>
    );
  }
}
class page201 extends Component {
  
    gotopage301(id){
    
    let vpag = page201;
    if(id === '201')  vpag = page201;
    if(id === '202')  vpag = page202;
    if(id === '203')  vpag = page203;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
  }
  

  
  
  render() {
    return (
      <View style={styles.container}>
      <Toolbar {...this.props} navigator={this.props.navigator} />
        <Text style={styles.welcome}>
          page201
        </Text>
        
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page202
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page203
        </Text>
        
      </View>
    );
  }
}
class page202 extends Component {
  
    gotopage301(id){
    
    let vpag = page201;
    if(id === '201')  vpag = page201;
    if(id === '202')  vpag = page202;
    if(id === '203')  vpag = page203;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
  }
  

  
  render() {
    return (
      <View style={styles.container}>
      <Toolbar {...this.props} navigator={this.props.navigator} />
        <Text style={styles.welcome}>
          page202
        </Text>
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('201')}>
          go to page201
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page202
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page203
        </Text>
      </View>
    );
  }
}
class page203 extends Component {
  
      gotopage301(id){
    
    let vpag = page201;
    if(id === '201')  vpag = page201;
    if(id === '202')  vpag = page202;
    if(id === '203')  vpag = page203;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
  }
  
  
  render() {
    return (
      <View style={styles.container}>
      <Toolbar {...this.props} navigator={this.props.navigator} />
        <Text style={styles.welcome}>
          page203
        </Text>
        
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('201')}>
          go to page201
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page202
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page203
        </Text>
      </View>
    );
  }
}

class page2nav extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'page2', component: page2 }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} Mna={this.props.navigator}  />
        } }
        />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('rn_qpl', () => rn_qpl);
module.exports = page2nav
