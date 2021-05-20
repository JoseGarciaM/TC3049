import React, {useEffect, useState, createContext, useContext} from 'react';
import {supabaseClient as supabase} from './client';

const authContext = createContext({user: null, session: null});

export const AuthProvider = ({children}) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const {data: authListener} = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          fetch('/api/auth/set-cookie', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            credentials: 'same-origin',
            body: JSON.stringify({event, session}),
          }).then((res) => res.json());
        },
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return {
    user,
    session,
  };
}
