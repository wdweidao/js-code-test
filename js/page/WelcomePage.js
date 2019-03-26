 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';


export default class WelcomePage extends Component {
  
  componentDidMount(){
    this.timer = setTimeout(()=>{     //定时器
      // 方式1.直接使用
      // const {navigation} = this.props;
      // navigation.navigate("Main");

      //方式2：NavigationUtil方式
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      })
    },500);
  }
  componentWillMount(){
    this.time && clearTimeout(this.timer) //销毁定时器
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.welcome}>WelcomePage</Text>
      </View>
    );
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
