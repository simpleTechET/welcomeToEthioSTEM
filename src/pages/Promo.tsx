import { ArrowRight, BookOpen, Brain, FlaskConical, GraduationCap, MapPin, Users, CheckCircle2, Quote } from "lucide-react";
import esaLogo from "@/assets/esa-logo.png";
import esaCompound from "@/assets/esa-compound.png";

const Promo = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-inter text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={esaLogo} alt="ESA" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#philosophy" className="hover:text-stone-900 transition-colors">Philosophy</a>
            <a href="#curriculum" className="hover:text-stone-900 transition-colors">Curriculum</a>
            <a href="#campus" className="hover:text-stone-900 transition-colors">Campus</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Inquire</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
                ADDIS ABABA, ETHIOPIA
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-stone-900 mb-6">
                Building the Minds That Will Build
                <span className="italic text-amber-700"> Ethiopia</span>
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                A rigorous, research-backed education grounded in the world's most 
                effective curricula. We prepare students not for tests, but for mastery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-8 py-4 font-medium hover:bg-stone-800 transition-colors"
                >
                  Schedule a Visit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-8 py-4 font-medium hover:border-stone-400 transition-colors"
                >
                  View Curriculum
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-stone-200 -z-10" />
              <img 
                src={esaCompound} 
                alt="Ethiopian STEM Academy Campus" 
                className="w-full shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-6">
                <p className="text-stone-50 text-sm font-medium">
                  Our campus in Addis Ababa — designed for focused learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-8">
              Depth Over Breadth. Mastery Over Memorization.
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Most schools teach wide and shallow. We teach narrow and deep. When a child truly 
              understands <em>why</em> mathematics works—not just how to perform it—they carry that 
              understanding into every problem they'll ever face.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              This is why we've chosen curricula that have been refined over decades: Singapore Math 
              for its problem-solving rigor, Eureka Math for its conceptual coherence, and hands-on 
              science that builds genuine scientific thinking—not just vocabulary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-stone-50 p-8 border border-stone-200">
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Conceptual Understanding</h3>
              <p className="text-stone-600 leading-relaxed">
                Students learn the 'why' before the 'how'. This creates flexible thinkers 
                who can apply knowledge to novel situations.
              </p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Proven Curricula</h3>
              <p className="text-stone-600 leading-relaxed">
                We don't experiment on children. Our curricula are battle-tested across 
                top-performing education systems worldwide.
              </p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Hands-On Science</h3>
              <p className="text-stone-600 leading-relaxed">
                Real experiments, real observations, real conclusions. Science is a practice, 
                not a subject to be memorized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Detail */}
      <section id="curriculum" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
                CURRICULUM FOUNDATIONS
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-8">
                Built on the World's Most Effective Methods
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 bg-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Singapore Mathematics</h3>
                    <p className="text-stone-600 leading-relaxed">
                      The approach that made Singapore #1 globally in math achievement. 
                      Concrete → Pictorial → Abstract progression ensures lasting understanding.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Eureka Math (EngageNY)</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Developed by the Great Minds organization, this curriculum builds 
                      mathematical coherence across grade levels with exceptional depth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Inquiry-Based Science</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Students don't just learn about the scientific method—they live it. 
                      Observation, hypothesis, experimentation, and evidence-based conclusions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-900 text-stone-50 p-10">
              <Quote className="w-10 h-10 text-amber-500 mb-6" />
              <blockquote className="font-playfair text-2xl font-medium leading-relaxed mb-6 italic">
                "The goal of education is not to increase the amount of knowledge but to 
                create the possibilities for a child to invent and discover."
              </blockquote>
              <cite className="text-stone-400 not-italic">— Jean Piaget</cite>
              
              <div className="mt-12 pt-8 border-t border-stone-700">
                <h4 className="text-amber-500 font-medium mb-4">Assessment Philosophy</h4>
                <p className="text-stone-300 leading-relaxed">
                  We use formative assessment to understand where each student is, not 
                  summative testing to rank them. Progress is measured against mastery 
                  standards, not against other children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              WHY FAMILIES CHOOSE US
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900">
              What Distinguishes Ethiopian STEM Academy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Small Class Sizes",
                description: "Maximum 15 students per class ensures every child receives individual attention and no one falls through the cracks."
              },
              {
                title: "Qualified, Trained Teachers",
                description: "Our teachers are specifically trained in the pedagogical methods of our curricula—not just the content."
              },
              {
                title: "Bilingual Instruction",
                description: "Full English immersion with Amharic language support ensures global readiness while honoring cultural identity."
              },
              {
                title: "Character Development",
                description: "Academic excellence without ethical grounding produces clever people, not good ones. We cultivate both."
              },
              {
                title: "Technology as Tool, Not Crutch",
                description: "We use interactive learning apps built on proven curricula—technology that deepens understanding, not replaces teaching."
              },
              {
                title: "Parent Partnership",
                description: "Quarterly conferences, transparent progress reporting, and guidance on how to support learning at home."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border border-amber-100">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={esaCompound} 
                alt="Ethiopian STEM Academy grounds" 
                className="w-full shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
                OUR CAMPUS
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-8">
                A Space Designed for Focused Learning
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Located in Addis Ababa, our campus combines the order and cleanliness 
                that signals excellence with the warmth and greenery that supports 
                growing minds.
              </p>
              <ul className="space-y-4 text-stone-600">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Secure, walled compound with controlled access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Age-appropriate outdoor play and learning areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Dedicated science and discovery spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-amber-500 font-medium tracking-wide text-sm mb-4">
              A NOTE FROM THE FOUNDER
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight mb-8">
              This School Exists Because I Needed It
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              I was fortunate to attend some of Addis Ababa's better private schools. 
              But even there, I saw the gap between what education could be and what 
              it was. Later, watching my mother build and operate a private medical 
              college from nothing, I learned what it takes to create an institution 
              of genuine quality—not a business that merely looks like a school.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Ethiopian STEM Academy is built on that foundation: the world's best 
              educational research, delivered with the operational rigor I witnessed 
              firsthand, in the city I call home.
            </p>
            <p className="text-stone-400 italic">
              — For inquiring parents, I welcome direct conversation about our 
              philosophy and methods.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
                BEGIN THE CONVERSATION
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-8">
                We Select Families as Much as Families Select Us
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Excellence requires alignment. We're looking for parents who understand 
                that real education takes time and partnership—not just tuition.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                If you believe your child deserves depth over breadth, and mastery 
                over memorization, we'd like to meet you.
              </p>
              
              <div className="space-y-4 text-stone-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-100 p-10">
              <h3 className="font-playfair text-2xl font-medium mb-6">Request Information</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Parent Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-600 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-600 transition-colors"
                      placeholder="+251..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Child's Age / Grade Level
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-600 transition-colors"
                    placeholder="e.g., 4 years old, entering Pre-K"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    What matters most to you in your child's education?
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-600 transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-stone-900 text-stone-50 px-8 py-4 font-medium hover:bg-stone-800 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={esaLogo} alt="ESA" className="h-8 w-auto" />
            <span className="text-stone-600 text-sm">
              Ethiopian STEM Academy · Addis Ababa
            </span>
          </div>
          <p className="text-stone-500 text-sm">
            © 2026 Ethiopian STEM Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Promo;
