const ROLES = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
    MOD:"ROLE_MOD"
};

export const checkAuthorization = (user, role) => {
    // console.log("USER",user);
    // console.log('role',role);
    return user && user.roles[0] === role;
};
export default ROLES;
