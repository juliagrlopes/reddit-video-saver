import { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';

function App() {
  const [url, setUrl] = useState('')

  const handlesDownload = async () => {
  if (!url) return alert("Cole um link primeiro!");

  try {
    const response = await fetch('http://localhost:8000/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: url })
    });

    const data = await response.json();
    alert(data.mensagem);
  } catch (error) {
  console.error(error); 
  alert("Erro ao conectar com o servidor Python");
}
};

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
        
        <button onClick={handlesDownload} style={{ 
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