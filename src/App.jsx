import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BackgroundEffects from "./components/BackgroundEffects";
import ThemeToggle from "./components/ThemeToggle";
import StopwatchCard from "./components/StopwatchCard";
import TimerCard from "./components/TimerCard";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Stopwatch States
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  // Timer States
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [timerTime, setTimerTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  // Stopwatch Effect
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Timer Effect
  useEffect(() => {
    if(!timerRunning) return;
    if(timerTime <= 0) {
      setTimerRunning(false);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimerTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timerRunning, timerTime]);

  // Stopwatch Format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  // Stopwatch Controls
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (time > 0) {
      setLaps((prev) => [...prev, formatTime(time)]);
    }
  };

  // Timer Format
  const formatTimer = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${String(hrs).padStart(2, "0")}:${String(
      mins
    ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Timer Controls

  const handleTimerStart = () => {
    // If timer already paused, resume it
    if (timerTime > 0) {
      setTimerRunning(true);
      return;
    }

    // Create new timer
    const totalSeconds =
      Number(hours || 0) * 3600 +
      Number(minutes || 0) * 60 +
      Number(seconds || 0);

    if (totalSeconds <= 0) {
      alert("Please enter valid time");
      return;
    }

    setTimerTime(totalSeconds);
    setTimerRunning(true);
  };

  const handleTimerPause = () => {
    setTimerRunning(false);
  };

  const handleTimerReset = () => {
    setTimerRunning(false);
    setTimerTime(0);

    setHours("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <div
      className={`min-h-screen overflow-hidden relative transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Background Effects */}
        <BackgroundEffects />
      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 py-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            ChronoFlow
          </motion.h1>

          {/* Theme Toggle */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Stopwatch Card */}
          <StopwatchCard
            time={time}
            isRunning={isRunning}
            laps={laps}
            handleStart={handleStart}
            handlePause={handlePause}
            handleReset={handleReset}
            handleLap={handleLap}
            formatTime={formatTime}
          />

          {/* Timer Card */}
          <TimerCard
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            timerTime={timerTime}
            timerRunning={timerRunning}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
            handleTimerStart={handleTimerStart}
            handleTimerPause={handleTimerPause}
            handleTimerReset={handleTimerReset}
            formatTimer={formatTimer}
          />

        </div>
      </div>
    </div>
  );
}

export default App;

