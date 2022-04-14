import React, { useEffect, useState } from "react";
import { ChildMemo } from "./ChildMemo";

export const ParentMemo = () => {
  const [name, setName] = useState('')
  let [count, setCount] = useState(0)

  const clickBtn = () => {
    setName(`Ngọc ngôk${count}`)
    setCount(++count)
    console.log('click')
  }

  return (
    <div>
      <ChildMemo name={name}></ChildMemo>
      <button onClick={clickBtn}>click nè</button>
    </div>
  )
}
