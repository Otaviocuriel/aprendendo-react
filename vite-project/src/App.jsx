import { BrowserRouter} from "react-router-dom";

import { AppContextProvider } from "./contexts";


import { Rounter } from "./Rounter";

import "./App.css";


const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Rounter />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export { App };