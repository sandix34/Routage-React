import React from 'react';

const TodoDetails = ({match}) => {
    console.log(match.params);
    
    return ( 
        <div>details de {match.params.id}</div>
     );
}
 
export default TodoDetails;