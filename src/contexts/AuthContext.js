import { createContext, useState, useReducer, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: '',
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return { ...state, email: action.payload };

        default:
            return state;
    }

};

export const AuthProvider = ({
    children
}) => {
    // const [user, setUser] = useState(initialState);

    const [user, dispatch] = useReducer(reducer, initialState);

    const login = (email, password) => {
        // setUser({
        //     email,
        // });

        dispatch({
            type: 'LOGIN',
            payload: email
        });
    };
    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated: Boolean(user.email) }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}