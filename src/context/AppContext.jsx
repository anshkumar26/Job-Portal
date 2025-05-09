import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title:"",
    location:""
  });

  const [isSearched,setIsSearched]=useState(false);

  const value = {
    setSearchFilter, searchFilter,
    isSearched,setIsSearched,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;














// import { createContext } from "react";

// export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {
//   const value = {
//     // your context values here
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// src/context/AppContext.jsx