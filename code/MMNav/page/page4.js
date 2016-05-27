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
    
    let vpag = page401;
    if(id === '201')  vpag = page401;
    if(id === '202')  vpag = page402;
    if(id === '203')  vpag = page403;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
  }
  

  
  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.welcome}>
          page4 
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('201')}>
          go to page401
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page402
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page403
        </Text>
      </View>
    );
  }
}
class page401 extends Component {
  
    gotopage301(id){
    
    let vpag = page401;
    if(id === '201')  vpag = page401;
    if(id === '202')  vpag = page402;
    if(id === '203')  vpag = page403;
    
    
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
          page401
        </Text>
        
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page402
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page403
        </Text>
        
      </View>
    );
  }
}
class page402 extends Component {
  
    gotopage301(id){
    
    let vpag = page401;
    if(id === '201')  vpag = page401;
    if(id === '202')  vpag = page402;
    if(id === '203')  vpag = page403;
    
    
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
          page402
        </Text>
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('201')}>
          go to page401
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page402
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page403
        </Text>
      </View>
    );
  }
}
class page403 extends Component {
  
      gotopage301(id){
    
    let vpag = page401;
    if(id === '201')  vpag = page401;
    if(id === '202')  vpag = page402;
    if(id === '203')  vpag = page403;
    
    
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
          page403
        </Text>
        
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('201')}>
          go to page401
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('202')}>
          go to page402
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('203')}>
          go to page403
        </Text>
      </View>
    );
  }
}

class page4nav extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'page2', component: page2 }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}  />
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
module.exports = page4nav
