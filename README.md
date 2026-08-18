# Web de Introducción al Desarrollo de Software
## Camejo & CO

Página para colgar material relacionado a la materia, cualquier issue/PR es super bienvenido!

### Requisitos

Node.js 24.19.0 LTS (la versión está fijada en `.nvmrc`):

```sh
nvm use
```

Para levantarlo local:

```sh
npm install
```

```sh
npm run start
```

Queda en http://localhost:3000/

---
#### Panel de administracion (CMS)

El sitio incluye un panel en `/admin/` basado en [Decap CMS](https://decapcms.org/) para crear y editar contenido desde el navegador.

En produccion: https://www.intro-camejo.com.ar/admin/

**Probarlo localmente:**

Ademas de levantar el sitio con `npm run start`, en otra terminal correr:

```sh
npx decap-server
```

El panel detecta solo que está en `localhost` y usa el backend local, así que no hay que tocar ninguna config.

Ir a http://localhost:3000/admin/

---
#### Levantarlo en un container :

```sh
docker compose up --build
```

Queda en http://localhost:3000/
