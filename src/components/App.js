import React, { useState } from "react";

import AppRouter from "./Router";
import { authService } from "../firebase";


function App() {
  // 로그인여부 판별
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear} Chanwitter</footer>
    </>
  );
  
}

export default App;
