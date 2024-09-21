import React, { Component } from 'react';

class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}
increment() {
this.setState({
    count: this.state.count + 1
})
}
render(){
    return (
        <> 
    <h1>Welcome to counter</h1>
    <p>lets change state</p>
    <p>the count is {this.state.count}</p>
    <button onClick={()=>this.increment()}>increment</button>
    </>
       )
}


}
export default Counter;