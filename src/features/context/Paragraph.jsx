import React, { useContext } from "react";
import { ThemeContext } from "./Containter";



export function Paragraph(){
  const context = useContext(ThemeContext)

  return(
    <p>value:{context}</p>
  )
}