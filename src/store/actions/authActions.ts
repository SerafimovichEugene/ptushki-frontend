import { ThunkAction } from "redux-thunk";
import { createAction } from "redux-actions";
import { AuthData, UserInfo } from "../../app/features/auth/models";
import { RootState } from "../index";
import { SING_IN_ENDPOINT, SING_UP_ENDPOINT } from "../../config/endpoints";
import { makePostCall } from "../../utils/makeCall";

// TODO: update to enum?
const AuthEndpoint = {
  singUp: SING_UP_ENDPOINT,
  singIn: SING_IN_ENDPOINT
};

export const authRequest = createAction<AuthData>("AUTH_REQUEST");
export const authSuccess = createAction<UserInfo>("AUTH_SUCCESS");
export const authFailure = createAction<string>("AUTH_FAILURE");

const auth = (type: "singIn" | "singUp") => (
  data: AuthData
): ThunkAction<void, RootState, undefined, any> => dispatch => {
  dispatch(authRequest(data));

  makePostCall(AuthEndpoint[type], data)
    .then(resData => {
      dispatch(authSuccess(resData));
    })
    .catch((e: Error) => {
      dispatch(authFailure(e.message));
    });
};

export const signUp = () => auth("singUp");
export const signIn = () => auth("singIn");
