import {useState,useEffect} from 'react'

const ProgressBar = ({timer}) => {
    const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
   const interval= setInterval(() => {
      console.log("Interval");
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return ()=> {
      clearInterval(interval);
    }
  }, []);
  return (
    <progress value={remainingTime} max={timer} id="progress" />
  )
}

export default ProgressBar