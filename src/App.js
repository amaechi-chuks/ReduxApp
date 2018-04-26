import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';


class App extends Component {
    constructor(){
        super()
        this.state = {
            Robots: Robots,
            searchfield: ''
        }
  }
  onSearchChange(event) {
    console.log(event.target.value);
}
  
    render() {
        return (
            <div>
                <h1 className='tc'>RoboFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList Robots={this.state.Robots} />

            </div>
        );
    }
}
export default App;