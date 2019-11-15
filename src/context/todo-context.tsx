import React from 'react'
import { Todo } from '../interfaces/Todos-Interface';

const StateContext = React.createContext<Todo[] | undefined>(undefined);
export const StateContextProvider = StateContext.Provider;
export const StateContextConsumer = StateContext.Consumer;

// export function dispatchState() {
//   const context = React.useContext(StateContext);
//   if (context === undefined) {
//     throw new Error('useCountState must be used within a CountProvider')
//   }
//   return context;
// }

// import React, { createContext, useReducer, useContext } from 'react'
// export const StateContext = createContext<State | undefined>(undefined);

// export const StateProvider = ({reducer, initialState, children}: any) =>(
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// export const useStateValue = () => useContext(StateContext);



// type todoProps = {children: React.ReactNode}
// const CountStateContext = React.createContext<State | undefined>(undefined);
// const CountDispatchContext = React.createContext<Dispatch | undefined>(undefined);


// import React, {createContext, useContext, useReducer} from 'react';
// export const StateContext = createContext();
// export const StateProvider = ({reducer, initialState, children}) =>(
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
// export const useStateValue = () => useContext(StateContext);