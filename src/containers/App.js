import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'

class App extends Component
{
  constructor()
  {
    super()
    this.state={
                robots: [],
                searchfield: ''
                }  
  }
  onsearchChange=(event)=>{
   this.setState({ searchfield : event.target.value })
 }
 componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>{ return response.json();})
  .then(users=>{this.setState({robots:users})});
 }
   
  
  render(){
     const filteredRobots=this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   })
     return (!this.state.robots.length) ?
      <h1>LOADINGGGGG:</h1>
   : (
    <div  className='tc'>
      <h1 
      className='f1' 
      style={{fontFamily: 'Diablo Heavy'}}>
      ~ROBOFRIENDS~</h1>
      <Searchbox searchChange={this.onsearchChange}/>
      <Scroll>
      <CardList robots={filteredRobots} />
      </Scroll>
    </div>
    );
  }

}

export default App;
