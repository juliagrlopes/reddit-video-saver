# Reddit Video Saver

Um aplicativo para baixar vídeos do Reddit, desenvolvido com foco em performance e experiência do usuário.

## Tecnologias Utilizadas

### Frontend
- **React 19 + Vite**: Estrutura rápida e moderna.
- **Tailwind CSS v4**: Interface responsiva e fiel à identidade visual do Reddit.
- **React Icons**: Iconografia intuitiva.
- **IBM Plex Sans**: Tipografia oficial do Reddit.

### Backend
- **Python 3.14**: Lógica robusta e atualizada.
- **FastAPI**: API de alta performance e documentação automática.
- **yt-dlp**: Motor de processamento de vídeo.

## Como rodar o Projeto

1. **Backend**:
   - `cd backend`
   - `pip install -r requirements.txt`
   - `python main.py`

2. **Frontend**:
   - `cd web`
   - `npm install`
   - `npm run dev`

> **🔗 Link do Projeto:** [https://juliagrlopes.github.io/reddit-video-saver/](https://juliagrlopes.github.io/reddit-video-saver/)

Nota: O backend está hospedado no Render (plano gratuito). Devido ao "modo de espera", o primeiro download após um período de inatividade pode levar cerca de 30-50 segundos para iniciar.