import { useState, useCallback } from 'react';

// Questions data - flirty and funny!
const questions = [
  {
    emoji: "🧸",
    title: "Shuttumanii....! 🌹",
    question: "Will You Be My Valentine? 💕",
    subtext: "I promise to give you all my love, hugs, and unlimited snacks! 🍫🍕",
    yesText: "Yes! 💕",
    noTexts: ["No 😢", "Shuttuu....? 🥺", "Shuuuuuuu...? 😭", "Think again! 💔", "shuttuuuuu please? 🙏", "Don't do this! 😩", "I'll be sad! 😢", "NOOOOO! 😭😭😭"],
    icons: ["🌸", "💐", "🎀", "🍫", "💌"],
  },
  {
    emoji: "🤗",
    title: "Yay! One more thing... 🥰",
    question: "Can I Hold Your Hand Forever? 🤝",
    subtext: "My hands are cold and lonely without yours! Plus I need someone to open jars 💪",
    yesText: "Hold it! ✋💕",
    noTexts: ["Hmm no 🤔", "My hands are busy! 🙄", "What hands? 👀", "They're invisible! 🫥", "Okay fine maybe... 😏"],
    icons: ["🤲", "✋", "🫱", "🫲", "💞"],
  },
  {
    emoji: "😘",
    title: "Getting brave here... 💋",
    question: "Can I Steal a Kiss? 💋",
    subtext: "Just a tiny one... or maybe a big one... okay ALL the kisses! 😍",
    yesText: "Muah! 💋😘",
    noTexts: ["Eww cooties! 🤢", "Personal space! 📏", "After mints only! 🌿", "Maybe one... 👉👈", "Okay fine! 😏"],
    icons: ["💋", "😘", "💄", "👄", "💕"],
  },
  {
    emoji: "🍦",
    title: "Important question! 🚨",
    question: "Will You Let Me Buy You Ice Cream? 🍨",
    subtext: "And by 'buy you' I mean we share and I eat 80% of it... 😋",
    yesText: "Ice cream! 🍦🎉",
    noTexts: ["I'm on a diet 🥗", "Lactose intolerant 🐄", "Only if it's free 💸", "Make it chocolate! 🍫"],
    icons: ["🍦", "🍨", "🍧", "🧁", "🍰"],
  },
  {
    emoji: "📺",
    title: "Cozy time? 🛋️",
    question: "Netflix and Cuddle? 🎬💕",
    subtext: "I promise not to hog the blanket... (that's a lie) 😈",
    yesText: "Cuddle me! 🥰",
    noTexts: ["I have homework 📚", "My cat is jealous 🐱", "Only documentaries! 🎬", "Bring snacks first! 🍿"],
    icons: ["📺", "🍿", "🛋️", "🧸", "💤"],
  },
  {
    emoji: "💍",
    title: "Last but not least... 👀",
    question: "Be Mine Forever? ♾️💕",
    subtext: "Not legally binding... but emotionally? VERY binding! 🔐",
    yesText: "FOREVER! 💕♾️",
    noTexts: ["Define forever... ⏳", "Let me check my calendar 📅", "Terms & conditions? 📝", "Only if you cook! 👨‍🍳"],
    icons: ["💍", "♾️", "🔐", "💕", "🏠"],
  },
];

// Floating hearts component
function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 10 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float text-pink-400 opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
}

