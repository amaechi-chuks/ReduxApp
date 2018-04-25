import React from 'react';

const Signup = () => {
    return(
        <div className='pa3 tc'>
        
        <input className ='pa3 ba br3 b--dark-blue bg-lightest-blue' type='username' placeholder='username' required />
        <input className='pa3 ba br3 b--dark-blue bg-lightest-blue' type='password' placeholder='password' required />
    
        </div>
    );
}
export default Signup;