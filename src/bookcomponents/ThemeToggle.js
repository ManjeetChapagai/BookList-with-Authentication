import React, { Component } from "react";
import { ThemeContext } from "../bookContexts/ThemeContext";

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}
