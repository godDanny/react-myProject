import React,{Component} from 'react';


{/*
jsx能够创建组件模板，但是他并不是必须的，
我们可以使用React中提供的createElement()这个方法来创建组件模板，
该方法包含以下三个参数：
1.创建的标签类型，比如 div/span
2.标签内部的属性，通常它是一个对象，如果没有属性，值为null
3.标签内部的子元素
*/}
class App extends Component{
    render(){
        return(
            React.createElement(
                'div',
                null,
                React.createElement(
                    'span',
                    {id:'mysql'},
                    'hello world'
                )
            )
        )
    }
}
export default App;