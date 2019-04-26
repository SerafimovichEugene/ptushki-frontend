import { OBSERVER, UNAUTHORIZED } from "../../../config/roles";

export interface RouteDescription {
  path: string;
  permissions: Array<string>;
  fallback: string;
}

export const ROUTE_SIGN_UP: RouteDescription = {
  path: "/sign-up/",
  permissions: [UNAUTHORIZED],
  fallback: "/"
};
export const ROUTE_SIGN_IN: RouteDescription = {
  path: "/sign-in/",
  permissions: [UNAUTHORIZED],
  fallback: "/"
};
export const ROUTE_RESET_PASSWORD: RouteDescription = {
  path: "/reset-password/",
  permissions: [UNAUTHORIZED],
  fallback: "/"
};
export const ROUTE_USER_INFO: RouteDescription = {
  path: "/user-info/",
  permissions: [OBSERVER],
  fallback: "/"
};
