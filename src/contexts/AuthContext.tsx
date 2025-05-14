import { createContext, useContext } from 'react';
import { AuthContextProps, AuthProviderProps } from 'types/props';
import { applicationCookies } from '../helpers';

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Error: useAuth must be used within AuthProvider.');
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setToken, setRefreshToken } = applicationCookies();

  const isAuthenticated = () => {
    const { token } = applicationCookies();
    return token ? true : false;
  }

  const login = (token: string, tokenRefresh: string) => {
    setToken(token);
    setRefreshToken(tokenRefresh);
  };

  const logout = () => {
    setToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

