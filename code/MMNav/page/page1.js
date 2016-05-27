/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


import Toolbar from "../Toolbar";
import Global from "../Global"
import login from "./login"
import modal from "./modal"

class page1 extends Component {
  
  gotopage301(id){
    
    let vpag = page101;
    if(id === '101')  vpag = page101;
    if(id === '102')  vpag = page102;
    if(id === '103')  vpag = page103;
    if(id === 'login')  vpag = login;
    if(id === 'modal')  vpag = modal;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
        });
      // this.props.navigator.resetTo({
      //       name: id,            
      //       component: vpag,
      //   });
  }
  

  
  render() {
    
    Global.routeIndex = this.props.navigator.getCurrentRoutes().length;
    console.log('page1 Global.routeIndex ' + this.props.navigator.getCurrentRoutes().length + ' nav');

    
    
    return (
      <View style={styles.container}>
         <Toolbar {...this.props} navigator={this.props.navigator} name="page1" back = {false}/>
        
        <Text style={styles.welcome}>
          page1 
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('101')}>
          go to page101
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('102')}>
          go to page102
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('103')}>
          go to page103
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('login')}>
          go to login
        </Text>
        
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('modal')}>
          go to modal
        </Text>
        
      </View>
    );
  }
}
class page101 extends Component {
  
    gotopage301(id){
    
    let vpag = page101;
    if(id === '101')  vpag = page101;
    if(id === '102')  vpag = page102;
    if(id === '103')  vpag = page103;
    
    
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
          page101
        </Text>
        
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('102')}>
          go to page102
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('103')}>
          go to page103
        </Text>
        
      </View>
    );
  }
}
class page102 extends Component {
  
    gotopage301(id){
    
    let vpag = page101;
    if(id === '101')  vpag = page101;
    if(id === '102')  vpag = page102;
    if(id === '103')  vpag = page103;
    
    
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
          page102
        </Text>
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('101')}>
          go to page101
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('102')}>
          go to page102
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('103')}>
          go to page103
        </Text>
      </View>
    );
  }
}
class page103 extends Component {
  
      gotopage301(id){
    
    let vpag = page101;
    if(id === '101')  vpag = page101;
    if(id === '102')  vpag = page102;
    if(id === '103')  vpag = page103;
    
    
      this.props.navigator.push({
            name: id,            
            component: vpag,
            nbar:false,
        });
  }
  
  
  render() {
    return (
      <View style={styles.container}>
      <Toolbar {...this.props} navigator={this.props.navigator} />
        <Text style={styles.welcome}>
          page103
        </Text>
        
       <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('101')}>
          go to page101
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('102')}>
          go to page102
        </Text>
        <Text style={styles.welcome} 
                 onPress={() => this.gotopage301('103')}>
          go to page103
        </Text>
      </View>
    );
  }
}

class page1nav extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'page1', component: page1 }}
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('rn_qpl', () => rn_qpl);
module.exports = page1nav
