/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";  

import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  //icons 包
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from './NavigationUtil';
import {BottomTabBar} from 'react-navigation-tabs';


const TABS = {  //在这里配置页面的路由
  PopularPage:{
    screen:PopularPage,
    navigationOptions:{
      tabBarLabel:"最热",
      tabBarIcon:({tintColor,focused}) => (
        <MaterialIcons
          name = {'whatshot'}
          size = {26}
          style = {{color:tintColor}}
        />
      ),
    }
  },
  TrendingPage:{
    screen:TrendingPage,
    navigationOptions:{
      tabBarLabel:"趋势",
      tabBarIcon:({tintColor,focused}) => (
        <Ionicons
          name = {'md-trending-up'}
          size = {26}
          style = {{color:tintColor}}
        />
      ),
    }
  },
  FavoritePage:{
    screen:FavoritePage,
    navigationOptions:{
      tabBarLabel:"收藏",
      tabBarIcon:({tintColor,focused}) => (
        <MaterialIcons
          name = {'favorite'}
          size = {26}
          style = {{color:tintColor}}
        />
      ),
    }
  },
  MyPage:{
    screen:MyPage,
    navigationOptions:{
      tabBarLabel:"我的",
      tabBarIcon:({tintColor,focused}) => (
        <Entypo
          name = {'user'}
          size = {26}
          style = {{color:tintColor}}
        />
      ),
    }
  },
}


export default class DynamicTabNavigator extends Component {
  constructor(props){
    super(props);
    // console.disableYellowBox = true;
  }

  //底部栏
  _tabNavigator(){
    const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS;
    const tabs = {PopularPage,TrendingPage,FavoritePage,MyPage}  //根据需要定制显示的tab
    PopularPage.navigationOptions.tabBarLabel = '最热'; //动态配置Tab属性
    return createBottomTabNavigator(tabs,{
      tabBarComponent : null
    })
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = createAppContainer(this._tabNavigator());
    return <Tab/>
  }
}

class TabBarComponent extends React.Component{
  constructor(props){
    super(props);
    this.theme = {
      tintColor : props.activeTintColor,
      updateTime : new Date().getTime(), 
    }
  }

  render(){
    return <BottomTabBar
      {...this.props}
      activeTintColor = {this.theme.tintColor||this.props.activeTintColor}
    />
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
