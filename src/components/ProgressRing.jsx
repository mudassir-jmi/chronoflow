function ProgressRing({
  progress = 0,
  size = 260,
  strokeWidth = 10,
  children,
}) {
  const radius = (size - strokeWidth) / 2;

  const circumference = radius * 2 * Math.PI;

  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        {/* Background Circle */}
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress Circle */}
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: "stroke-dashoffset 1s linear",
          }}
        />

        {/* Gradient */}
        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Content */}
      <div className="absolute">
        {children}
      </div>
    </div>
  );
}

export default ProgressRing;

