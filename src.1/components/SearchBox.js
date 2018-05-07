import React from 'react';


const SearchBox = ({searchfield, SearchChange}) => {
    return(
        <div className='pa2 tc'>
       <input
       className= 'pa3 ba br3 b--dark-blue bg-lightest-blue '
        type='search'
         placeholder='search robots' 
         onChange={SearchChange}
         />
         </div>
    );
}
export default SearchBox;