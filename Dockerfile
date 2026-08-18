FROM node:24.19-alpine

WORKDIR /app

# Copiar primero solo los manifiestos: mientras no cambien, Docker reusa la capa
# del `npm ci` y no reinstala en cada build.
COPY package.json package-lock.json .npmrc ./

# `npm ci` instala exactamente lo que fija el lockfile y falla si esta
# desincronizado con package.json (a diferencia de `npm install`, que lo reescribe).
# `--ignore-scripts` ya sale de .npmrc; queda explicito por si ese archivo no esta.
RUN npm ci --ignore-scripts && npm cache clean --force

COPY . .

RUN npm run build && chown -R node:node /app

# Recien despues del build, para que `npm ci` de arriba no saltee las devDependencies.
ENV NODE_ENV=production

# Las imagenes node:* ya traen un usuario `node` sin privilegios. Correr el server
# como root no aporta nada y agranda el impacto de cualquier RCE.
USER node

EXPOSE 3000

# `--host 0.0.0.0` es necesario para que el puerto sea alcanzable desde afuera del
# container; por defecto docusaurus serve escucha solo en localhost.
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "3000"]
