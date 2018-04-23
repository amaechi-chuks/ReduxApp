import React from 'react';

const Card = (props) => {
    const { name, username, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-8'>
            <img src={`https://robohash.org/${id}?100x100`} alt='robot' />
            <div>
                <p className='ttu'>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;