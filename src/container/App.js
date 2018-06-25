import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robots } from '../container/Robots';
import Scroll from '../components/Scroll';
import Footer from '../container/Footer';
import '../container/App.css';
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        ispending: state.requestRobots.ispending,
        error: state.requestRobots.error
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    //smart component
    componentDidMount() {
        this.props.onRequestRobots();
    }
    
    //the display component
    render() {
        const { searchField, onSearchChange, ispending} = this.props;
        const filteredRobots = Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return ispending ?
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