const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let lastLeadData = null; // Variável para armazenar os últimos dados recebidos

// Middleware para CORS
app.use(cors());

// Middleware para parsear o corpo das requisições em JSON
app.use(express.json());

// Rota para receber os dados do webhook
app.post('/webhook', (req, res) => {
  lastLeadData = req.body;

  // Exibe os dados no log
  console.log('Dados recebidos do RD Station:', lastLeadData);

  // Envia uma resposta de sucesso
  res.status(200).send('Dados recebidos com sucesso!');
});

// Rota para exibir os dados na tela
app.get('/', (req, res) => {
  if (lastLeadData) {
    res.send(`
      <h1>Dados Recebidos do RD Station</h1>
      <pre>${JSON.stringify(lastLeadData, null, 2)}</pre>
    `);
  } else {
    res.send('<h1>Nenhum dado recebido ainda.</h1>');
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
