import React, { useRef, useState } from 'react'

const CountdownTimer = () => {
  const [minuteState, setMinuteState] = useState('00')
  const [secondState, setSecondState] = useState('00')
  const [pause, setPause] = useState(undefined)
  const [intervalId1, setIntervalId1] = useState(undefined)

  const minuteRef = useRef()
  const secondRef = useRef()
  let time = undefined

  const formatTime = (time) =>
    parseInt(time) < 10 ? '0' + time : time

  const setRemainingTime = (min, second) => min * 60 + second

  const onStart = () => {
    const mi = +minuteRef.current.value
    const se = +secondRef.current.value
    time = setRemainingTime(mi, se)

    setMinuteState(formatTime(mi))
    setSecondState(formatTime(se))

    clearInterval(intervalId1);

    const intervalId = setInterval(() => {
      updateRemainingTime()
    }, 1000);

    setIntervalId1(intervalId)
  }

  const onPause = (pauseParam) => {
    if (pauseParam === undefined || !pauseParam) {
      clearInterval(intervalId1);
      setPause(true)
    }
    else {
      setPause(false)
      if (!time) time = setRemainingTime(parseInt(minuteState), parseInt(secondState))
      const intervalId = setInterval(() => {
        updateRemainingTime()
      }, 1000);
      setIntervalId1(intervalId)
    }
  }

  const onReset = () => {
    clearInterval(intervalId1);
    setMinuteState('00')
    setSecondState('00')
  }

  function updateRemainingTime() {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    setMinuteState(formatTime(minutes))
    setSecondState(formatTime(seconds))
    if (time === 0) {
      clearInterval(intervalId1)
      return
    }
    time--
  }

  const getMinuteVal = (e) => {
    setMinuteState(formatTime(e.target.value))
  }
  const getSecondVal = (e) => {
    if (+e.target.value >= 60) {
      setMinuteState(formatTime(parseInt(minuteState) + parseInt(e.target.value / 60)))
      setSecondState(formatTime(e.target.value % 60))
    }
    else setSecondState(formatTime(e.target.value))
  }

  return (
    <div>
      <div>
        <input name='minute' type='number' ref={minuteRef} onKeyUp={(e) => getMinuteVal(e)} />
        <input name='second' type='number' ref={secondRef} onKeyUp={(e) => getSecondVal(e)} />
      </div>
      <div>
        <button onClick={onStart}>start</button>
        <button onClick={() => onPause(pause)}>{(pause === undefined || !pause) ? 'pause' : 'resume'}</button>

        <button onClick={onReset}>reset</button>
      </div>
      <h1 data-testid='runing-clock'>
        {minuteState}:{secondState}
      </h1>
    </div>
  )
}

export default CountdownTimer