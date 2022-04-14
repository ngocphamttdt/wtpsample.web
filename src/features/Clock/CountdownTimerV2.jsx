import React, { useEffect, useRef, useState } from 'react'

const CountdownTimerv2 = () => {
  let [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)

  const minuteRef = useRef()
  const secondRef = useRef()
  useEffect(() => {
    let interval = undefined
    if (start && time > 0 && !pause) {
      interval = setInterval(() => {
        setTime(--time)
      }, 1000);
    }
    else clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [start, time, pause])

  const onStart = () => {
    setStart(true)
    setPause(false)
    const mi = +minuteRef.current.value
    const se = +secondRef.current.value
    setTime(mi * 60 + se)
  }

  const onPause = () => setPause(!pause)
  const onReset = () => {
    setStart(false)
    minuteRef.current.value = ''
    secondRef.current.value = ''
    setTime(0)
  }

  return (
    <div>
      <div>
        <input name='minute' type='number' ref={minuteRef} />
        <input name='second' type='number' ref={secondRef} />
      </div>
      <div>
        <button onClick={onStart}>start</button>
        <button onClick={() => onPause(pause)}>{(pause === undefined || !pause) ? 'pause' : 'resume'}</button>

        <button onClick={onReset}>reset</button>
      </div>
      <h1 data-testid='runing-clock'>
        {Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:{(time % 60) < 10 ? `0${time % 60}` :    time % 60}
      </h1>
    </div>
  )
}

export default CountdownTimerv2