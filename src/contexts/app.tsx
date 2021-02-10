import React from 'react'

interface IAppContext {
  appState: IInitialState;
  appDispatch: any;
}

interface IInitialState {
  showNav: boolean;
}

const initState: IInitialState = {
  showNav: false
}

interface IAction {
  type: string;
  payload: any;
}

export const AppContext = React.createContext<IAppContext>({
  appState: initState,
  appDispatch: () => null
})

const reducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case 'toggleNav':
      return { ...state, showNav: !state.showNav }
    default:
      return state
  }
}

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState)
  
  return (
    <AppContext.Provider
      value={{
        appState: state, 
        appDispatch: dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider