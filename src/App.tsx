import React, { useState, FC } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

const App: FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-gray-200 black">
        {/* <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} /> */}
        {/* <Header /> */}
        <Routes />
      </div>
    </div>
  );
};

export default App;
