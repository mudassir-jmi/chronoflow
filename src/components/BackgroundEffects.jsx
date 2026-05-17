function BackgroundEffects() {
  return (
    <>
      {/* Top Left Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-30"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
}

export default BackgroundEffects;
