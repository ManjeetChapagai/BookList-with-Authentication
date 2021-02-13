import React from "react";

// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import ThemeToggle from "./components/ThemeToggle";
// import AuthContextProvider from "./Contexts/AuthContext";
// import ThemeContextProvider from "./Contexts/ThemeContext";

import BookList from "./BookList";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import AuthContextProvider from "../bookContexts/AuthContext";
import ThemeContextProvider from "../bookContexts/ThemeContext";

function BookApp() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default BookApp;
