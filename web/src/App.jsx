import { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

function App() {
  const [url, setUrl] = useState('')

  const handlesDownload = async () => {
    if (!url) return alert("Cole um link primeiro!")
    try {
      const response = await fetch('https://reddit-video-saver.onrender.com/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      const data = await response.json()
      alert(data.mensagem)
    } catch (error) {
      console.error("Erro na conexão:", error)
      alert("Certifique-se que o servidor Python está rodando na porta 8000!")
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1b] text-white flex flex-col items-center justify-center p-6 font-sans">
      
      <h1 className="text-5xl font-black mb-10 text-[#ff4500] tracking-tight drop-shadow-lg">
        Reddit Video Saver <span className="text-white"></span>
      </h1>
      
      <div className="flex gap-3 bg-[#272729] p-5 rounded-2xl shadow-2xl border border-gray-800 hover:border-gray-700 transition-all">
        <input 
          type="text" 
          placeholder="https://www.reddit.com/r/..." 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-[#1a1a1b] border border-gray-700 rounded-xl px-5 py-3 w-96 outline-none focus:border-[#ff4500] transition-all text-gray-200 placeholder:text-gray-500"
        />
        <button 
          onClick={handlesDownload}
          className="bg-[#ff4500] hover:bg-[#ff5722] p-4 rounded-full transition-all active:scale-90 shadow-lg flex items-center justify-center group"
          title="Download"
        >
          <FaArrowDown size={22} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
      
      <p className="mt-6 text-gray-500 text-sm font-medium tracking-wide uppercase">
        {url ? "Clique na seta para baixar" : "Insira uma URL válida do Reddit"}
      </p>
    </div>
  )
}

export default App