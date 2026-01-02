import { useState } from 'react'
// 1. Importamos o ícone de seta para baixo (FaArrowDown)
import { FaArrowDown } from 'react-icons/fa';

function App() {
  const [url, setUrl] = useState('')

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Reddit Video Saver</h1>
      
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="https://www.reddit.com/r/..." 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: '12px', width: '300px', borderRadius: '8px', border: '1px solid #555', backgroundColor: '#333', color: 'white', outline: 'none' }}
        />
        
        <button style={{ 
            padding: '12px', 
            cursor: 'pointer', 
            borderRadius: '50%',
            border: 'none', 
            backgroundColor: '#ff4500',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem'
          }}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  )
}

export default App