import React, { Component } from 'react'
import io from 'socket.io-client';
const socket = io.connect('https://phpstack-944849-3288229.cloudwaysapps.com/')

export class App extends Component {
  componentDidMount(){
 
   
    socket.emit('set-data', 'salam');
    socket.on('get-data', (data)=>{
      console.log(data)
    })
  }
  render() {
    return (
      <div>App</div>
    )
  }
}

export default App