import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: '',
};

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    const login = (email, password) => {
        setUser({
            email,
        });
    };
    return (
        <AuthContext.Provider value={{user, login, isAuthenticated: Boolean(user.email)}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}