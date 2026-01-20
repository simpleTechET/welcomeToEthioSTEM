import { Link } from "react-router-dom";

interface Lesson {
  path: string;
  lessonNumber: number;
  title: string;
  description: string;
  emoji: string;
}

interface Topic {
  id: string;
  title: string;
  subtitle: string;
  standards: string;
  color: string;
  borderColor: string;
  lessons: Lesson[];
}

const topics: Topic[] = [
  {
    id: "A",
    title: "Topic A",
    subtitle: "How Many Questions with up to 7 Objects",
    standards: "PK.CC.1, PK.CC.3abc, PK.CC.4",
    color: "bg-amber-50",
    borderColor: "border-amber-300",
    lessons: [
      {
        path: "/3-count-eggs-4",
        lessonNumber: 4,
        title: "Counting Chicks",
        description: "Count to 6 and 7 left to right with fingers",
        emoji: "🐣",
      },
      {
        path: "/3-count-arrays-5",
        lessonNumber: 5,
        title: "Counting in Arrays",
        description: "Count 6 objects in array configurations",
        emoji: "🧦",
      },
    ],
  },
  {
    id: "B",
    title: "Topic B",
    subtitle: "Matching One Numeral with up to 7 Objects",
    standards: "PK.CC.3ab, PK.CC.4",
    color: "bg-purple-50",
    borderColor: "border-purple-300",
    lessons: [
      {
        path: "/3-compose-six-6",
        lessonNumber: 6,
        title: "Partners of 6",
        description: "Compose 6, decompose into two parts, match to numeral 6",
        emoji: "🧱",
      },
      {
        path: "/3-compose-seven-7",
        lessonNumber: 7,
        title: "Partners of 7",
        description: "Compose 7, decompose into two parts, match to numeral 7",
        emoji: "📅",
      },
      {
        path: "/3-circle-count-8",
        lessonNumber: 8,
        title: "Circle Counting",
        description: "Count 6 and 7 objects in circular configurations",
        emoji: "🔵",
      },
      {
        path: "/3-arrange-count-9",
        lessonNumber: 9,
        title: "Arrange & Count",
        description: "Arrange and count 6 and 7 objects in varied configurations",
        emoji: "🐠",
      },
      {
        path: "/3-tally-10",
        lessonNumber: 10,
        title: "Tally Marks",
        description: "Tally 6 and 7 objects using bundled tally marks",
        emoji: "🌾",
      },
      {
        path: "/3-count-out-11",
        lessonNumber: 11,
        title: "Count Out Groups",
        description: "Look at a numeral and count out a group of up to 7 objects",
        emoji: "🐬",
      },
    ],
  },
  {
    id: "C",
    title: "Topic C",
    subtitle: "How Many Questions with up to 8 Objects",
    standards: "PK.CC.1, PK.CC.3abc, PK.CC.4",
    color: "bg-sky-50",
    borderColor: "border-sky-300",
    lessons: [
      {
        path: "/3-introduce-8-12",
        lessonNumber: 12,
        title: "Introduce 8",
        description: "Introduce 8, and relate 8 to 7 and 1 more",
        emoji: "🐙",
      },
      {
        path: "/3-linear-count-13",
        lessonNumber: 13,
        title: "Linear Count to 8",
        description: "Use linear configurations to count 8 in relation to 5",
        emoji: "🪨",
      },
      {
        path: "/3-finger-count-14",
        lessonNumber: 14,
        title: "Finger Counting to 8",
        description: "Count to 8 from left to right with fingers",
        emoji: "🐣",
      },
      {
        path: "/3-array-count-15",
        lessonNumber: 15,
        title: "Array Configurations",
        description: "Count 8 objects in array configurations",
        emoji: "🕷️",
      },
    ],
  },
  {
    id: "D",
    title: "Topic D",
    subtitle: "Matching One Numeral with up to 8 Objects",
    standards: "PK.CC.3ab, PK.CC.4",
    color: "bg-rose-50",
    borderColor: "border-rose-300",
    lessons: [
      {
        path: "/3-compose-8-16",
        lessonNumber: 16,
        title: "Compose & Decompose 8",
        description: "Compose 8, decompose into two parts, match to numeral 8",
        emoji: "🧩",
      },
    ],
  },
  {
    id: "E",
    title: "Topic E",
    subtitle: "How Many Questions with 0 up to 9 Objects",
    standards: "PK.CC.1, PK.CC.3abc, PK.CC.4",
    color: "bg-emerald-50",
    borderColor: "border-emerald-300",
    lessons: [],
  },
  {
    id: "F",
    title: "Topic F",
    subtitle: "Matching One Numeral with 0 up to 9 Objects",
    standards: "PK.CC.3ab, PK.CC.4",
    color: "bg-teal-50",
    borderColor: "border-teal-300",
    lessons: [],
  },
  {
    id: "G",
    title: "Topic G",
    subtitle: "How Many Questions with up to 10 Objects",
    standards: "PK.CC.1, PK.CC.3abc, PK.CC.4",
    color: "bg-indigo-50",
    borderColor: "border-indigo-300",
    lessons: [],
  },
  {
    id: "H",
    title: "Topic H",
    subtitle: "Matching One Numeral with up to 10 Objects",
    standards: "PK.CC.3ab, PK.CC.4",
    color: "bg-fuchsia-50",
    borderColor: "border-fuchsia-300",
    lessons: [],
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

      <div className="container mx-auto px-4 py-12 relative z-10 pb-24">
        <header className="text-center mb-12">
          <h1 className="font-fredoka text-4xl md:text-5xl text-foreground text-shadow-playful mb-4">
            🌟 EthioSTEM PreK Math 🌟
          </h1>
          <p className="font-nunito text-xl text-foreground/80">
            Module 3: Counting to 10
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-6">
          {topics.map((topic) => (
            <div 
              key={topic.id} 
              className={`${topic.color} rounded-2xl shadow-soft overflow-hidden border-2 ${topic.borderColor}`}
            >
              {/* Topic Header */}
              <div className={`p-4 border-b ${topic.borderColor}`}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center font-fredoka text-xl font-bold text-foreground shadow-sm">
                    {topic.id}
                  </span>
                  <div>
                    <h2 className="font-fredoka text-xl text-foreground">{topic.title}</h2>
                    <p className="font-nunito text-sm text-muted-foreground">{topic.subtitle}</p>
                  </div>
                </div>
                <p className="font-nunito text-xs text-muted-foreground mt-2 ml-13">
                  Standards: {topic.standards}
                </p>
              </div>

              {/* Lessons */}
              <div className="p-4">
                {topic.lessons.length > 0 ? (
                  <div className="space-y-3">
                    {topic.lessons.map((lesson) => (
                      <Link key={lesson.path} to={lesson.path}>
                        <div className="bg-white/80 rounded-xl p-4 hover:scale-[1.02] transition-all cursor-pointer shadow-sm flex items-center gap-4 hover:bg-white">
                          <div className="text-4xl">{lesson.emoji}</div>
                          <div className="flex-1">
                            <h3 className="font-fredoka text-lg text-foreground">
                              Lesson {lesson.lessonNumber}: {lesson.title}
                            </h3>
                            <p className="font-nunito text-sm text-muted-foreground">{lesson.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="font-nunito text-muted-foreground text-sm italic">
                      🚧 Lessons coming soon...
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-nunito text-foreground/60 text-sm">
            Module 3 covers 50 instructional days across 8 topics
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
  );
};

export default Index;
