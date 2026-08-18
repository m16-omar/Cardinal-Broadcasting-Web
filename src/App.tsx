import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-rose-500 selection:text-white">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          Cardinal Broadcasting Ltd
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Cardinal Web
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">
            React 19 + TypeScript + Vite + Tailwind CSS v4 is configured and ready to build.
          </p>
        </div>

        {/* Interactive Card */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-xl space-y-4">
          <div className="flex justify-center">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-medium shadow-lg shadow-rose-600/25 transition-all cursor-pointer"
            >
              Interactive Count: {count}
            </button>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Edit <code className="text-rose-400 font-semibold">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2 text-xs font-medium text-slate-400">
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">⚡ Vite 8</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">⚛️ React 19</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">🔷 TypeScript</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">🎨 Tailwind CSS v4</span>
        </div>
      </div>
    </div>
  )
}

export default App

