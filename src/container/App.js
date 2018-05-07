import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robots } from '../container/Robots';
import Scroll from '../components/Scroll';
import Footer from '../container/Footer';
import '../container/App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    }
}
class App extends Component {
    //smart component
    constructor() {
        super()
        this.state = {
            Robots: []
            
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ Robots: Robots }) });
    }
    
    //the display component
    render() {
        const { Robots } = this.state;
        const { searchField, onSearchChange} = this.props;
        const filteredRobots = Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !Robots.length ?
            <h1> onLoading </h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox SearchChange={onSearchChange} />
                    <Scroll>
                        <CardList Robots={filteredRobots} />
                    </Scroll>
                    <Footer />
                </div>
            );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);