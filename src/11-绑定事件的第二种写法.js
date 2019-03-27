import React,{ Component } from 'react';

class App extends Component{
    sayHello(){
        console.log('hello')
        console.log(this)
    }
    render(){
        return(
            <div>
                hello world
                {/* 直接在jsx中通过bind来绑定函数 */}
                <button onClick={this.sayHello.bind(this)}>点击</button>
            </div>
        )
    }
}

export default App;