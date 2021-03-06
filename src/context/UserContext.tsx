import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { User } from '../types/user';

type DispatchType = {
  type: string;
  payload: unknown;
};

type UserContextProps = {
  user: User;
  dispatch: React.Dispatch<DispatchType>;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const initialState = {};

type Action = {
  type: string;
  payload: unknown;
};

function reducer(state: any, action: Action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT': {
      return { ...state, user: null };
    }
    default:
      return state;
  }
}

const UserContext = React.createContext<UserContextProps>(null!);

export function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return React.useContext(UserContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, dispatch } = useUserContext();
  const location = useLocation();

  if (!user) {
    const authorizationToken = localStorage.getItem('authorization');
    const userInStorage = localStorage.getItem('user');
    if (userInStorage === null || authorizationToken === null) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    dispatch({ type: 'LOGIN', payload: JSON.parse(userInStorage) });
  }
  return children;
}

export function getUserData() {
  const { dispatch } = useUserContext();
  const userSessionData = localStorage.getItem('user');
  const user = userSessionData ? JSON.parse(userSessionData) : null;
  dispatch({ type: 'LOGIN', payload: user });
}
