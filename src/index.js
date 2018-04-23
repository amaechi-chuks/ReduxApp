import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import {Robots} from './Robots';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList Robots = {Robots} />
    
 ,document.getElementById('root'));
registerServiceWorker();

