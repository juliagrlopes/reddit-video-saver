import yt_dlp
import os

def baixar_video_reddit(url, pasta_destino='downloads'):
    if not os.path.exists(pasta_destino):
        os.makedirs(pasta_destino)

    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': f'{pasta_destino}/%(title)s.%(ext)s',
        'quiet': False,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
            return {"status": "sucesso", "mensagem": "Download concluído!"}
    except Exception as e:
        return {"status": "erro", "mensagem": str(e)}
    
if __name__ == "__main__":
    print("--- Reddit Video Downloader Ativado ---")
    url_do_usuario = input("Por favor, cole a URL do post do Reddit: ")
    
    resultado = baixar_video_reddit(url_do_usuario)
    
    print(resultado["mensagem"])