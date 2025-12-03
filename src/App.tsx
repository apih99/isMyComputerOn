import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Terminal,
  Flame,
  Bomb,
  Ghost,
  Cpu,
  Skull,
  PartyPopper,
  Rocket,
  Wifi,
  Database,
  Lock,
  Eye,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [showNotSure, setShowNotSure] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  // CHANGED: Use a ref for the container, not the end element
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Fake terminal logs
  const logMessages = [
    "Injecting caffeine into CPU...",
    "Bypassing mainframe (easy)...",
    "Downloading RAM from suspicious website...",
    "Ping: -69ms (Time Travel?)",
    "Vibe check initiated...",
    "Finding the funny...",
    "Defragging the cat videos...",
    "Optimizing meme cache...",
    "Calculating meaning of life (42)...",
    "Stonks only go up 📈",
    "Turning it off and on again...",
    "Hacking into the Gibson..."
  ];

  // Meme loading messages for hero
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
    // Hero loading cycle
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

  // Terminal log effect
  useEffect(() => {
    if (showDiagnostics) {
      const interval = setInterval(() => {
        setLogs(prev => {
          const newLogs = [...prev, `[${new Date().toLocaleTimeString()}] ${logMessages[Math.floor(Math.random() * logMessages.length)]}`];
          return newLogs.slice(-10); // Keep last 10 logs
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [showDiagnostics]);

  // FIXED: Auto scroll ONLY the container, not the window
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTo({
        top: logsContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [logs]);

  const handleTurnOff = () => {
    setClickCount(prev => prev + 1);
    if (clickCount > 2) {
      alert("⚠️ BRUH. YOU CAN'T JUST TURN IT OFF. IT'S THE INTERNET. ⚠️");
    }
  };

  const diagnosticsData = [
    { label: 'Internet Speed', value: 'FASTER THAN LIGHT', icon: Wifi, color: 'text-blue-400' },
    { label: 'Packet Loss', value: '0% (ONLY Ws)', icon: Database, color: 'text-green-400' },
    { label: 'Encryption', value: 'NSA PROOF', icon: Lock, color: 'text-yellow-400' },
    { label: 'FBI Agent', value: 'WATCHING 👀', icon: Eye, color: 'text-red-400' },
    { label: 'GPU Temp', value: 'SPICY 🌶️', icon: Flame, color: 'text-orange-500' },
    { label: 'Rizz', value: 'UNSPOKEN', icon: Ghost, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-meme overflow-x-hidden selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <nav className="bg-zinc-900 border-b-4 border-pink-500 relative z-20">
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
      <div className="relative overflow-hidden z-10">
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
      <div className="bg-yellow-400 py-4 overflow-hidden transform -skew-y-2 border-y-4 border-black mb-16 relative z-10">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap text-black font-black text-xl">
          <span>🔋 UPTIME: FOREVER</span>
          <span>⚡ POWER: OVER 9000</span>
          <span>🛑 ERRORS: ZERO (TRUST ME)</span>
          <span>💻 RGB: MAXIMUM</span>
          <span>🚀 TO THE MOON</span>
          <span>💎 DIAMOND HANDS</span>
          <span>🔋 UPTIME: FOREVER</span>
          <span>⚡ POWER: OVER 9000</span>
        </div>
      </div>

      {/* Diagnostics Panel */}
      {showDiagnostics && (
        <div id="diagnostics" className="py-20 relative bg-zinc-950 overflow-hidden">
          {/* Matrix Rain / Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-glitch">
              BIG BRAIN ANALYTICS 🧠
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Stats Cards */}
              <div className="space-y-4">
                {diagnosticsData.map((item, index) => (
                  <div key={index} className="bg-black/80 backdrop-blur border border-green-500/30 p-4 rounded-lg flex items-center justify-between hover:border-green-400 transition-all group">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-md bg-zinc-900 ${item.color}`}>
                        <item.icon size={24} />
                      </div>
                      <span className="font-mono text-zinc-400">{item.label}</span>
                    </div>
                    <span className="font-black text-xl font-mono">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Middle Column: The Graph */}
              <div className="lg:col-span-2 bg-black/90 border-2 border-green-500 rounded-xl p-6 relative overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <div className="scanlines"></div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-green-400 font-mono text-xl flex items-center gap-2">
                    <TrendingUp /> LIVE PERFORMANCE
                  </h3>
                  <span className="text-xs text-green-600 font-mono animate-pulse">● LIVE UPDATE</span>
                </div>
                
                {/* Fake SVG Graph */}
                <div className="h-64 w-full bg-zinc-900/50 rounded border border-green-900/50 relative p-4 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path 
                      d="M0,50 Q20,40 40,60 T80,50 T120,30 T160,70 T200,20 T240,40 T280,10 L300,0 L300,100 L0,100 Z" 
                      fill="rgba(34, 197, 94, 0.1)" 
                      stroke="none" 
                    />
                    <path 
                      d="M0,50 Q20,40 40,60 T80,50 T120,30 T160,70 T200,20 T240,40 T280,10" 
                      fill="none" 
                      stroke="#4ade80" 
                      strokeWidth="3" 
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  
                  {/* Floating labels */}
                  <div className="absolute top-4 right-4 text-green-400 font-black text-2xl font-mono">
                    STONKS ↗
                  </div>
                </div>

                {/* Terminal Log Output */}
                <div 
                  ref={logsContainerRef}
                  className="mt-4 bg-zinc-950 rounded border border-green-800 p-4 font-mono text-sm h-32 overflow-y-auto no-scrollbar"
                >
                  {logs.map((log, i) => (
                    <div key={i} className="text-green-500/80 mb-1">
                      <span className="text-green-300 mr-2">$</span>
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div id="testimonials" className="py-16 bg-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12 border-b-4 border-yellow-400 inline-block mx-auto px-8 pb-2">
            THE SQUAD SPEAKS 🗣️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
               <div className="flex mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
               <p className="text-xl mb-6">"Much power. Very on. Such electricity. Wow."</p>
               <div className="font-bold text-lg text-yellow-500">Doge (CEO of Wow)</div>
            </div>
            <div className="bg-black border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
               <div className="flex mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
               <p className="text-xl mb-6">"Yes, I check if my computer is on every morning. How could you tell?"</p>
               <div className="font-bold text-lg text-blue-500">Gigachad</div>
            </div>
            <div className="bg-black border border-zinc-800 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
               <div className="flex mb-4 text-2xl">💀💀💀💀💀</div>
               <p className="text-xl mb-6">"Wait, you guys have computers?"</p>
               <div className="font-bold text-lg text-red-500">Deleted User</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-zinc-800 relative z-10">
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
                Bestie, you are literally reading pixels on a screen right now. <br/><br/>
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