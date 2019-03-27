import React,{Component} from 'react';
class App extends Component{
    // 绑定事件的第一种方式：直接通过箭头函数
    sayHello=()=>{
        console.log('hello')
        console.log(this)
    }
    render(){
        return(
            <div>
                hello world
                <button onClick={this.sayHello}>点击</button>
            </div>
        )
    }
}
export default App;