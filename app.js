const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mi Página Express</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
        }
        p {
          font-size: 1.25rem;
          color: #eee;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Hola Mundo desde Express!</h1>
        <p>Esta es una página sencilla con un diseño básico.</p>
      </div>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
