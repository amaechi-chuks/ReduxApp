import React from 'react';
import CardList from './CardList';
import searchBox from './searchBox';
import { Robots } from './Robots';


const App = () => {
    return (
        <div>
            <h1>RoboFriends</h1>
            <searchBox />
            <CardList Robots={Robots} />
        </div>
    );
}
export default App;