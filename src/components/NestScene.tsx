import { useState, useEffect } from "react";
import Egg from "./Egg";
import FingerCounter from "./FingerCounter";
import { Button } from "./ui/button";
import { RotateCcw, Volume2 } from "lucide-react";

const NestScene = () => {
  const [hatchedEggs, setHatchedEggs] = useState<boolean[]>(
    new Array(7).fill(false)
  );
  const [showCelebration, setShowCelebration] = useState(false);

  const hatchedCount = hatchedEggs.filter(Boolean).length;

  const handleHatch = (index: number) => {
    // Only allow hatching in order (left to right)
    const expectedIndex = hatchedEggs.findIndex((hatched) => !hatched);
    if (index === expectedIndex) {
      const newHatched = [...hatchedEggs];
      newHatched[index] = true;
      setHatchedEggs(newHatched);

      // Speak the number
      speakNumber(index + 1);
    }
  };

  const speakNumber = (num: number) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(num.toString());
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      window.speechSynthesis.speak(utterance);
    }
  };

  const resetGame = () => {
    setHatchedEggs(new Array(7).fill(false));
    setShowCelebration(false);
  };

  useEffect(() => {
    if (hatchedCount === 7) {
      setShowCelebration(true);
      if ("speechSynthesis" in window) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(
            "Wonderful! You counted to seven!"
          );
          utterance.rate = 0.9;
          utterance.pitch = 1.1;
          window.speechSynthesis.speak(utterance);
        }, 500);
      }
    }
  }, [hatchedCount]);

  return (
    <div className="min-h-screen gradient-sky overflow-hidden relative">
      {/* Clouds */}
      <div className="absolute top-8 left-10 w-20 h-10 bg-white/60 rounded-full blur-sm animate-float" />
      <div
        className="absolute top-16 right-20 w-28 h-12 bg-white/50 rounded-full blur-sm animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-24 left-1/3 w-16 h-8 bg-white/40 rounded-full blur-sm animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Sun */}
      <div className="absolute top-6 right-8 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center">
        <div className="w-12 h-12 bg-primary/80 rounded-full" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="font-fredoka text-3xl md:text-4xl text-foreground text-shadow-playful mb-2">
            🐣 Counting Chicks! 🐣
          </h1>
          <p className="font-nunito text-lg text-foreground/80">
            Lesson 4: Count to 6 and 7 with your fingers
          </p>
        </header>

        {/* Instructions */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 mb-6 max-w-2xl mx-auto shadow-soft">
          <p className="font-nunito text-center text-foreground">
            <span className="font-bold text-primary">Tap the eggs</span> from
            left to right to hatch the baby chicks! 🐥
          </p>
          <p className="font-nunito text-center text-muted-foreground text-sm mt-1">
            Count each chick as it hatches, starting with your left pinky finger.
          </p>
        </div>

        {/* Finger Counter */}
        <div className="max-w-md mx-auto mb-6">
          <FingerCounter count={hatchedCount} />
        </div>

        {/* Count Display */}
        <div
          className={`text-center mb-6 ${
            showCelebration ? "animate-celebrate" : ""
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-soft">
            <span className="font-nunito text-foreground">Chicks hatched:</span>
            <span className="font-fredoka text-4xl text-primary">
              {hatchedCount}
            </span>
            <span className="font-nunito text-foreground">/ 7</span>
          </div>
        </div>

        {/* Nest with Eggs */}
        <div className="relative max-w-3xl mx-auto">
          {/* Nest base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl">
            <svg viewBox="0 0 400 80" className="w-full">
              {/* Nest straws */}
              <ellipse
                cx="200"
                cy="50"
                rx="190"
                ry="30"
                className="fill-nest-brown"
              />
              <ellipse
                cx="200"
                cy="45"
                rx="180"
                ry="25"
                className="fill-nest-light"
              />
              {/* Straw texture lines */}
              {[...Array(20)].map((_, i) => (
                <line
                  key={i}
                  x1={30 + i * 18}
                  y1={35 + Math.sin(i) * 5}
                  x2={35 + i * 18}
                  y2={55 + Math.cos(i) * 3}
                  className="stroke-nest-brown/50"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          {/* Eggs row */}
          <div className="relative z-10 flex justify-center items-end gap-3 md:gap-5 pb-8 pt-12">
            {hatchedEggs.map((isHatched, index) => (
              <Egg
                key={index}
                index={index}
                isHatched={isHatched}
                onHatch={() => handleHatch(index)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Celebration message */}
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center bg-foreground/20 backdrop-blur-sm z-50">
            <div className="bg-card rounded-3xl p-8 text-center shadow-lg max-w-md mx-4 animate-celebrate">
              <div className="text-6xl mb-4">🎉🐣🎉</div>
              <h2 className="font-fredoka text-3xl text-primary mb-2">
                Wonderful!
              </h2>
              <p className="font-nunito text-lg text-foreground mb-6">
                You counted to <span className="font-bold text-primary">7</span>!
                <br />
                All the baby chicks have hatched!
              </p>
              <Button
                onClick={resetGame}
                size="lg"
                className="font-fredoka text-lg gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Play Again!
              </Button>
            </div>
          </div>
        )}

        {/* Control buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={resetGame}
            className="font-nunito gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </Button>
          <Button
            variant="secondary"
            onClick={() => speakNumber(hatchedCount)}
            className="font-nunito gap-2"
          >
            <Volume2 className="w-4 h-4" />
            Hear Count
          </Button>
        </div>

        {/* Grass at bottom */}
        <div className="fixed bottom-0 left-0 right-0 h-16 gradient-grass z-0">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
            {[...Array(30)].map((_, i) => (
              <path
                key={i}
                d={`M${i * 3.5} 20 Q${i * 3.5 + 1} 10 ${i * 3.5 + 1.5} ${5 + Math.random() * 5} Q${i * 3.5 + 2} 10 ${i * 3.5 + 3} 20`}
                className="fill-grass-dark/60 grass-blade"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NestScene;
