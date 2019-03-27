// 引入react 中提供的包裹组件fragment,它是组件主要是用来包裹jsx元素，不会渲染出多余的标签
import React,{Component,Fragment} from 'react';
class App extends Component{
    render(){
        //下面这段代码是jsx语法
        //什么是jsx --> jsx是一个语法糖（相当于快捷方式），使用类似于html的代码来创建组件的模板内容，就像vue中的template标签一样
        // 注意：在使用jsx时，和vue一样，只能有一个根节点
        return (
            <Fragment>
                <div>
                    <span>hello world</span>
                </div>
                <div>
                    <span>hello world</span>
                </div>
            </Fragment>
        )
        export default App;
    }
}