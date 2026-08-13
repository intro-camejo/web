# Editores de texto

**Qué son los editores de texto?**

Los editores de texto son herramientas esenciales para cualquier usuario que trabaje con archivos de texto. Pueden ser usados para una amplia gama de tareas, desde escribir scripts y programas hasta editar archivos de configuración del sistema. En Linux, hay varios editores de texto disponibles, cada uno con características y enfoques distintos. En este resumen, explicaremos tres editores populares: **Vim**, **Nano** y **Micro**.

**Vim**: Editor de texto potente con muchas funcionalidades. Su curva de aprendizaje es alta, pero el dominio del editor puede incrementar significativamente la productividad.

**Nano**: Ideal para principiantes que buscan simplicidad. Su facilidad de uso lo hace adecuado para tareas rápidas sin complicaciones. Sin embargo, carece de muchas de las características avanzadas que ofrecen otros editores.

**Micro**: Ofrece una experiencia equilibrada, siendo fácil de usar como Nano pero con más funcionalidades. Es una buena opción para aquellos que buscan una interfaz moderna con características adicionales.

## **VIM**

Vim es un editor de texto muy potente y versátil, conocido por su capacidad de manejo eficiente de texto. Es una evolución de Vi, el editor de texto estándar en sistemas Unix. Vim tiene una curva de aprendizaje, pero es extremadamente eficiente una vez dominado.

**Cómo instalarlo**:
En sistemas basados en Debian/Ubuntu:

*sudo apt-get install vim*

**Ejemplo de uso de vim**:

- **Abrir un archivo**: vim nombre\_del\_archivo.txt
- **Entrar en modo de edición**: i para entrar en el modo de inserción.
- **Guardar y salir**: En modo de comando (presiona Esc para volver al modo de comando), escribe :wq y presiona Enter.

**Pros**:

- **Extremadamente potente**: Ofrece una amplia gama de comandos y funcionalidades avanzadas.
- **Eficiencia en edición**: Su modo de comandos permite realizar ediciones complejas rápidamente.
- **Extensible y personalizable**: Puedes añadir plugins y configurar el editor para adaptarse a tus necesidades.

**Contras**:

- **Curva de aprendizaje empinada**
- **Interfaz no intuitiva**: Requiere memorizar comandos y modos de operación.

### **CHEATSHEET VIM:**

**link a cheatsheet completo:** https://devhints.io/vim

**i** - Entrar en modo de inserción

**Esc** - Salir del modo de inserción y volver al modo de comando

**:w** - Guardar el archivo

**:q** - Salir del editor

**:q!**-Salir sin guardar

**:wq** - Guardar y salir

**:x** - Guardar y salir (similar a :wq)

**dd** - Eliminar una línea

**yy** - Copiar una línea

**p** - Pegar una línea copiada

**/texto** - Buscar "texto" en el archivo

**:set number** - Mostrar números de línea

**u:** -Deshacer última acción

**v:** -Modo visual (para seleccionar texto)

**/palabra** -Para buscar una palabra, y presionar **Enter**. Para navegar entre las ocurrencias de la palabra, se utiliza **n** (siguiente) y **Shift + N**(anterior).


## **NANO**

Nano es un editor de texto fácil de usar, diseñado para ser simple y accesible para principiantes. Su interfaz es bastante directa y no requiere una curva de aprendizaje significativa.

**Pros**:

- **Simplicidad**: Su interfaz es intuitiva, con comandos claramente visibles en la parte inferior de la pantalla.
- **Bajo consumo de recursos**: Rápido y ligero en términos de uso de memoria y CPU.
- **Accesible para principiantes**: Ideal para aquellos que no tienen experiencia previa con editores de texto en línea de comandos.

**Contras**:

- **Funcionalidades limitadas**: Carece de características avanzadas que ofrecen otros editores.
- **Menos opciones de personalización**: Las opciones para personalizar el entorno de trabajo son limitadas.

**Cómo instalarlo**: 
En sistemas basados en Debian/Ubuntu:

*sudo apt-get install nano*

**Ejemplo de uso de nano**:

- **Abrir un archivo**: nano nombre\_del\_archivo.txt
- **Guardar cambios**: Presiona Ctrl + O, luego Enter.
- **Salir del editor**: Presiona Ctrl + X.

**Cheat Sheet para Nano**:

**link a cheatsheet completo:** https://www.cheatsheet.wtf/Nano/

- **Ctrl + O**- Guardar el archivo
- **Ctrl + X**- Salir del editor
- **Ctrl + K**- Cortar una línea
- **Ctrl + U**- Pegar una línea cortada
- **Ctrl + W**- Buscar texto

## **MICRO**

Micro es un editor de texto moderno que busca ofrecer una experiencia más amigable para los usuarios, combinando la facilidad de uso con características avanzadas. Está diseñado para ser una alternativa moderna a Nano con más funcionalidades.

**Cómo instalarlo**: 
Para sistemas basados en Debian/Ubuntu:

sudo apt-get install micro

 **Pros**:

- **Interfaz intuitiva**: Ofrece una experiencia de usuario amigable, más fácil de aprender que Vim.
- **Moderno y extensible**: Soporta plugins y tiene una apariencia más moderna.
- **Funcionalidades adicionales**: Incluye características como la selección de texto y el soporte de sintaxis.

**Contras**:

- **Menos conocido**: Menos documentación y comunidad en comparación con Vim y Nano.
- **Características intermedias**: No tan avanzado como Vim, pero más que Nano.

**Ejemplos de uso MICRO**:

- **Abrir un archivo**: micro nombre\_del\_archivo.txt
- **Guardar cambios**: Presiona Ctrl + S.
- **Salir del editor**: Presiona Ctrl + Q.

**Cheat Sheet para Micro**:

**link a cheatsheet completo:** https://cheatography.com/mynocksonmyfalcon/cheat-sheets/micro-text-editor/

- **Ctrl + S** - Guardar el archivo
- **Ctrl + Q**- Salir del editor
- **Ctrl + F** - Buscar texto
- **Ctrl + C**- Copiar
- **Ctrl + X**- Cortar
- **Ctrl + V**- Pegar
- **Ctrl + Z** - Deshacer
