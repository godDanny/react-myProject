import React,{ Component } from 'react';

class App extends Component{
    render(){
        return(
            <div>
                {/*
                jsx中标签的属性绝大部分和html中一模一样，除了以下几个例外
                class --> className
                for  --> htmlFor
                */}
                <span className="msg" >hello world</span>
                <label htmlFor="age">年龄:</label>
                <input type="text" id="age" />
                {/*
                其一些disable/selected属性可以直接简写
                 */}
                 <input type="text" disable />
            </div>
        )
    }
}

export default App;