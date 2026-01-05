interface FingerCounterProps {
  count: number;
  maxCount?: number;
}

const FingerCounter = ({ count, maxCount = 7 }: FingerCounterProps) => {
  // Left hand: pinky(0), ring(1), middle(2), index(3), thumb(4)
  // Right hand: thumb(5), index(6)
  const fingers = [
    { hand: "left", name: "pinky", position: 0 },
    { hand: "left", name: "ring", position: 1 },
    { hand: "left", name: "middle", position: 2 },
    { hand: "left", name: "index", position: 3 },
    { hand: "left", name: "thumb", position: 4 },
    { hand: "right", name: "thumb", position: 5 },
    { hand: "right", name: "index", position: 6 },
  ];

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
      <div className="text-center mb-3">
        <h3 className="font-fredoka text-lg text-foreground">
          Count with your fingers!
        </h3>
        <p className="text-sm text-muted-foreground font-nunito">
          Left to right, the Math Way
        </p>
      </div>

      <div className="flex justify-center items-end gap-1">
        {/* Left hand */}
        <div className="flex items-end gap-1 mr-4">
          {fingers.slice(0, 5).map((finger, idx) => {
            const isActive = idx < count;
            const heights = [32, 40, 48, 44, 36]; // Finger heights
            
            return (
              <div
                key={`left-${finger.name}`}
                className="flex flex-col items-center"
              >
                <div
                  className={`finger-dot w-6 rounded-t-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary finger-dot active"
                      : "bg-muted"
                  }`}
                  style={{ height: `${heights[idx]}px` }}
                />
                {isActive && (
                  <span className="text-xs font-bold text-primary mt-1">
                    {idx + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-12 bg-border mx-2" />

        {/* Right hand (only first 2 for counting to 7) */}
        <div className="flex items-end gap-1 ml-4">
          {fingers.slice(5, maxCount).map((finger, idx) => {
            const actualIdx = idx + 5;
            const isActive = actualIdx < count;
            const heights = [36, 44]; // Thumb and index
            
            return (
              <div
                key={`right-${finger.name}`}
                className="flex flex-col items-center"
              >
                <div
                  className={`finger-dot w-6 rounded-t-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary finger-dot active"
                      : "bg-muted"
                  }`}
                  style={{ height: `${heights[idx]}px` }}
                />
                {isActive && (
                  <span className="text-xs font-bold text-primary mt-1">
                    {actualIdx + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hand labels */}
      <div className="flex justify-center gap-16 mt-2 text-xs text-muted-foreground font-nunito">
        <span>Left hand</span>
        <span>Right hand</span>
      </div>
    </div>
  );
};

export default FingerCounter;
