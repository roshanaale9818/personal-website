const AuthService = ()=>{
    const _setTokenOnSession  =  (accessToken)=>{
        sessionStorage.setItem('accessToken',accessToken);
    };
}
export {AuthService};