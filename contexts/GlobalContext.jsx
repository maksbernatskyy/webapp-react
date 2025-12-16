import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [loading, setLoading] = useState(true);

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

export { GlobalProvider, useLoading };
