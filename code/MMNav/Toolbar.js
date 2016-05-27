
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    ListView,
    Image,
    TouchableOpacity,
    WebView,
    ScrollView,
    BackAndroid,
    Platform,
} from 'react-native';

// toolbar
export default class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    
    
    //组件挂载的时候调用
  componentDidMount(){
      let nav = this.props.navigator;
      BackAndroid.addEventListener('hardwareBackPress',function(){
          nav.pop();
          return true;
          
      });
  }
    
    render() {
        
        let vback = null;

     
     // 默认有返回
        vback = (               
                <TouchableOpacity style={styles.backView} onPress={this.back.bind(this)} >
                <View style={styles.backIcon} ></View>
                <Text style={styles.backText}>返回</Text>
            </TouchableOpacity>
            )
                
                
        // 
        if(this.props.back === false)
        {
            vback = null;
        }
        
        if(this.props.onBack)
        {
            vback = (<TouchableOpacity style={styles.backView} onPress={this.props.onBack} >
                    <View style={styles.backIcon} ></View>
                    <Text style={{color:"#e54847"}}>返回</Text>
                </TouchableOpacity>)
        }
        
        
        
        
        return (
            <View style={styles.toolbar}>
                {vback}
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
        )
    }
    back() {
        this.props.navigator.pop();
    }
}

class ToolbarHome extends Component {
    render() {
        return (
            <ToolbarAndroid
                logo={require('./images/logo.png') }
                title=""
                style={styles.toolbar}
                />
        )
    }
}

export {ToolbarHome};

var styles = StyleSheet.create({
    
    toolbar: {        
        height:  (Platform.OS === 'ios')? 60: 40 ,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: (Platform.OS === 'ios')? 20: 0 ,
    },

    backIcon: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        height: 12,
        width: 12,
        borderColor: "#fff",
        marginLeft: 20,
        transform: [{ rotate: "-45deg" }]
    },    
    title: {
        flex: 1,
        color: "#fff",
        textAlign: "center",
    },
    backText:{
        color:"#fff"
    },
    backView:{
        flexDirection:'row',
        alignItems:'center'
    }
})