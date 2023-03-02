import { useState } from "react";
import {authService} from "fbase"
import AppRouter from "components/Router"

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}  

export default App;

