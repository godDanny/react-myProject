import React,{Component} from 'react';
class App extends Component{
// 可以在construct中绑定this,官方推荐写法，性能更好，
// 因为construct只会执行一次，不会重复执行
    constructor(props){
        //继承父类Component的构造函数
        super(props)
        this.sayHello=this.sayHello.bind(this)
    }
sayHello(){
    console.log('hello')
    console.log(this);
}
render(){
    return (
        <div>
            hello world 
            <button onClick={this.sayHello}>点击</button>
        </div>
    )
 }
}

export default App;