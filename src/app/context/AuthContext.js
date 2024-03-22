// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabase.client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
