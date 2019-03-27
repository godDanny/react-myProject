import React,{ Component } from 'react';

//1.所有样式的属性凡是以连字符连接的属性都要改成驼峰命名法
//2.非数字类型的属性值全部都需要加上引号，纯数字不用写引号
//3.单位是px的可以省略单位，直接写数字，到时候react会自动帮我们加上单位px
//4. 不要写分号，要写逗号
let styleObject={
    fontSize:'50px',
    marginLeft:50,
    color:'red'
}
class App extends Component{
    render(){
        return(
            <div>
                {/* jsx中写行内样式不能直接写字符串，得用jsx表达式包裹一个样式的对象 */}
                <span style={styleObj}>hello world</span>
            </div>
        )
    }
}
export default App;