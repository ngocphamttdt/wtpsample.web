import React, { useEffect, useState } from "react";

 export const  ChildMemo = ({name}) => {
   console.log(name)

  return(
    <div>
      <h2>{name}</h2>
    </div>
  )
}

//export default(ChildMemo)