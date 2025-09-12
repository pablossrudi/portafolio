# ------- Etapa 1: Build con Node (no se instala en tu PC, solo dentro del contenedor)
FROM node:20-alpine AS builder

# Mejora de rendimiento de npm
ENV CI=true

# Crea directorio de la app
WORKDIR /app

# Copia solo archivos de dependencias primero (capa caché)
COPY package*.json ./
# Si usas pnpm o yarn, copia sus archivos de lock y ajusta comandos más abajo

# Instala dependencias (usa 'ci' si tienes package-lock.json)
RUN npm ci --no-audit --no-fund

# Copia el resto del código
COPY . .

# Construye el sitio (por defecto genera /app/dist)
RUN npx astro build

# ------- Etapa 2: Imagen final mínima con Nginx sirviendo el estático
FROM nginx:alpine AS runtime

# Copia el build a la carpeta pública de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración básica (opcional): cache estático, compresión si agregas módulos, etc.

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]