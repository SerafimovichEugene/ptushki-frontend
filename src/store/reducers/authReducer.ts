import reduceReducer from "reduce-reducers";
import { handleAction } from "redux-actions";
import { Ability } from "@casl/ability";
import { UserInfo } from "../../app/features/auth/models";
import {
  authFailure,
  authRequest,
  authSuccess,
  authUnmount,
  logout
} from "../actions/authActions";

const initialState = {
  error: undefined as string | undefined,
  isPending: false,
  user: null as UserInfo,
  permissions: new Ability([]),
  isLoaded: false
};

const authRequestReducer = handleAction(
  authRequest,
  (state, action) => ({
    ...state,
    error: undefined,
    isPending: true,
    user: null
  }),
  initialState
);

const authFailureReducer = handleAction(
  authFailure,
  (state, action) => ({
    ...state,
    error: action.payload,
    isPending: false,
    user: null,
    isLoaded: true
  }),
  initialState
);

const authSuccessReducer = handleAction(
  authSuccess,
  (state, action) => ({
    ...state,
    user: action.payload.user,
    permissions: action.payload.permissions,
    error: undefined,
    isPending: false,
    isLoaded: true
  }),
  initialState
);

const authUnmountReducer = handleAction(
  authUnmount,
  (state, action) => ({
    ...state,
    error: undefined,
    isPending: false
  }),
  initialState
);

const logoutReducer = handleAction(
  logout,
  (state, action) => ({
    ...initialState,
    isLoaded: true,
    user: action.payload.user,
    permissions: action.payload.permissions
  }),
  initialState
);

// TODO find an alternative to reduceReducer that respects correct action types
export const authReducer = reduceReducer(
  initialState,
  authFailureReducer,
  authRequestReducer,
  authSuccessReducer,
  authUnmountReducer,
  logoutReducer
);
