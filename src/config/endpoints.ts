/**
 * Authorization/authentication
 */
const startURL = process.env.NODE_ENV === "production" ? "/api" : "";
const authRoute = "auth";
export const SING_UP_ENDPOINT = `${startURL}/${authRoute}/signup`;
export const SING_IN_ENDPOINT = `${startURL}/${authRoute}/login`;
export const RESTORE_PASSWORD_ENDPOINT = `${startURL}/${authRoute}/resetpassword`;
export const REFRESH_ENDPOINT = `${startURL}/${authRoute}/refresh`;

/**
 * Observations
 */
const observationRoute = "observations";
export const OBSERVATIONS_ENDPOINT = `${startURL}/${observationRoute}`;
export const OBSERVATIONS_FILTERS_ENDPOINT = `${startURL}/${observationRoute}/aggregations`;

/**
 * Birds
 */
const birdRoute = "observations"; // TODO replace when birds api is available
export const BIRDS_ENDPOINT = `${startURL}/${birdRoute}`;
export const BIRDS_FILTERS_ENDPOINT = `${startURL}/${birdRoute}/aggregations`;
