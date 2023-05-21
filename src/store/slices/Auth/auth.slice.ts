/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from '../../store';
import useAxios from "../../../hooks/useAxios";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  name: string | null;
  lastName: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  name: null,
  lastName: null,
  isLoading: false,
};

const loadStateFromLocalStorage = (): AuthState | undefined => {
  try {
    const serializable = localStorage.getItem('authState');
    if( serializable ) {
      return JSON.parse(serializable)
    }
  } catch (error) {
    console.log(error)
  }
  return undefined;
}

const saveStateToLocalStorage = ( state: AuthState, token: string ) => {
  try {
    const serializable = JSON.stringify(state);
    localStorage.setItem('authState', serializable);
    localStorage.setItem('token', token);
  } catch (error) {
    console.log(error)
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: loadStateFromLocalStorage() || initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; name: string; lastName:string; token: string; }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.username;
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      saveStateToLocalStorage( state, action.payload.token )
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// accion asíncrona
export const loginAsync = ( credentials: { username: string; password: string; } ): AppThunk => async (
  dispatch
) => {
  const { data } = await useAxios.post('/auth/login',credentials);
  dispatch(login({ ...data.authenticated.payload, token: data.authenticated.token }))
}
