import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';
import Scroll from './Scroll';
import Footer from './Footer';
import './App.css';

class App extends Component {
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
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.Robots.length === 0) {
            return <h1> onLoading </h1>
        } else {
            return (
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
}
export default App;