// import React, { Component } from "react";
// import { ThemeContext } from "../Contexts/ThemeContext";
// //This is one way using contextType
// class Navbar extends Component {

// //This is one way using contextType
//   static contextType = ThemeContext;

//   render() {
//     console.log(this.context);

//     const { isLightTheme, light, dark } = this.context;

//     const theme = isLightTheme ? light : dark;

//     return (
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1> Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;

//This is other way using Consumer

import React, { Component } from "react";
// import { AuthContext } from "../Contexts/AuthContext";
// import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../bookContexts/AuthContext";
import { ThemeContext } from "../bookContexts/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1> Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged In" : "Logged Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
