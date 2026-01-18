import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    path: "/3-count-eggs-4",
    title: "Lesson 4: Counting Chicks",
    description: "Count to 6 and 7 left to right with fingers",
    emoji: "🐣",
    color: "bg-amber-100",
  },
  {
    path: "/3-count-arrays-5",
    title: "Lesson 5: Counting in Arrays",
    description: "Count 6 objects in array configurations",
    emoji: "🧦",
    color: "bg-teal-100",
  },
  {
    path: "/3-compose-six-6",
    title: "Lesson 6: Partners of 6",
    description: "Compose 6, decompose into two parts, match to numeral 6",
    emoji: "🧱",
    color: "bg-purple-100",
  },
  {
    path: "/3-compose-seven-7",
    title: "Lesson 7: Partners of 7",
    description: "Compose 7, decompose into two parts, match to numeral 7",
    emoji: "📅",
    color: "bg-violet-100",
  },
  {
    path: "/3-circle-count-8",
    title: "Lesson 8: Circle Counting",
    description: "Count 6 and 7 objects in circular configurations",
    emoji: "🔵",
    color: "bg-sky-100",
  },
  {
    path: "/3-arrange-count-9",
    title: "Lesson 9: Arrange & Count",
    description: "Arrange and count 6 and 7 objects in varied configurations",
    emoji: "🐠",
    color: "bg-cyan-100",
  },
  {
    path: "/3-tally-10",
    title: "Lesson 10: Tally Marks",
    description: "Tally 6 and 7 objects using bundled tally marks",
    emoji: "🌾",
    color: "bg-amber-100",
  },
  {
    path: "/3-count-out-11",
    title: "Lesson 11: Count Out Groups",
    description: "Look at a numeral and count out a group of up to 7 objects",
    emoji: "🐬",
    color: "bg-blue-100",
  },
  {
    path: "/3-introduce-8-12",
    title: "Lesson 12: Introduce 8",
    description: "Introduce 8, and relate 8 to 7 and 1 more",
    emoji: "🐙",
    color: "bg-purple-100",
  },
  {
    path: "/3-linear-count-13",
    title: "Lesson 13: Linear Count to 8",
    description: "Use linear configurations to count 8 in relation to 5",
    emoji: "🪨",
    color: "bg-stone-100",
  },
  {
    path: "/3-finger-count-14",
    title: "Lesson 14: Finger Counting to 8",
    description: "Count to 8 from left to right with fingers",
    emoji: "🐣",
    color: "bg-yellow-100",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-sky overflow-hidden relative">
      {/* Clouds */}
      <div className="absolute top-8 left-10 w-20 h-10 bg-white/60 rounded-full blur-sm animate-float" />
      <div className="absolute top-16 right-20 w-28 h-12 bg-white/50 rounded-full blur-sm animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-24 left-1/3 w-16 h-8 bg-white/40 rounded-full blur-sm animate-float" style={{ animationDelay: "0.5s" }} />

      {/* Sun */}
      <div className="absolute top-6 right-8 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center">
        <div className="w-12 h-12 bg-primary/80 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <h1 className="font-fredoka text-4xl md:text-5xl text-foreground text-shadow-playful mb-4">
            🌟 EthioSTEM PreK Math 🌟
          </h1>
          <p className="font-nunito text-xl text-foreground/80">
            Module 3: Counting to 10
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft mb-8">
            <h2 className="font-fredoka text-2xl text-foreground mb-6 text-center">Choose a Lesson</h2>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Link key={lesson.path} to={lesson.path}>
                  <div className={`${lesson.color} rounded-2xl p-5 hover:scale-[1.02] transition-all cursor-pointer shadow-soft flex items-center gap-4`}>
                    <div className="text-5xl">{lesson.emoji}</div>
                    <div>
                      <h3 className="font-fredoka text-xl text-foreground">{lesson.title}</h3>
                      <p className="font-nunito text-muted-foreground">{lesson.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="font-nunito text-foreground/60 text-sm">
              More lessons coming soon! 🚀
            </p>
          </div>
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

export default Index;
