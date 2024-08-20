const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Rota para receber os dados do webhook
app.post('/webhook', (req, res) => {
  const leadData = req.body;
  
  // Exibe os dados no log
  console.log('Dados recebidos do RD Station:', leadData);

  // Envia uma resposta de sucesso
  res.status(200).send('Dados recebidos com sucesso!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
