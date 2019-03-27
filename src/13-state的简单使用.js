import React,{Component} from 'react';
{/*
在react中，有个和vue中data类似的东西叫state 状态
state用来保存组件所用到的私有数据的
定义state只能在constructor 中定义

*/}
class App extends Component{
    constructor (props){
        super(props)
        this.state={
            msg:'hello world'
        }
    }
    render(){
        return(
            <div>
                <span>{this.state.msg}</span>
            </div>
        )
    }
}

export default App;