import React, {useReducer} from 'react'

import ToDo from './todo.js'


const List = ({state, dispatch}) => {

   
    
    return(<div>
            <h2>Here is my personal List</h2>
            {state.list.map(item => 
              <ToDo key={item.id} item={item} dispatch={dispatch}
               />  
            )}
        </div>)
    
}

export default List;