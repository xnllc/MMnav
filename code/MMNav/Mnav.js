

import React, { Component } from 'react';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Platform
} from 'react-native';


import Page1 from "./page/page1";
import Page2 from "./page/page2";
import Page3 from "./page/page3";
import Page4 from "./page/page4";


import Login from "./page/login";

import TabBarItem from "./TabBarItem";

import Global from "./Global"


var tab_titel = [
    "首页",
    "查找",
    "我的",
    "我的t",
    "登录",
];
var tab_img = [
    require("./images/tab/tab_home.png"),
    require("./images/tab/tab_found.png"),
    require("./images/tab/tab_me.png"),
    require("./images/tab/tab_me.png"),
    require("./images/tab/tab_me.png"),
];
var tab_img2 = [
    require("./images/tab/tab_home2.png"),
    require("./images/tab/tab_found2.png"),
    require("./images/tab/tab_me2.png"),
    require("./images/tab/tab_me2.png"),
    require("./images/tab/tab_me2.png"),
];


var _getRandomRoute = function (str) {
    return {
        randNumber: str,
    };
} 

var ROUTE_STACK = [
    _getRandomRoute('Page1'),
    _getRandomRoute('Page2'),
    _getRandomRoute('Page3'),
    _getRandomRoute('Page4'),
    _getRandomRoute('Login'),
];



Global.routeIndex = 0;
Global.islogin = 0;
var islogin = false;

var routeIndex = 0 ;



class film extends Component {
    constructor(props, params) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }
    // handleWillFocus(route) {
    //     var tabIndex = ROUTE_STACK.indexOf(route);
    //     this.setState({tabIndex});
    // }
    render() {        
        return (
              <Navigator
                initialRoute={ROUTE_STACK[routeIndex]}
                renderScene={this.renderScene}
                navigationBar={
                    this.TabBar()
                }
                 initialRouteStack={ROUTE_STACK}
                 ref={(navigator) => {
                  this._navigator = navigator;
                }}
                />
        );
    }
    renderScene(route, navigator){       
        var pages =[
            <Page1 {...route.params} navigator = {navigator}/>,
            <Page2 {...route.params}  navigator = {navigator}/>,
            <Page3 {...route.params}/>,
            <Page4 {...route.params}/>,
            <Login {...route.params} Mnav = {navigator} 
                                    unLogin={() => {
                                            routeIndex = 0;
                                            islogin = false;
                                            console.log('-- unLogin');
                                            navigator.jumpTo(ROUTE_STACK[routeIndex]);
                                    }}
                                    onBack={() => {
                                        
                                            routeIndex = 0;
                                            islogin = false;
                                            console.log('-- onBack');
                                            navigator.jumpTo(ROUTE_STACK[routeIndex]);

                                            
                                    }}
                                   onLgoin={() => {
                                        routeIndex = 2;
                                        islogin = true;
                                        console.log('-- onLgoin');
                                        navigator.jumpTo(ROUTE_STACK[routeIndex]);
                                }}
                         />,
        ]
        
        if(route.component)
        {
            
             navigator.navigationBar = null
            return <route.component {...route.params} navigator={navigator}  />
        }else{
            return (pages[routeIndex])
        }
        
        
       
    }
    
    TabBar() {
        
         let  img1 = (routeIndex === 0)?tab_img2[0]:tab_img[0];
         let  img2 = (routeIndex === 1)?tab_img2[1]:tab_img[1];
         let  img3 = (routeIndex === 2)?tab_img2[2]:tab_img[2];
         let  img4 = (routeIndex === 3)?tab_img2[2]:tab_img[2];
         
        //  if(routeIndex === 4) return null;
        
        return (
            <View style={{flexDirection:"row",borderTopWidth: 1,borderColor: "#A5B5B5",} }>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={img1}
                    title={tab_titel[0]}
                    onPress={() => {
                        this.onTabIndex(0);
                         this.setState({tabIndex:0})
                    } }>
                    ></TabBarItem>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={img2}
                    title={tab_titel[1]}
                    onPress={() => {
                        this.onTabIndex(1);
                         this.setState({tabIndex:1})
                    } }>
                    ></TabBarItem>
                 <TabBarItem
                    underlayColor="#B5B5B5"
                    image={img3}
                    title={tab_titel[2]}
                    onPress={() => {
                        this.onTabIndex(2);
                        this.setState({tabIndex:2})
                    } }>
                    ></TabBarItem>
                 <TabBarItem
                    underlayColor="#B5B5B5"
                    image={img4}
                    title={tab_titel[2]}
                    onPress={() => {
                        this.onTabIndex(3);
                        this.setState({tabIndex:3})
                    } }>
                    ></TabBarItem>
            </View>
        )
    }
    onTabIndex(_index){        
        routeIndex = _index;
        
         if(!islogin && (_index === 2))
        {
            routeIndex = 4;
        }
        
         this._navigator.jumpTo(ROUTE_STACK[routeIndex]);
        
    }
   
}


var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    },
    appContainer: {
        //flex: 1,
        overflow: 'hidden',
        backgroundColor: '#dddddd',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
        height: 50,
        backgroundColor: '#FFF'
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    scene: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios')? 20: 0 ,
        backgroundColor: '#EAEAEA',
    },
    welcome: {
        fontSize: 20
    },
    v_tabel_line:{
        height:1,
        backgroundColor:'#f00',
        // backgroundColor:'#E5E5E5',
    },
});


module.exports = film;
