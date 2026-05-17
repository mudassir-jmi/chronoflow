import { motion } from "framer-motion";
import ProgressRing from "./ProgressRing";

function TimerCard({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
  timerTime,
  timerRunning,
  formatTimer,
  handleTimerStart,
  handleTimerPause,
  handleTimerReset,
}) {

const totalInitialTime =
  Number(hours || 0) * 3600 +
  Number(minutes || 0) * 60 +
  Number(seconds || 0);

const progress =
  totalInitialTime > 0
    ? (timerTime / totalInitialTime) * 100
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-semibold mb-6">
        Timer
      </h2>

      {/* Inputs */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <input
          type="number"
          placeholder="HH"
          value={hours}
          min="0"
          onChange={(e) => setHours(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center outline-none"
        />

        <input
          type="number"
          placeholder="MM"
          value={minutes}
          min="0"
          max="59"
          onChange={(e) => setMinutes(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center outline-none"
        />

        <input
          type="number"
          placeholder="SS"
          value={seconds}
          min="0"
          max="59"
          onChange={(e) => setSeconds(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center outline-none"
        />
      </div>

      {/* Timer Display */}
      <div className="text-center py-10">
        <ProgressRing progress={progress}>
          <motion.h1
            key={timerTime}
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
            className="text-5xl md:text-7xl font-bold tracking-wider font-mono"
          >
            {formatTimer(timerTime)}
          </motion.h1>
        </ProgressRing>

        <p className="mt-4 text-gray-400">
          Countdown Timer
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {!timerRunning ? (
          <button
            onClick={handleTimerStart}
            className="px-6 py-3 rounded-2xl bg-blue-500 hover:scale-105 transition font-medium"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handleTimerPause}
            className="px-6 py-3 rounded-2xl bg-yellow-500 hover:scale-105 transition font-medium"
          >
            Pause
          </button>
        )}

        <button
          onClick={handleTimerReset}
          className="px-6 py-3 rounded-2xl bg-red-500 hover:scale-105 transition font-medium"
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
}

export default TimerCard;

