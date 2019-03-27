import React,{Component}from 'react';
class App extends Component{
    constructor(props){
        super(props)
        this.state={
          msg:"hello world"
        }
    }
    changeMsg=()=>{
        this,setState({
            msg:'hello Danny'
        },()=>{
            console.log(this.state.msg)
        })

}
render(){
    return (
        <div>
            <span>{this.state.msg}</span>
            <button onClick={this.changeMsg}>点击改变</button>
        </div>
    )
}
}
export default App;