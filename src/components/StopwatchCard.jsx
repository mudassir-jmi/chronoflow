import { motion } from "framer-motion";

function StopwatchCard({
  time,
  isRunning,
  laps,
  formatTime,
  handleStart,
  handlePause,
  handleReset,
  handleLap,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-semibold mb-6">
        Stopwatch
      </h2>

      {/* Stopwatch Display */}
      <div className="text-center py-16">
        <motion.h1
          key={time}
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-wider font-mono"
        >
          {formatTime(time)}
        </motion.h1>

        <p className="mt-4 text-gray-400">
          Hours : Minutes : Seconds : MS
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="px-6 py-3 rounded-2xl bg-green-500 hover:scale-105 transition font-medium"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="px-6 py-3 rounded-2xl bg-yellow-500 hover:scale-105 transition font-medium"
          >
            Pause
          </button>
        )}

        <button
          onClick={handleReset}
          className="px-6 py-3 rounded-2xl bg-red-500 hover:scale-105 transition font-medium"
        >
          Reset
        </button>

        <button
          onClick={handleLap}
          className="px-6 py-3 rounded-2xl bg-purple-500 hover:scale-105 transition font-medium"
        >
          Lap
        </button>
      </div>

      {/* Lap History */}
      <div className="mt-8 max-h-64 overflow-y-auto">
        <h3 className="text-xl font-semibold mb-4">
          Laps
        </h3>

        {laps.length === 0 ? (
          <p className="text-gray-400">
            No laps recorded yet.
          </p>
        ) : (
          <div className="space-y-3">
            {laps.map((lap, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
              >
                <span>Lap {index + 1}</span>

                <span className="font-mono">
                  {lap}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default StopwatchCard;

