import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
    const cardsArray = Robots.map((name, i) => {
        return (<Card 
        key = {i} 
        id={Robots[i].id} 
        name={Robots[i].name} 
        username={Robots[i].username} 
        email={Robots[i].email} />);
    })
    return (<div>
        {cardsArray}
    </div>
    );
}
export default  CardList;