import { ArrowRight, BookOpen, Brain, FlaskConical, GraduationCap, MapPin, Users, CheckCircle2, Quote, Code, Lightbulb, Languages, Send, ExternalLink, Award, Heart } from "lucide-react";
import esaLogo from "@/assets/esa-logo.png";
import esaCompound from "@/assets/esa-compound.png";
import esaFence from "@/assets/esa-fence.png";
import esaClassroom from "@/assets/esa-classroom.jpg";
import classroom2 from "@/assets/classroom2.jpg";

const curricula = [
  {
    icon: Brain,
    subject: "Mathematics",
    name: "Eureka Math (EngageNY)",
    grades: "K-12",
    description: "The gold standard for conceptual depth and coherence."
  },
  {
    icon: FlaskConical,
    subject: "Science",
    name: "Next Generation Science Standards (NGSS)",
    grades: "K-12",
    description: "Framework with Mystery Science (K-5) and OpenSciEd (6-12) for lesson plans."
  },
  {
    icon: Languages,
    subject: "Literacy/English",
    name: "Core Knowledge Language Arts (CKLA)",
    grades: "K-5",
    description: "Builds background knowledge and skills systematically. EL Education for older grades."
  },
  {
    icon: Code,
    subject: "Computer Science",
    name: "Code.org",
    grades: "K-12",
    description: "Structured, progressive courses from fundamentals to advanced programming."
  },
  {
    icon: Lightbulb,
    subject: "Critical Thinking & Logic",
    name: "Thornburg's Exercises & Critical Thinking Consortium",
    grades: "All Levels",
    description: "Exercises for the Mind and materials that develop analytical reasoning."
  }
];

const differentiators = [
  {
    title: "Small Class Sizes",
    description: "Maximum 15 students per class ensures every child receives individual attention."
  },
  {
    title: "Qualified, Trained Teachers",
    description: "Teachers specifically trained in the pedagogical methods of our curricula."
  },
  {
    title: "Bilingual Instruction",
    description: "Full English immersion with Amharic language support for global readiness."
  },
  {
    title: "Character Development",
    description: "Academic excellence with ethical grounding. We cultivate both."
  },
  {
    title: "Technology as Tool",
    description: "Interactive learning apps built on proven curricula—technology that deepens understanding."
  },
  {
    title: "Parent Partnership",
    description: "Quarterly conferences, transparent progress reporting, and home learning guidance."
  }
];

