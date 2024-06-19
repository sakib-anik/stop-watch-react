import { useRef, useState } from "react";
export default function App() {
  const [start, setStart] = useState(null);
  const [cur, setCur] = useState(null);
  let clockRef = useRef(null);
  let elapsedTime = "";
  function handleStart() {
    setStart(Date.now());
    clockRef.current = setInterval(() => {
      setCur(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(clockRef.current);
  }
  elapsedTime = ((cur - start) / 1000).toFixed(3);
  return (
    <div className="h-full w-full grid place-items-center">
      <h1 className="" style={{ marginTop: "250px" }}>
        <span className="text-4xl" style={{ fontWeight: "bolder" }}>
          Time passed: <span>{elapsedTime}</span>
        </span>
      </h1>
      <div className="flex mt-5">
        <button
          className="mr-4 border border-gray-800 p-3"
          onClick={handleStart}
        >
          Start
        </button>
        <button className="border border-gray-800 p-3" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
}
