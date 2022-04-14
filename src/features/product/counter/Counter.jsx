
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterActions";

export default function Counter() {
  // const dispatch = useDispatch();
 
  // const data = useSelector(state => state.counter.data)

  return (
    <>
      <h1>testing 123</h1>
      {/* <h1>the data is:{data} </h1>
      <button
        name='increment'
        onClick={(e) => {
          dispatch(increment(20))
        }}
        content='Increment'
        color='green'
      />
      <button
        name='decrement'
        onClick={(e) => {
          dispatch(decrement(10))
        }}
        content='Decrement'
        color='red'
      /> */}
    </>
  )
}