# Web de Introducción al Desarrollo de Software
## Camejo & CO

Página para colgar material relacionado a la materia, cualquier issue/PR es super bienvenido!


Para levantarlo local :

```sh
npm install
```

```sh
npm run start
```

---
#### Panel de administracion (CMS)

El sitio incluye un panel en `/admin/` basado en [Decap CMS](https://decapcms.org/) para crear y editar blog posts y material de catedra desde el navegador.

En produccion: https://intro-camejo.github.io/web/admin/

**Probarlo localmente:**

Ademas de levantar el sitio con `npm run start`, en otra terminal correr:

```sh
npx decap-server
```

Y agregar `local_backend: true` al inicio de `static/admin/config.yml`. Esto hace que el CMS lea y escriba archivos locales en vez de usar GitHub.

Ir a http://localhost:3000/web/admin/

> **Importante:** no commitear `local_backend: true` — es solo para desarrollo local.

---
#### Levantarlo en un container :

```sh
docker-compose up --build
```
-----
#### Notificaciones:
* Todos los commits en main generan una notificación en el canal de slack.
* Para evitar que llegue este mensaje, el pr/commit debe terminar con "-silent"
