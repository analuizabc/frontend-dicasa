export const TOKEN_KEY ="@dicasa-Token";
export const USERID_KEY ="@dicasa-UserId";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY)!==null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const getUserId = () => sessionStorage.getItem(USERID_KEY);
export const login = (token, user_id) => {
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(USERID_KEY, user_id);
};
export const logout = ()=> {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USERID_KEY);
};