const Promo = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-inter text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={esaLogo} alt="ESA" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#curriculum" className="hover:text-stone-900 transition-colors">Curriculum</a>
            <a href="#why-us" className="hover:text-stone-900 transition-colors">Why Us</a>
            <a href="#founder" className="hover:text-stone-900 transition-colors">Our Story</a>
            <a href="#connect" className="hover:text-stone-900 transition-colors">Connect</a>
            <a 
              href="/learning" 
              className="text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-1"
            >
              Learning App
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24">
        <div className="relative min-h-[85vh]">
          <img 
            src={esaFence} 
            alt="Ethiopian STEM Academy Campus Entrance" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center min-h-[85vh]">
            <p className="text-amber-400 font-medium tracking-wide text-sm mb-4">
              ADDIS ABABA, ETHIOPIA
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-6 max-w-3xl">
              Building the Minds That Will Build
              <span className="italic text-amber-400"> Ethiopia</span>
            </h1>
            <p className="text-xl text-stone-200 leading-relaxed mb-8 max-w-2xl">
              A rigorous, research-backed education grounded in the world's most effective curricula. 
              We prepare students not for tests, but for mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/ethiostembot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-stone-900 px-8 py-4 font-semibold hover:bg-amber-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                Chat on Telegram
              </a>
              <a 
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-100 px-8 py-4 font-medium hover:bg-white/10 transition-colors"
              >
                View Curriculum
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-6">
              Depth Over Breadth.
              <span className="italic text-amber-700"> Mastery Over Memorization.</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Most schools teach wide and shallow. We teach narrow and deep. When a child truly 
              understands <em>why</em> mathematics works—not just how to perform it—they carry that 
              understanding into every problem they'll ever face.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Our approach is not revolutionary—it's proven. We simply refuse to compromise on 
              the methods that work, even when they're harder to implement.
            </p>
          </div>
          <div className="relative">
            <img 
              src={esaClassroom} 
              alt="Interactive learning environment" 
              className="w-full h-auto shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-amber-500 px-6 py-3 text-stone-900 font-medium text-sm">
              Hands-on learning environment
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              WORLD-CLASS CURRICULA
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-6">
              Built on the World's Most Effective Methods
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We don't experiment on children. Every subject is taught using curricula that have been 
              refined over decades and proven across top-performing education systems worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curricula.map((item, i) => (
              <div key={i} className="bg-white p-8 border border-stone-200 hover:border-amber-200 transition-colors">
                <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-amber-700" />
                </div>
                <p className="text-amber-700 text-sm font-medium mb-1">{item.subject}</p>
                <h3 className="font-playfair text-xl font-medium mb-2">{item.name}</h3>
                <p className="text-stone-500 text-sm mb-3">Grades: {item.grades}</p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div className="mt-16 bg-stone-900 text-stone-50 p-10">
            <Quote className="w-10 h-10 text-amber-500 mb-6" />
            <blockquote className="font-playfair text-2xl font-medium leading-relaxed mb-6 italic max-w-3xl">
              "The goal of education is not to increase the amount of knowledge but to 
              create the possibilities for a child to invent and discover."
            </blockquote>
            <cite className="text-stone-400 not-italic">— Jean Piaget</cite>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              OUR CAMPUS
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-6">
              A Space Designed for
              <span className="italic text-amber-700"> Focused Learning</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Located in Addis Ababa, our campus combines the order and cleanliness that signals 
              excellence with the warmth and greenery that supports growing minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={esaCompound} 
                  alt="Ethiopian STEM Academy main building" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-stone-50 font-medium">Main Campus Building</p>
                  <p className="text-stone-300 text-sm">Secure, walled compound</p>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={classroom2} 
                  alt="Modern classroom interior" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-stone-50 font-medium">Learning Spaces</p>
                  <p className="text-stone-300 text-sm">Interactive, technology-enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              WHY FAMILIES CHOOSE US
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900">
              What Distinguishes Ethiopian STEM Academy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-medium tracking-wide text-sm mb-4">
              FROM THE FOUNDER
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight">
              This School Exists Because
              <span className="italic text-amber-400"> I Needed It</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-stone-300">
            <p>
              I attended some of Addis Ababa's better private schools—and I excelled. Usually ranking 
              first in my class. Mathematics was by far my favorite subject, but I did well in 
              everything: English, chemistry, all of it. I had a highly active brain, and I'd often 
              challenge my teachers themselves. My brain is still somehow that way.
            </p>

            <p>
              But even in those better schools, I saw the gap between what education <em>could</em> be 
              and what it was. Later, through extensive exposure to the formation and operations of a 
              higher education institution, I learned what it takes to create genuine quality—not a 
              business that merely looks like a school.
            </p>

            <div className="flex gap-6 py-6 border-y border-stone-700">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-stone-50 font-medium">Top Academic Performer</p>
                  <p className="text-stone-400 text-sm">Consistently ranked 1st in class</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-stone-50 font-medium">Built Through Resilience</p>
                  <p className="text-stone-400 text-sm">Compassion, patience, and fierce determination</p>
                </div>
              </div>
            </div>

            <p>
              Combined with all the entrepreneurship I absorbed growing up—watching institutions built 
              from the ground up—I have complete faith that I will build and run a premium quality 
              haven for young nerds like me. Children who think differently. Children who need depth, 
              not distraction. Children who deserve teachers who understand that real brilliance needs 
              space to unfold.
            </p>

            <p className="text-amber-400 font-medium text-xl">
              Ethiopian STEM Academy is that haven.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
            BEGIN THE CONVERSATION
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-6">
            We Select Families as Much as Families Select Us
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Excellence requires alignment. We're looking for parents who understand 
            that real education takes time and partnership—not just tuition. If you believe 
            your child deserves depth over breadth, we'd like to meet you.
          </p>
          
          {/* Telegram CTA */}
          <a 
            href="https://t.me/ethiostembot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-stone-900 text-stone-50 px-10 py-5 font-medium hover:bg-stone-800 transition-colors text-lg"
          >
            <Send className="w-5 h-5" />
            Message Us on Telegram
          </a>
          <p className="text-stone-500 text-sm mt-4">
            @ethiostembot — Fast, direct, no forms
          </p>

          {/* Social & Digital Links */}
          <div className="mt-16 pt-12 border-t border-stone-300">
            <p className="text-stone-500 text-sm font-medium mb-6">EXPLORE MORE</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/learning"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 bg-white text-stone-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Try Our Learning App
              </a>
              <a 
                href="https://t.me/ethiostembot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 bg-white text-stone-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={esaLogo} alt="ESA" className="h-10 w-auto" />
              <div>
                <p className="font-medium text-stone-900">Ethiopian STEM Academy</p>
                <p className="text-stone-500 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <a href="/learning" className="hover:text-stone-700 transition-colors">Learning App</a>
              <a href="https://t.me/ethiostembot" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">Telegram</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200 text-center">
            <p className="text-stone-400 text-sm">
              © 2026 Ethiopian STEM Academy. All rights reserved.
            </p>
            <p className="text-stone-400 text-xs mt-2">
              የኢትዮጵያ ስቴም አካዳሚ — Excellence through depth
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Promo;