// Confetti explosion component
function ConfettiExplosion() {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 800,
    y: (Math.random() - 0.5) * 800,
    rotate: Math.random() * 720,
    color: ['#ff6b6b', '#ff69b4', '#ff1493', '#ff85a2', '#ffd700', '#ff4500'][Math.floor(Math.random() * 6)],
    size: 8 + Math.random() * 12,
    delay: Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti"
          style={{
            '--tx': `${p.x}px`,
            '--ty': `${p.y}px`,
            '--rotate': `${p.rotate}deg`,
            animationDelay: `${p.delay}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

// Sad rain tears
function SadRain() {
  const tears = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 1 + Math.random() * 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {tears.map((tear) => (
        <div
          key={tear.id}
          className="absolute animate-tear text-blue-400 text-2xl"
          style={{
            left: `${tear.left}%`,
            top: '-20px',
            animationDelay: `${tear.delay}s`,
            animationDuration: `${tear.duration}s`,
          }}
        >
          💧
        </div>
      ))}
    </div>
  );
}

// Heart burst animation
function HeartBurst() {
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (i / 30) * 360,
    distance: 100 + Math.random() * 200,
    size: 20 + Math.random() * 30,
    delay: Math.random() * 0.3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-burst"
          style={{
            '--angle': `${heart.angle}deg`,
            '--distance': `${heart.distance}px`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          } as React.CSSProperties}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}

export function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showSadFace, setShowSadFace] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showTransition, setShowTransition] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const current = questions[currentQuestion];

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    setNoButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
    setNoCount((prev) => Math.min(prev + 1, current.noTexts.length - 1));
    setYesButtonSize((prev) => prev + 0.15);
    setShowSadFace(true);
    setTimeout(() => setShowSadFace(false), 1000);
  }, [current.noTexts.length]);

  const handleYes = () => {
    setAnswers([...answers, current.yesText]);
    setShowTransition(true);
    // No auto-advance - user will click button to continue
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setNoCount(0);
      setNoButtonPosition({ x: 0, y: 0 });
      setYesButtonSize(1);
      setShowTransition(false);
    } else {
      setCompleted(true);
    }
  };

  // Final celebration screen
  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center p-4 overflow-hidden relative font-poppins">
        <ConfettiExplosion />
        <HeartBurst />
        
        <div className="text-center z-10 animate-bounce-in max-w-2xl">
          <div className="text-8xl md:text-9xl mb-6 animate-pulse">
            🥰
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-dancing drop-shadow-lg">
            WE'RE OFFICIAL! 💕
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-6 animate-pulse">
            You said YES to everything! 😍
          </p>
          
          {/* Summary of answers */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-6 text-left">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Your Promises 📜💕</h3>
            <div className="space-y-2">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-center gap-2 text-white animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="text-2xl">✅</span>
                  <span>{questions[index].question.replace(/\?.*/, '')} - {answer}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-6xl md:text-8xl animate-wiggle">
            💑💕✨
          </div>
          <p className="text-lg md:text-xl text-white/80 mt-8 animate-fade-in">
            Best day ever! Now let's go get that ice cream! 🍦
          </p>
          
          {/* Love contract */}
          <div className="mt-8 bg-white/10 rounded-xl p-4 backdrop-blur-lg border border-white/30">
            <p className="text-white font-dancing text-2xl">
              ✨ Official Love Contract ✨
              <br />
              <span className="text-lg">Valid from now until forever ♾️</span>
            </p>
          </div>
          
          {/* Floating celebration emojis */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-up text-4xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: '-50px',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {['💕', '❤️', '💖', '💗', '💘', '✨', '🌹', '🍦', '💋', '💍'][Math.floor(Math.random() * 10)]}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Transition screen between questions - with photo and love frame!
  if (showTransition) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center p-4 overflow-hidden relative font-poppins">
        <ConfettiExplosion />
        <HeartBurst />
        
        <div className="text-center z-10 animate-bounce-in">
          {/* Photo with Love Frame */}
          <div className="relative inline-block mb-6">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-400 to-pink-500 rounded-3xl blur-xl opacity-60 animate-pulse scale-110" />
            
            {/* Love Frame Container */}
            <div className="relative">
              {/* Decorative corner hearts */}
              <div className="absolute -top-6 -left-6 text-4xl animate-bounce z-20">💕</div>
              <div className="absolute -top-6 -right-6 text-4xl animate-bounce z-20" style={{ animationDelay: '0.2s' }}>💕</div>
              <div className="absolute -bottom-6 -left-6 text-4xl animate-bounce z-20" style={{ animationDelay: '0.4s' }}>💗</div>
              <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce z-20" style={{ animationDelay: '0.6s' }}>💗</div>
              
              {/* Roses decoration */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl z-20 flex gap-1">
                <span className="animate-wiggle">🌹</span>
                <span className="animate-wiggle" style={{ animationDelay: '0.2s' }}>💐</span>
                <span className="animate-wiggle" style={{ animationDelay: '0.4s' }}>🌹</span>
              </div>
              
              {/* Frame border with gradient */}
              <div className="relative p-3 bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 rounded-2xl shadow-2xl">
                {/* Inner white border */}
                <div className="p-2 bg-white rounded-xl">
                  {/* Photo Container - Heart shaped mask option or rounded */}
                  <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-xl bg-gradient-to-br from-pink-200 to-red-200">
                    {/* Placeholder romantic image - can be replaced with actual photo */}
                    <img 
                      src="/image.jpg"
                      alt="Our Love"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient with emoji if image fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-300 to-red-300">
                      <span className="text-8xl">💑</span>
                    </div>
                    
                    {/* Sparkle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
                    <div className="absolute top-2 right-2 text-2xl animate-spin-slow">✨</div>
                    <div className="absolute bottom-2 left-2 text-2xl animate-spin-slow" style={{ animationDelay: '0.5s' }}>✨</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom roses decoration */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-3xl z-20 flex gap-1">
                <span className="animate-wiggle" style={{ animationDelay: '0.3s' }}>🌹</span>
                <span className="animate-pulse text-2xl">💖</span>
                <span className="animate-wiggle" style={{ animationDelay: '0.5s' }}>🌹</span>
              </div>
            </div>
            
            {/* Floating hearts around frame */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl animate-float-around"
                style={{
                  top: `${50 + 45 * Math.sin((i / 8) * Math.PI * 2)}%`,
                  left: `${50 + 45 * Math.cos((i / 8) * Math.PI * 2)}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {['❤️', '💕', '💖', '💗', '💘', '💝', '❣️', '💓'][i]}
              </div>
            ))}
          </div>
          
          {/* Text below photo */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-dancing drop-shadow-lg animate-pulse">
            {['YAAAY!', 'Perfect!', 'Mwah!', 'Yummy!', 'Cozy!', 'FOREVER!'][currentQuestion]} 💕
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            {['You made me so happy!', 'Hand in hand forever!', 'Sweetest kiss ever!', 'Ice cream date it is!', 'Cozy nights await!', 'Best decision ever!'][currentQuestion]} 
            {['🥰', '🤝', '💋', '🍦', '🛋️', '💍'][currentQuestion]}
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-2">
            {currentQuestion < questions.length - 1 ? 'But wait... there\'s more! 😏' : 'You\'re the best! 🏆'}
          </p>
          
          {/* Progress dots */}
          <div className="mt-4 flex justify-center gap-2 mb-6">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index <= currentQuestion ? 'bg-white scale-125 shadow-lg' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Swipe/Next Button */}
          <button
            onClick={handleNextQuestion}
            className="group relative mt-4 px-10 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/50 text-white font-bold rounded-full shadow-2xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 text-lg md:text-xl overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              {currentQuestion < questions.length - 1 ? (
                <>
                  <span>Next Question</span>
                  <span className="inline-flex items-center animate-bounce-x">
                    <span className="text-2xl">👉</span>
                    <span className="text-xl">💕</span>
                  </span>
                </>
              ) : (
                <>
                  <span>See Our Love Contract</span>
                  <span className="text-2xl animate-pulse">💍✨</span>
                </>
              )}
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </button>

          {/* Swipe hint text */}
          <p className="mt-4 text-white/60 text-sm animate-pulse">
            Tap to continue 💫
          </p>
        </div>
        
        {/* Extra floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-up text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-50px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {['💕', '❤️', '💖', '💗', '✨', '🌹'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-red-100 flex items-center justify-center p-4 overflow-hidden relative font-poppins">
      <FloatingHearts />
      {showSadFace && <SadRain />}
      
      {/* Sad face popup */}
      {showSadFace && (
        <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
          <div className="text-9xl animate-sad-shake">
            😭
          </div>
        </div>
      )}
      
      {/* Progress indicator */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index < currentQuestion ? 'bg-green-500' : index === currentQuestion ? 'bg-pink-500 scale-125 animate-pulse' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full mx-4 relative z-10 border border-pink-200 animate-fade-in" key={currentQuestion}>
        {/* Decorative hearts */}
        <div className="absolute -top-6 -left-6 text-5xl animate-bounce">💝</div>
        <div className="absolute -top-6 -right-6 text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>💝</div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>💘</div>
        
        {/* Question number badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        
        {/* Cute character */}
        <div className="text-center mb-6 mt-4">
          <div className="text-7xl md:text-8xl animate-wiggle inline-block">
            {current.emoji}
          </div>
          <div className="text-4xl mt-2 animate-pulse">
            💕
          </div>
        </div>
        
        {/* Main question */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 font-dancing">
          {current.title}
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-6 font-dancing">
          {current.question}
        </h2>
        
        {/* Cute message */}
        <p className="text-center text-gray-600 mb-6 text-base md:text-lg">
          {current.subtext}
        </p>
        
        {/* Funny graphics */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 text-3xl md:text-4xl">
          {current.icons.map((icon, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>{icon}</span>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
          <button
            onClick={handleYes}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg md:text-xl animate-pulse-slow relative overflow-hidden group"
            style={{ transform: `scale(${yesButtonSize})` }}
          >
            <span className="relative z-10">{current.yesText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button
            onClick={moveNoButton}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="px-8 py-4 bg-gray-200 text-gray-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg md:text-xl relative"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {current.noTexts[noCount]}
          </button>
        </div>
        
        {/* Counter message */}
        {noCount > 0 && (
          <p className="text-center text-pink-500 mt-6 animate-bounce text-base md:text-lg font-semibold">
            {noCount >= 3 
              ? "The 'Yes' button is getting bigger... just saying! 😏" 
              : "Come on, you know you want to! 🥺"}
          </p>
        )}
        
        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-6 gap-2 text-2xl">
          <span className="animate-wiggle">🐻</span>
          <span className="animate-pulse">❤️</span>
          <span className="animate-wiggle" style={{ animationDelay: '0.5s' }}>🐰</span>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="fixed bottom-4 left-4 text-4xl animate-bounce hidden md:block">🌹</div>
      <div className="fixed bottom-4 right-4 text-4xl animate-bounce hidden md:block" style={{ animationDelay: '0.3s' }}>🌹</div>
      <div className="fixed top-4 left-4 text-3xl animate-spin-slow hidden md:block">✨</div>
      <div className="fixed top-4 right-4 text-3xl animate-spin-slow hidden md:block">✨</div>
    </div>
  );
}
