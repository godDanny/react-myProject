import React,{ Component } from 'react';

//jsx中写注释的方法：
//单行注释 （注意单行注释的后大括号不能和 // 放在一行，因为放一行后大括号会被当成注释的内容）
// 多行注释（更常用）
class App extends Component{
    render(){
        return(
            <div>
                {
                    //单行注释
                }
                {/* 
                多行注释
                */}
                <span>hello world</span>
            </div>
        );
    }
}
export default App;