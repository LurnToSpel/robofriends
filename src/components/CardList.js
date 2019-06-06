import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    if (true) {
        throw new Error('Womp')
    }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        user={robots[i].username}
                        />
                    )
            })
        }
        </div>
    )
}

export default CardList; 