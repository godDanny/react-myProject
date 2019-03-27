import React,{ Component } from 'react';
let msg='hello world'
let age=18
class App extends Component{
    //在react中，可以使用jsx表达式{}来渲染动态的数据
    // jsx表达式的合法用法有：
// 1.变量
// 2.字符串拼接
// 3.数值运算
// 4.三元运算符（虽然if else 语句等价于三元运算符，但是它无法在jsx表达式中使用）
// 5.函数
render(){
    return(
        <div>
            <span>{msg}</span>
            <span>{'欧阳'+'jack'}</span>
            <span>{1+1}</span>
            <span>{age>=18?'已成年':'未成年'}</span>
            <span>{msg.split('').reverse.join('')}</span>
        </div>
    );
  }
}
export default App;