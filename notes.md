Steps

1. set up reducer:

    import { useReducer } from "react"; // use this hook

    // now set initial state
    export const initialState = { set up state here }

    // set up reducer, return state for now
    export function reducer(state, action) {
      return state;
    }

2. set up state in App.js

  import React, { useReducer } from 'react';
  import { initialState, reducer } from './reducers';

  function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <div className="App">
        <h1>Brett's todo's:</h1>

      </div>
    );
  }

3. Create a component which receives props of both the state and the dispatch destructured:

const List = ({state, dispatch}) => {}

4. Now Call that component from App and pass in state and dispatch - i.e:

   <div className="App">
      <h1>Brett's todo's:</h1>
      <List state={state} dispatch={dispatch}/>
    </div>


