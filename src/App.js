import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';


const App = () => {
    return (
        <div>
            <h1 className='tc'>RoboFriends</h1>
            <SearchBox />
            <CardList Robots={Robots} />
        </div>
    );
}
export default App;