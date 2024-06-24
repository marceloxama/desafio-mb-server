const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições JSON
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post('/form', (req, res) => {
  const formData = req.body;
  console.log('Dados recebidos:', formData);

  // Lógica para tratar os dados do formulário aqui...

  // Enviar uma resposta de sucesso
  res.status(200).send('Dados recebidos com sucesso');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});