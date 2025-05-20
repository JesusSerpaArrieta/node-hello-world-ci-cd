# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Carpeta donde estará la app en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install --production

# Copia el resto del código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "app.js"]
