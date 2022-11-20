import React, {useContext} from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();

    const handlesignOut = () =>{
        logOut()
        .then( () =>{})
        .catch(error =>console.error(error))
      }
    return (
        <div>
            <p className="text-red-500">SomeThing Went wrong!!</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handlesignOut}>Sign Out</button>and log back in</h4>
        </div>
    );
};

export default DisplayError;