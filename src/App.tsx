import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Zap, 
  CheckCircle, 
  AlertCircle, 
  Power, 
  Activity,
  Users,
  TrendingUp,
  Star,
  HelpCircle,
  X
} from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [showNotSure, setShowNotSure] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleTurnOff = () => {
    setClickCount(prev => prev + 1);
  };

  const diagnosticsData = [
    { label: 'Electron Flow', value: 'Optimal', status: 'success' },
    { label: 'Silicon Integrity', value: '100%', status: 'success' },
    { label: 'Quantum Coherence', value: 'Stable', status: 'success' },
    { label: 'Binary Alignment', value: '11111111', status: 'success' },
    { label: 'Photon Dispersion', value: 'Nominal', status: 'success' },
    { label: 'Power Flux Capacitor', value: '1.21 GW', status: 'warning' },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Digital Officer, TechCorp",
      content: "Before using this service, I was never quite sure if my computer was on. Now I have absolute certainty. Game-changing.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "IT Director, Global Solutions Inc.",
      content: "The diagnostic features are incredibly detailed. I particularly appreciate the electron flow metrics. Five stars!",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Systems Administrator",
      content: "I check this website daily. It's never been wrong. My computer has been on every single time I've checked.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ComputerStatus.pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#diagnostics" className="text-gray-700 hover:text-blue-600 transition-colors">Diagnostics</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Enterprise</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Is My Computer On?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Professional computer status verification service with real-time diagnostics and comprehensive analysis
          </p>
          
          {/* Main Answer */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 mb-12 max-w-2xl mx-auto">
            {isLoading ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
                <p className="text-xl">Analyzing system status...</p>
                <p className="text-sm text-blue-200">Checking electron flow patterns</p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="text-8xl md:text-9xl font-bold text-green-400 mb-4 animate-pulse">
                  YES
                </div>
                <div className="flex items-center justify-center space-x-2 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Status: Confirmed Active</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowNotSure(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <HelpCircle className="h-5 w-5" />
              <span>Not Sure?</span>
            </button>
            <button
              onClick={handleTurnOff}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Power className="h-5 w-5" />
              <span>Turn It Off {clickCount > 0 && `(${clickCount})`}</span>
            </button>
            <button
              onClick={() => setShowDiagnostics(!showDiagnostics)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Activity className="h-5 w-5" />
              <span>View Diagnostics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2.4M+</div>
              <div className="text-gray-600">Computers Checked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">0.001s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostics Panel */}
      {showDiagnostics && (
        <div id="diagnostics" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Advanced Diagnostics Panel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosticsData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                    {item.status === 'success' ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-yellow-500" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div id="testimonials" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Monitor className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">ComputerStatus.pro</span>
              </div>
              <p className="text-gray-400">
                The world's most reliable computer status verification service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Status Verification</li>
                <li>Advanced Diagnostics</li>
                <li>Enterprise Solutions</li>
                <li>24/7 Monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Contact Support</li>
                <li>Status Page</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ComputerStatus.pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Not Sure Modal */}
      {showNotSure && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Need Help?</h3>
              <button
                onClick={() => setShowNotSure(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-6">
                If you can click buttons and read this message, then <strong>YES</strong>, your computer is definitely on.
              </p>
              <button
                onClick={() => setShowNotSure(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;