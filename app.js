const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo desde un servidor Express....');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
