import React, { useRef, useState } from "react";


export function DebounceSearch(){

  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  const handleSearchTermChange = (e) =>{
    const valInput = e.target.value
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = setTimeout(() => {
      console.log(valInput)
    }, 300);
  
  }

  return(
    <div>
      <input onChange={handleSearchTermChange} />
    </div>
  )
}