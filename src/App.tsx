import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Terminal,
  Flame,
  Bomb,
  Ghost,
  Cpu,
  Skull,
  PartyPopper,
  Rocket
} from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [showNotSure, setShowNotSure] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Meme loading messages
  const loadingMessages = [
    "Downloading more RAM...",
    "Mining Dogecoin...",
    "Asking the AI if it's sentient...",
    "Deleting System32 (jk)...",
    "Consulting the Elder Gods...",
    "Vibe checking your CPU..."
  ];

  const [currentLoadMsg, setCurrentLoadMsg] = useState(loadingMessages[0]);

  useEffect(() => {
    // Cycle through funny messages while loading
    const msgInterval = setInterval(() => {
      setCurrentLoadMsg(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    }, 400);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(msgInterval);
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(msgInterval);
    };
  }, []);

  const handleTurnOff = () => {
    setClickCount(prev => prev + 1);
    if (clickCount > 2) {
      alert("⚠️ BRUH. YOU CAN'T JUST TURN IT OFF. IT'S THE INTERNET. ⚠️");
    }
  };

  const diagnosticsData = [
    { label: 'Vibe Check', value: 'PASSED ✅', status: 'success' },
    { label: 'Rizz Level', value: 'UNSPOKEN', status: 'success' },
    { label: 'Main Character Energy', value: '100%', status: 'success' },
    { label: 'Copium Levels', value: '0%', status: 'success' },
    { label: 'GPU Temp', value: 'SHEESH 🔥', status: 'warning' },
    { label: 'Bitcoins Mined', value: 'NOPE', status: 'error' },
  ];

  const testimonials = [
    {
      name: "Doge",
      role: "CEO of Wow",
      content: "Much power. Very on. Such electricity. Wow.",
      rating: 5
    },
    {
      name: "Gigachad",
      role: "Average Enjoyer",
      content: "Yes, I check if my computer is on every morning. How could you tell?",
      rating: 5
    },
    {
      name: "Deleted User",
      role: "Ohio Resident",
      content: "Wait, you guys have computers?",
      rating: 1
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-meme overflow-x-hidden selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <nav className="bg-zinc-900 border-b-4 border-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 animate-bounce">
              <Terminal className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                COMPUTOR.EXE
              </span>
            </div>
            <div className="hidden md:flex space-x-8 font-bold">
              <a href="#" className="hover:text-pink-500 hover:underline decoration-wavy transition-all">HOME 🏠</a>
              <a href="#diagnostics" className="hover:text-yellow-400 hover:underline decoration-wavy transition-all">STATS 📈</a>
              <a href="#testimonials" className="hover:text-blue-400 hover:underline decoration-wavy transition-all">FAM ❤️</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background chaos */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-500 rounded-full blur-[100px] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-yellow-400 text-black font-black transform -rotate-2 rounded-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            ✨ OFFICIAL VERIFICATION TOOL ✨
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            IS THIS THING
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-rainbow">
              ACTUALLY ON??
            </span>
          </h1>
          
          {/* Main Answer */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-zinc-900 border-2 border-white/20 rounded-3xl p-12 mb-12 max-w-2xl mx-auto shadow-2xl">
              {isLoading ? (
                <div className="flex flex-col items-center space-y-6">
                  <div className="animate-spin rounded-full h-20 w-20 border-8 border-t-pink-500 border-r-purple-500 border-b-yellow-500 border-l-blue-500"></div>
                  <p className="text-2xl font-bold animate-pulse text-green-400 font-mono">
                    {`> ${currentLoadMsg}`}
                  </p>
                </div>
              ) : (
                <div className="animate-fade-in transform transition-all hover:scale-105 duration-300">
                  <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600 mb-6 drop-shadow-lg">
                    YEET
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-2xl font-bold bg-white/10 py-3 px-6 rounded-xl mx-auto w-fit border border-white/20">
                    <Rocket className="h-8 w-8 text-orange-500 animate-bounce" />
                    <span>SYSTEM IS GOATED 🐐</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setShowNotSure(true)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-xl border-b-4 border-zinc-950 active:border-b-0 active:translate-y-1 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Ghost className="h-6 w-6" />
              <span>Am I Real? 👻</span>
            </button>
            <button
              onClick={handleTurnOff}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center group"
            >
              <Bomb className="h-6 w-6 group-hover:animate-shake" />
              <span>Rage Quit {clickCount > 0 && `(x${clickCount})`}</span>
            </button>
            <button
              onClick={() => setShowDiagnostics(!showDiagnostics)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl border-b-4 border-blue-800 active:border-b-0 active:translate-y-1 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Cpu className="h-6 w-6" />
              <span>Nerd Stats 🤓</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee/Stats Bar */}
      <div className="bg-yellow-400 py-4 overflow-hidden transform -skew-y-2 border-y-4 border-black mb-16">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap text-black font-black text-xl">
          <span>🔋 UPTIME: FOREVER</span>
          <span>⚡ POWER: OVER 9000</span>
          <span>🛑 ERRORS: ZERO (TRUST ME)</span>
          <span>💻 RGB: MAXIMUM</span>
          <span>🚀 TO THE MOON</span>
          <span>🔋 UPTIME: FOREVER</span>
          <span>⚡ POWER: OVER 9000</span>
          <span>🛑 ERRORS: ZERO (TRUST ME)</span>
        </div>
      </div>

      {/* Diagnostics Panel */}
      {showDiagnostics && (
        <div id="diagnostics" className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              BIG BRAIN ANALYTICS 🧠
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosticsData.map((item, index) => (
                <div key={index} className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-6 hover:border-pink-500 transition-colors hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-zinc-400 font-mono">{item.label}</h3>
                    {item.status === 'success' && <PartyPopper className="h-6 w-6 text-green-500 group-hover:animate-spin" />}
                    {item.status === 'warning' && <Flame className="h-6 w-6 text-orange-500 animate-pulse" />}
                    {item.status === 'error' && <Skull className="h-6 w-6 text-red-500 animate-bounce" />}
                  </div>
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="w-full bg-zinc-800 rounded-full h-4 mt-4 overflow-hidden border border-zinc-700">
                    <div className={`h-full rounded-full w-full ${
                      item.status === 'success' ? 'bg-green-500' : 
                      item.status === 'warning' ? 'bg-orange-500' : 'bg-red-500'
                    } relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div id="testimonials" className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12 border-b-4 border-yellow-400 inline-block mx-auto px-8 pb-2">
            THE SQUAD SPEAKS 🗣️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                <div className="flex mb-4 text-2xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="grayscale hover:grayscale-0 transition-all cursor-default">
                      {i < testimonial.rating ? '⭐' : '💀'}
                    </span>
                  ))}
                </div>
                <p className="text-xl mb-6 font-medium">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500"></div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-bounce inline-block">
            <Zap className="h-12 w-12 text-yellow-400 mx-auto" />
          </div>
          <p className="text-zinc-500 font-mono mb-4">
            No electrons were harmed in the making of this website.
          </p>
          <div className="text-xs text-zinc-700">
            &copy; 2025 COMPUTOR.EXE // DON'T STEAL MY NFTS // HODL
          </div>
        </div>
      </footer>

      {/* Not Sure Modal */}
      {showNotSure && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-zinc-900 border-4 border-pink-500 rounded-3xl p-8 max-w-md w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500"></div>
            <button
              onClick={() => setShowNotSure(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white hover:rotate-90 transition-all"
            >
              <span className="text-2xl">✖️</span>
            </button>
            
            <div className="text-center">
              <div className="text-6xl mb-6 animate-shake">🤔</div>
              <h3 className="text-3xl font-black mb-4 uppercase italic">Bruh Moment</h3>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                Bestie, you are literally reading pixels on a screen right now. 
                <br/><br/>
                <span className="bg-yellow-400 text-black px-2 font-bold">IT IS ON.</span>
              </p>
              <button
                onClick={() => setShowNotSure(false)}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black px-6 py-4 rounded-xl transform hover:scale-[1.02] transition-all shadow-lg"
              >
                UNDERSTANDABLE, HAVE A NICE DAY ✌️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;