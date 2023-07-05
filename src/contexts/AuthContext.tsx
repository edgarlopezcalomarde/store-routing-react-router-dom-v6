import React, { ReactNode, createContext, useState } from "react";

interface AuthContextType {
  user: string;
  signIn: (newUser: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const signIn = (newUser: string) => setUser(newUser);
  const signOut = () => setUser(null);

  const contextValue = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
