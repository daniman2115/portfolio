import { useState, useRef, useEffect } from 'react'
import { Terminal, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react'
import { terminalResponses } from '../data/portfolioData'

export default function DevTerminal() {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    {
      command: 'bio',
      output: terminalResponses.bio,
    },
    {
      command: 'mobile',
      output: terminalResponses.mobile,
    },
  ])
  const [copied, setCopied] = useState(false)
  const terminalEndRef = useRef(null)

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase()
    if (!cleanCmd) return

    if (cleanCmd === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    const res = terminalResponses[cleanCmd] || [
      `Command not found: "${cleanCmd}". Type "help" or click one of the shortcut buttons above.`,
    ]

    setHistory((prev) => [...prev, { command: cleanCmd, output: res }])
    setInputVal('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(inputVal)
  }

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const copyEmail = () => {
    navigator.clipboard.writeText('danihailhabt321@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#06060c] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Developer Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Explore My Work via <span className="gradient-text-cyan">Terminal</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Click shortcut chips or type interactive commands to query my background, tech stack, and mobile expertise.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-gray-500 mr-2">Quick Commands:</span>
          {['help', 'bio', 'mobile', 'stack', 'projects', 'hire', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-[#111122] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/40 text-gray-300 hover:text-white transition-all"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#090914] shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Mac-style Window Titlebar */}
          <div className="px-4 py-3 bg-[#0d0d1b] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-gray-400 text-xs font-medium">daniel@addis-ababa-dev:~ (zsh)</span>
            </div>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-5 max-h-[380px] overflow-y-auto terminal-body space-y-4 text-left">
            <div className="text-gray-500 text-[11px]">
              Last login: {new Date().toLocaleDateString()} on ttys001. Type <span className="text-cyan-400">help</span> for a list of commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-violet-400 font-semibold">
                  <span className="text-cyan-400">daniel@portfolio:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="pl-4 space-y-1 text-gray-300 leading-relaxed border-l border-white/[0.06]">
                  {item.output.map((line, lIdx) => (
                    <p key={lIdx} className="whitespace-pre-wrap">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div ref={terminalEndRef} />
          </div>

          {/* Prompt Input Form */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 bg-[#0d0d1b] border-t border-white/[0.08] flex items-center gap-2"
          >
            <span className="text-cyan-400 font-bold">daniel@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'mobile', 'hire'..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-600 font-mono text-xs"
            />
            <button
              type="submit"
              className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}
