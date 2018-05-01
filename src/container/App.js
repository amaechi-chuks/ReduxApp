import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robots } from '../container/Robots';
import Scroll from '../components/Scroll';
import Footer from '../container/Footer';
import '../container/App.css';

class App extends Component {
    //smart component
    constructor() {  
        super()            
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ Robots: Robots }) });
    }
    //seaech component
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    //the display component
    render() {
        const { Robots, searchfield } = this.state;
        const filteredRobots = Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !Robots.length ?
            <h1> onLoading </h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox SearchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList Robots={filteredRobots} />
                    </Scroll>
                    <Footer />
                </div>
            );
    }
}
export default App;