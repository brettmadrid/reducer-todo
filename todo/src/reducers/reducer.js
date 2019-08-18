import { useReducer } from "react";

// set up initial state value
export const initialState = {
  list: [
    {
      item: "Clean room",
      completed: false,
      id: 16543
    },
    {
      item: "Transplant plants",
      completed: false,
      id: 435435
    }
  ]
};

// describes actions our components make that changes state
export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LIST":
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    case "ADD_TODO":
      return {
        ...state,
        list: [
          ...state.list,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "CLEAR_COMPLETED":
      return {...state, list: state.list.filter(item => !item.completed)}
    default:
      return state
  }
}
