/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


import Toolbar from "../Toolbar";
import page3a from "./page3a";


class page3 extends Component {
  
  gotopage301(id){
    
    let vpag = page301;
    if(id === '301')  vpag = page301;
    if(id === '302')  vpag = page302;
    if(id === '303')  vpag = page303;
    if(id === '3a')  vpag = page3a;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
  }
  

  
  render() {
    return (
      <View style={styles.container}>
      
       <Toolbar {...this.props} navigator={this.props.navigator} name="page3" back = {false}/>
        <Text style={styles.welcome}>
          page3 page3 page3
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('301')}>
          go to page301
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('302')}>
          go to page302
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('303')}>
          go to page303
        </Text>
         <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('3a')}>
          go to page3a
        </Text>
      </View>
    );
  }
}
class page301 extends Component {
  
    gotopage301(id){
    
    let vpag = page301;
    if(id === '301')  vpag = page301;
    if(id === '302')  vpag = page302;
    if(id === '303')  vpag = page303;
    
    
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
          page301
        </Text>
        
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('302')}>
          go to page302
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('303')}>
          go to page303
        </Text>
        
      </View>
    );
  }
}
class page302 extends Component {
  
    gotopage301(id){
    
    let vpag = page301;
    if(id === '301')  vpag = page301;
    if(id === '302')  vpag = page302;
    if(id === '303')  vpag = page303;
    
    
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
          page302
        </Text>
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('301')}>
          go to page301
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('302')}>
          go to page302
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('303')}>
          go to page303
        </Text>
      </View>
    );
  }
}
class page303 extends Component {
  
      gotopage301(id){
    
    let vpag = page301;
    if(id === '301')  vpag = page301;
    if(id === '302')  vpag = page302;
    if(id === '303')  vpag = page303;
    
    
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
          page303
        </Text>
        
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('301')}>
          go to page301
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('302')}>
          go to page302
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('303')}>
          go to page303
        </Text>
      </View>
    );
  }
}

class page3nav extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'page3', component: page3 }}
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
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('rn_qpl', () => rn_qpl);
module.exports = page3nav
