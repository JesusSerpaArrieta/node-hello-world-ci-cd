const express = require('express');
const app = express();

<<<<<<< HEAD

=======
app.get('/', (req, res) => {
  res.send('Hola mundo desde un servidor Express');
});
>>>>>>> ec4db3141598c22a4a3f0056617a6581010c37b1

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
