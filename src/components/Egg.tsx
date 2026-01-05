import { useState } from "react";

interface EggProps {
  index: number;
  isHatched: boolean;
  onHatch: () => void;
  delay?: number;
}

const Egg = ({ index, isHatched, onHatch, delay = 0 }: EggProps) => {
  const [isWiggling, setIsWiggling] = useState(false);

  const handleClick = () => {
    if (!isHatched) {
      setIsWiggling(true);
      setTimeout(() => {
        setIsWiggling(false);
        onHatch();
      }, 300);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Number label */}
      <div className="absolute -top-6 text-lg font-fredoka font-bold text-foreground/70">
        {index + 1}
      </div>

      {/* Egg or Chick */}
      <div
        onClick={handleClick}
        className={`relative transition-all duration-300 ${
          isWiggling ? "animate-wiggle" : ""
        } ${!isHatched ? "hover:scale-105 active:scale-95" : ""}`}
      >
        {!isHatched ? (
          // Egg
          <svg
            width="60"
            height="75"
            viewBox="0 0 60 75"
            className="drop-shadow-lg"
          >
            <ellipse
              cx="30"
              cy="42"
              rx="26"
              ry="32"
              className="fill-egg-cream stroke-egg-shadow"
              strokeWidth="2"
            />
            <ellipse
              cx="22"
              cy="35"
              rx="6"
              ry="10"
              className="fill-white/40"
            />
          </svg>
        ) : (
          // Hatched Chick
          <div className="chick">
            <svg
              width="70"
              height="80"
              viewBox="0 0 70 80"
              className="drop-shadow-lg"
            >
              {/* Broken egg shell bottom */}
              <path
                d="M10 55 Q15 70 35 72 Q55 70 60 55 L55 50 Q50 55 45 48 Q40 52 35 47 Q30 52 25 48 Q20 55 15 50 Z"
                className="fill-egg-cream stroke-egg-shadow"
                strokeWidth="1.5"
              />
              
              {/* Chick body */}
              <ellipse
                cx="35"
                cy="38"
                rx="22"
                ry="24"
                className="fill-chick-yellow"
              />
              
              {/* Chick head */}
              <circle
                cx="35"
                cy="20"
                r="16"
                className="fill-chick-yellow"
              />
              
              {/* Left eye */}
              <circle cx="29" cy="18" r="4" className="fill-foreground" />
              <circle cx="30" cy="17" r="1.5" className="fill-white" />
              
              {/* Right eye */}
              <circle cx="41" cy="18" r="4" className="fill-foreground" />
              <circle cx="42" cy="17" r="1.5" className="fill-white" />
              
              {/* Beak */}
              <path
                d="M35 22 L30 28 L35 26 L40 28 Z"
                className="fill-chick-orange"
              />
              
              {/* Wings */}
              <ellipse
                cx="18"
                cy="40"
                rx="6"
                ry="10"
                className="fill-chick-orange/60"
                transform="rotate(-15 18 40)"
              />
              <ellipse
                cx="52"
                cy="40"
                rx="6"
                ry="10"
                className="fill-chick-orange/60"
                transform="rotate(15 52 40)"
              />
              
              {/* Tuft on head */}
              <path
                d="M32 6 Q35 0 38 6"
                className="stroke-chick-orange fill-none"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Tap hint for unhatched eggs */}
      {!isHatched && (
        <div className="mt-2 text-xs font-nunito text-foreground/50 animate-pulse">
          Tap me!
        </div>
      )}
    </div>
  );
};

export default Egg;
