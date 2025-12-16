import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function globalProvider({ children }) {
  const [loading, setLoading] = useState();

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useLoading() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalContext, useLoading };
