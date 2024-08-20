# Git & Github

#### Gracias Nicolas Hatzidimitriou

## Crear clave SSH y conectarse con Github


#### Para poder comunicarnos con Github y subir archivos a nuestro repositorio, vamos a necesitar una clave SSH. Para crearla, hay que hacer lo siguiente:

#### En tu terminal de Linux, pega el siguiente comando:

```bash
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
```

![Foto 1](https://i.postimg.cc/8zKtRYK8/1.png)


- #### Dentro de las comillas, tienes que poner tu correo electrónico que usaste para iniciar sesión en Github.



- #### Este comando va a crear una llave SSH usando tu correo electrónico que registraste en Github.

#### Con el comando ya copiado en la terminal y habiendo puesto el mail que usaste al registrarte en Github, apreta ENTER. Al hacer esto, te va a aparecer así:

![Foto 2](https://i.postimg.cc/fbQptpJw/2.png)

#### Le vas a dar ENTER nuevamente y te va a aparecer esto:

![Foto 3](https://i.postimg.cc/28B0QTp3/3.png)

#### Vas a ingresar una contraseña, la que vos quieras. Pero no pongas nada raro ni difícil, porque la vas a tener que usar más adelante:

![Foto 4](https://i.postimg.cc/8kx2g7NJ/4.png)

#### Luego de ingresar la contraseña 2 veces, como te pide. Te va salir este cartel:

![Foto 5](https://i.postimg.cc/qMXjDqRd/5.png)

#### Antes de agregar una llave SSH nueva al ssh-agent para que administre tus llaves, debes haber verificado si habían llaves SSH existentes y haber generado una llave SSH nueva.

#### Para comprobar esto, usaremos el siguiente comando y pegarlo en la terminal:
```bash
eval "$(ssh-agent -s)"
```
![Foto 6](https://i.postimg.cc/ncyp2dCW/6.png)

#### Ahora, vamos a agregar la llave privada al ssh-agent:
#### Pega este comando en la terminal:

```bash 
ssh-add ~/.ssh/id_ed25519
```

- #### Ingresa la contraseña (passphrase) que pusiste anteriormente.

![Foto 7](https://i.postimg.cc/g0khckm8/7.png)

#### Ya una vez generada la llave SSH, la tenemos que ingresar en Github:

#### En la terminal, ingresamos: 

- `cat ~/.ssh/id_ed25519.pub`

- #### Esto nos va a permitir visualizar la llave SSH que acabamos de generar.

![Foto 8](https://i.postimg.cc/ZKGjqNM3/8.png)

#### Copiamos todo lo que se marcó en la imagen.

- #### Ingresamos a Github: https://github.com/
- #### Iniciamos sesión.
- #### Arriba a la derecha está nuestra foto de perfil de Github. Tocamos en la foto.
- #### Se nos despliega el menú de la foto y vamos a la sección `Settings` o `Configuración`:


<img src="https://i.postimg.cc/hGgrLBgt/9.png" alt="Texto alternativo" width="30%" />

#### En el panel lateral entramos al apartado `Claves SSH y GPG`:

<img src="https://i.postimg.cc/528gQthr/10.png" alt="Texto alternativo" width="40%" />

#### Le damos click al botón `New SSH key`:

![Foto 11](https://i.postimg.cc/MKMdx5dq/11.png)

#### En `Título`, le pones un nombre descriptivo, por ejemplo, ‘Laptop Trabajo’:

#### Dejamos la opción `Authenticacion Key`:

#### En el campo `Key`, pegamos lo que nos había mostrado el comando:

```bash
cat ~/.ssh/id_ed25519.pub
```

#### Y apretamos el botón `Add SSH key`:

![Foto 12](https://i.postimg.cc/Xv8gxz7c/12.png)

#### Y listo, ya tenemos nuestra llave de comunicación con Github y podemos empezar a usar Git tranquilamente!

# Comenzar a usar Git

#### En Github, arriba a la derecha hay un signo `+`. Le damos click y seleccionamos `New Repository`:

![Foto 13](https://i.postimg.cc/DZwPNPSV/13.png)


![Foto 14](https://i.postimg.cc/Hnf0VGBH/14.png)

#### Le ponemos el título que queramos, decidimos si poner el repositorio privado o público, una descripción (opcional) y le damos a `Create repository`.

#### Copiamos la opción SSH de Github, lo ponemos en la terminal y presionamos `ENTER`:

![Foto 15](https://i.postimg.cc/1t7r1VF8/15.png)

#### Para el paso anterior vamos a tener que usar uno de los primeros comandos de Git, que es `git clone`. Este comando sirve para clonar y traerte el repositorio de Github hacia tu computadora.

#### Después de clonar el repositorio y hacer un `ls` en la terminal, ya vamos a tener una carpeta con el nombre que le pusimos al repositorio:

![Foto 16](https://i.postimg.cc/L5qB94kN/16.png)

```
Ingresamos a la carpeta y listo. Ya estamos listos para crear archivos y subirlos a nuestro repositorio!.
```