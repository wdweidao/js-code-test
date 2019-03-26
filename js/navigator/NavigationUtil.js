

/**
 * 全局导航控制类
 */

 export default class NavigationUtil{
     
    /***
      * 跳转到指定页面
      * params 要传递的参数
      * page 要跳转的页面
      */
     static goPage(params,page){
        const navigation = NavigationUtil.navigation;
        if(!navigation){
            console.log("NavigationUtil.navigation can not be null");
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
    
    /***
      * 返回上一页
      */
     static resetToHomePage(navigation){
         navigation.goBack();
     }

     /***
      * 重置到首页
      */
     static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate("Main");
    }
 }