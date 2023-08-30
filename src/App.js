import Router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.css'
import './assets/font/css/index.css'
import { createContext, useState } from 'react';


export const ThemeContext = createContext(null)


function App() {
  const [theme, setTheme] = useState("light")
    const toggler = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

  return (
    <ThemeContext.Provider value={{theme, toggler}}>
      <div id={theme}>
      < Router />
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
