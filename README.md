# 🚀 FURIA FanBot   
Interface de chat para fãs da FURIA usando a API da OpenAI.  

## ✨ Features  
- Responde perguntas sobre o time  
- Próximos jogos e resultados  
- História dos jogadores  

## 🛠️ Tecnologias  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)   ![OpenAI](https://img.shields.io/badge/-OpenAI-412991?logo=openai)  

![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white)   ![Render](https://img.shields.io/badge/-Render-3F59B8?logo=render&logoColor=white)

## 🔗 Versão Publicada
[Front-end (Vercel):](https://furia-chatbot-chi.vercel.app)
[Back-end (Render):](https://furia-backend-qb4q.onrender.com)

⚠️ O back-end está hospedado no Render Free Tier, e pode demorar alguns segundos para responder na primeira requisição, devido à hibernação automática.

## 🚀 Como Rodar Localmente

### 1. Clone os repositórios
https://github.com/MarianaNovaes22/furia-frontend
https://github.com/MarianaNovaes22/furia-backend


### 2. Configurar o Back-end
1. Acesse a pasta chatbot-furia-backend
2. Crie um arquivo .env na raiz com o seguinte conteúdo:
   
   OPENROUTER_API_KEY=sua-chave-aqui
   
4. Instale as dependências e inicie o servidor:


   npm install
   
   npm run dev

   
O back-end estará disponível em: http://localhost:3000


### 3. Configurar o Front-end
1. Acesse a pasta vite-project
2. Crie um arquivo .env na raiz com o seguinte conteúdo:
   
   VITE_API_URL=http://localhost:3000
   
O front-end estará disponível em: http://localhost:5173
 
