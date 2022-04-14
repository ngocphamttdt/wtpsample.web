import React, { createContext, useState } from "react";
import { Paragraph } from "./Paragraph";


export const ThemeContext = createContext()

console.log('ThemeContext', ThemeContext)

export function Container (){
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return(
  
      <ThemeContext.Provider value={theme}>
        <div style={{padding:20}}>
          <button onClick={toggleTheme}>Toggle theme</button>
          <Paragraph/>
        </div>
      </ThemeContext.Provider>

    
  )
}