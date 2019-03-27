import React,{Component}from 'react';
let age=18;
let sex='男'

let user={
    age:18,
    sex:'男'
}
class App extends Component{
    render(){
        <div>
            <span age='18' sec='男'>jack</span>
            <span age={age} sex={sex}>jack</span>
            <span age={user.age} sex={user.sex}>jack</span>
            {/*使用对象展开运算符... 能够将一个对象在标签中全部展开，将对象中的键值对直接作为标签的属性 */}
            <span {...user}>jack</span>
        </div>
    }
}
export default App;