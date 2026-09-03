# Fuentes

Estos archivos todavía no están en el repo (el entorno donde se armó esta
herramienta no tenía acceso a internet para descargarlos). Sin ellos, el
design system funciona igual: `design-tokens.css` cae a una fuente del
sistema como fallback. Para que se vea con la tipografía real, hay que
agregar acá estos tres archivos (las tres son gratuitas, licencia OFL, de
Google Fonts):

| Archivo esperado | Fuente | Dónde bajarla |
|---|---|---|
| `Montserrat-Bold.woff2` | Montserrat, peso 700–800 | https://fonts.google.com/specimen/Montserrat |
| `InstrumentSans-Medium.woff2` | Instrument Sans, peso 500–600 | https://fonts.google.com/specimen/Instrument+Sans |
| `OpenSans-Regular.woff2` | Open Sans, peso 400–600 | https://fonts.google.com/specimen/Open+Sans |
| `OpenSans-Bold.woff2` | Open Sans, peso 700 (para `<strong>`/`<b>` en el cuerpo) | https://fonts.google.com/specimen/Open+Sans |

Google Fonts entrega `.ttf`. Para convertir a `.woff2` (más liviano, es lo
que referencia `design-tokens.css`):

```bash
npx google-font-installer download "Montserrat" --formats=woff2
# o, si ya tenés los .ttf a mano:
npx ttf2woff2 < Montserrat-Bold.ttf > Montserrat-Bold.woff2
```

Una vez agregados los tres archivos acá, todos los mazos generados (pasados
y futuros) recuperan la tipografía real sin tocar nada más — el CSS ya
apunta a estos nombres de archivo.
