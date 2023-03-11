import React, { createContext, useReducer } from 'react';
import { TResponse } from '../config/alchemy';

interface TState extends TResponse {
  error?: string
}
interface Action {
  type: string;
  payload: TState;
}

const initialState: TState = {
  nfts: [],
  pageKey: '0', 
};

export const DataContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const reducer = (state: TState, action: Action) => {
  switch (action.type) {
    case 'SET_NFTS':
      return { ...state, ...action.payload, error: '' };
    case 'SET_ERROR':
        return { ...state, ...action.payload};
    default:
      return state;
  }
};

export const DataProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
