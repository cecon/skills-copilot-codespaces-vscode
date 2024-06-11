// crie um webservice com express
// que receba um post com os seguintes campos:
// - id: identificador do comentário
// - text: texto do comentário
// - user: nome do usuário que fez o comentário
// - date: data do comentário
// - articleId: identificador do artigo
// salve o comentário em um arquivo comments.json
// e retorne o status 201
// se o comentário já existir, retorne o status 409
// e um objeto com a propriedade error
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.post('/', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('comments.json'));
  if (comments.some((comment) => comment.id === req.body.id)) {
    res.status(409).json({ error: 'Comentário já existe' });
    return;
  }
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.status(201).send();
});
app.listen(3000);