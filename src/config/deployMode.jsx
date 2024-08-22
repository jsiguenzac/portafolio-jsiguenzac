export const IS_DEPLOY = true;
const API_URL_GROUP = {
	LOCAL: "http://localhost:3002",
	DEPLOY: "https://backend-node-alpha-liard.vercel.app",
};
export const API_URL = IS_DEPLOY ? API_URL_GROUP.DEPLOY : API_URL_GROUP.LOCAL;