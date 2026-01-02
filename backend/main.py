from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import yt_dlp
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class DownloadRequest(BaseModel):
    url: str

@app.post("/download")
async def download_video(request: DownloadRequest):
    pasta_destino = 'downloads'
    if not os.path.exists(pasta_destino):
        os.makedirs(pasta_destino)

    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': f'{pasta_destino}/%(title)s.%(ext)s',
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([request.url])
        return {"status": "sucesso", "mensagem": "Download concluído no servidor!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)