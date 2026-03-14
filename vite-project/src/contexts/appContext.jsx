import { createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) =>{
    const { children } = props;

    return(
        <AppContext.Provider value= {{}}>
         {children}   
        </AppContext.Provider>
    );

};  