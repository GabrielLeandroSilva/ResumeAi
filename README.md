# Resume AI

Frontend em **Next.js** para análise inteligente de currículos via API de IA. O projeto permite enviar texto e/ou PDFs para análise e visualizar logs de requisições em tempo real.

---

## ✨ Funcionalidades

* 📄 **Análise de currículo por texto**
* 📎 **Upload de um ou mais PDFs** para análise
* 🤖 Resposta da IA exibida em tempo real
* 📊 **Página de logs** com:

  * quebra de informações (hora, método, rota, status)
  * estilização por método HTTP
  * destaque visual por status
  * ordenação reversa (logs mais recentes primeiro)
* 🩺 **Health check da API** com badge de status

---

## 🧱 Stack utilizada

* **Next.js 14+ (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS v4**
* API externa hospedada (Resume AI API)

---

## 🔗 API utilizada

> A aplicação possui **apenas camada de frontend**. Toda comunicação com a API é feita via rotas proxy do Next.js.

### Rotas principais da API

* Análise de texto:

  ```
  POST /chat
  body: { prompt: string }
  ```

* Análise de texto + PDFs:

  ```
  POST /chat/pdf
  form-data:
    - prompt (string)
    - files (um ou mais PDFs)
  ```

* Logs:

  ```
  GET /logs
  ```

---

## 🛡️ Arquitetura (Proxy Pattern)

Para evitar problemas de **CORS**, segurança e inconsistências de resposta, o projeto utiliza **rotas API internas do Next.js** como proxy:

```
/app/api/
 ├─ analyze/route.ts
 ├─ analyze-pdf/route.ts
 ├─ analyze-log/route.ts
 └─ analyze-health/route.ts
```

Isso garante:

* respostas normalizadas
* frontend desacoplado do backend
* facilidade de manutenção


## 🎨 Estilização dos logs

* **GET** → Azul
* **POST** → Verde
* **HEAD** → Roxo
* **Status 200** → Verde
* **Status 401** → Amarelo
* **Outros erros** → Vermelho

Os logs são exibidos com fonte monoespaçada para melhor leitura técnica.

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

## 🚀 Próximas melhorias (ideias)

* 🔄 Auto refresh dos logs
* 🔍 Filtro por método ou rota
* 📈 Métricas visuais (requests/min)
* ⏱ Destaque para logs novos
* 🧪 Testes com Playwright

---

## 📄 Licença

Projeto de estudo / demonstração.

---

Feito com ☕, Next.js e curiosidade técnica 😄
