export const IS_DEPLOY = false;
const API_URL_GROUP = {
	LOCAL: "http://localhost:3002",
	DEPLOY: "https://",
};
export const API_URL = IS_DEPLOY ? API_URL_GROUP.DEPLOY : API_URL_GROUP.LOCAL;