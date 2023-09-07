# **Cápsula 0**  ✨

¡Bienvenido/a! Para desarrollar las evaluaciones de este curso, necesitarás utilizar distintas herramientas, por lo que hemos armado esta guía para tí, donde podrás encontrar cómo instalar las herramientas más importantes 😊

## **Tabla de Contenidos**
* [Ambiente a utilizar](#id1)
    * [Sobre Windows](#id2)
* [Herramientas](#id3)
    * [Git](#id4)
    * [Node.js](#id5)
    * [PostgreSQL](#id6)
    * [IDE](#id7)
* [Windows Subsystem for Linux](#id8)

# **Set Up**

<div id='id1' />

## Ambiente a utilizar
En estricto rigor deberías poder usar cualquiera de los sistemas operativos más comunes: alguna distribución de Linux, macOS o incluso Windows. Sin embargo, por experiencia hemos visto un mejor soporte, tanto en facilidad de instalación como también en un mejor funcionamiento (sin errores "misteriosos") en Linux y macOS. 

Por ello, esta guía se enfocará en estos dos sistemas y te sugerimos fuertemente elegir alguno de ellos.

<div id='id2' />

## Sobre Windows
Para los usuarios de Windows, existen distintas maneras para poder utilizar una distribución de Linux, pero **la opción que más recomendamos es instalar Windows Subsystem for Linux, con un sistema operativo como Ubuntu.** Para esta instalación puedes ver más al final de esta guía.

Otras opciones que existen son:
* Instalar Linux como el sistema operativo principal, reemplazando a Windows.
* Instalar Linux como sistema operativo secundario e incluir una selección de sistema al momento en que tu computador arranca (partición).
* Utilizar una máquina virtual e instalar Linux en ella

<div id='id3' />

# **Herramientas**
Tanto para Linux como para macOS, lo recomendable es instalar el software utilizando gestores de paquetes. Dependiendo de la distribución de Linux que estés usando, puedes tener directamente disponible apt-get, yum, portage, etc. Y en el caso de macOS, aunque no viene ninguno pre-instalado, sin duda el más recomendable es [Homebrew](https://brew.sh/). Los tips aquí se basarán principalmente en instalaciones con gestores de paquetes.

<div id='id4' />

## 💻 **Git**
Git es un [sistema distribuido de control de versiones](https://es.wikipedia.org/wiki/Git). En otras palabras, cuando trabajas en un proyecto con otras personas, Git te permite guardar versiones de los archivos y carpetas en diferentes momentos del tiempo. Esto es muy útil porque si alguien hace un cambio que afecta el funcionamiento del proyecto, puedes volver atrás en el tiempo a una versión anterior y deshacer ese cambio.

Además, Git te permite trabajar en diferentes ramas de un proyecto, lo que significa que puedes experimentar con diferentes cambios sin afectar la versión principal del proyecto. Y cuando estás listo para integrar tus cambios en la versión principal, Git te ayuda a hacerlo de manera segura y eficiente.

Puedes instalar Git utilizando tu administrador de paquetes.  

### **Instalación Linux**
Por ejemplo, para distribuciones basadas en Debian (como Ubuntu):
```
sudo  apt  update
sudo  apt  upgrade
sudo  apt  install  git-all
```

### **Instalación macOS**
Si usas Homebrew para gestionar paquetes en OS, puedes ejecutar el siguiente comando para instalar Git:
```
brew install git
```

Ejecuta `git --version` en tu terminal para confirmar que se haya instalado correctamente.

Para otras distribuciones, puedes revisar su [sitio oficial](https://git-scm.com/download/linux) de descargas.

<div id='id5' />

## 💻 **Node.js**
Node es un entorno de ejecución [Open Source](https://es.wikipedia.org/wiki/C%C3%B3digo_abierto) de Javascript.

Nos permite correr código de Javascript fuera de un navegador web, ya que está basado en  el motor [V8 de Google](https://es.wikipedia.org/wiki/V8_(int%C3%A9rprete_de_JavaScript)).

En este curso lo utilizaremos para escribir el código de servidor (backend) en Javascript.

Existen [muchas versiones](https://nodejs.org/en/download/releases) de Node, y es común que distintos proyectos usen diferentes versiones del mismo.

Es por esto que se crean los controladores de versiones de Node. Estos son programas que se preocupan de que siempre contemos con la versión correcta de Node en el proyecto actual. Algunas alternativas comunes son [Nvm](https://github.com/nvm-sh/nvm) y [Nodenv](https://github.com/nodenv/nodenv).

En esta guía recomendaremos el uso de Nvm. De todas formas, eres libre de utilizar el controlador de versiones que más te acomode.

### **Instalación Linux**
Para la instalación debes seguir los siguientes pasos:
1. Corre el script de instalación automática
```
curl  -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh  |  bash
```
2. Reinicia la terminal
3. Instala y selecciona una versión de node. Te recomendamos la 18.15.0, ya que termina su soporte en 2025.
```
nvm  install  18.15.0
nvm  use  18.15.0
```

### **Instalación macOS**
Te recomendamos instalar nvm con Homebrew:
```
brew update
brew install nvm
```
Para verificar la instalación puedes correr:
```
nvm ls
```
Finalmente, para instalar la versión de node deseada:
```
nvm install node
```
¡Y listo! Una vez instalado nvm podrán instalar múltiples versiones de Node.js, actualizarlas, eliminarlas y usar una u otra dependiendo del momento (o proyecto).
Para más información puedes revisar en GitHub [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating).

<div id='id6' />

## 🧶 Yarn
Yarn es un [Administrador de dependencias](https://classic.yarnpkg.com/en/). Nos permitirá instalar y dejar fijos los módulos que necesitará tu proyecto para crearse, y también los módulos que ustedes instalen. Piensa en los módulos como las librerias de Python.

```bash
npm install --global yarn
```

## 💻 **PostgreSQL**
Para almacenar los datos generados en nuestra aplicación web, tales como información de usuarios (nombre de usuario, descripción, etc) necesitamos una base de datos.

[PostgreSQL](https://www.postgresql.org/) es un sistema de bases de datos relacional Open Source. En este curso utilizaremos PostgreSQL como la base de datos para nuestro proyecto.

### **Instalación Linux**
```
sudo apt install postgresql
```
### **Instalación macOS**
Para instalar postgresql con Homebrew:
```
brew update
brew doctor
brew install postgresql
```
Otra recomendación adicional es realizar el setup de Homebrew Cask para luego instalar algo como LaunchRocket, que te permitirá realizar las operaciones de start y stop de la base de datos desde las settings del sistema.

<div id='id7' />

## 💻 **IDE**
Las IDE, o "desarrollo de entorno integrado" son básicamente "programas para programar". Puedes utilizar el que más te guste. 

En este curso recomendamos [Visual Studio Code](https://code.visualstudio.com/).



<div id='id8' />

# **Windows Subsystem for Linux**
Windows Subsystem for Linux o WSL es una capa de compatibilidad que permite "correr" un ambiente de desarrollo basado en alguna distribución de Linux en Windows. Es decir, desde tu terminal podrás acceder a un ambiente de desarrollo Linux, donde podrás ejecutar comandos propios de ese sistema operativo (que no funcionan en Windows).

Para la instalación de WSL2 recomendamos seguir la guía de instalación oficial: [Instalación de Linux en Windows con WSL](https://learn.microsoft.com/es-es/windows/wsl/install)

También hay muchos tutoriales en internet, y cualquier problema pueden escribir en el foro de dudas!

## **TIPS**
💡Algunos tips para tener en cuenta:
* Utilicen WSL 2, ya que presenta notables mejoras frente a la versión anterior, siendo una la utilización del kernel completo de Linux.
Recomendamos usar la distribución [Ubuntu en su versión 20.04](https://apps.microsoft.com/store/detail/ubuntu-2004/9N6SVWS3RX71?hl=es-ad&gl=ad&activetab=pivot%3Aoverviewtab) disponible en la Microsoft Store.
* Recomendamos descargar de Microsoft Store la nueva [Terminal de Windows](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=us&activetab=pivot%3Aoverviewtab).
    * Ofrece algunas opciones útiles como abrir múltiples pestañas de WSL.
* Tendrán que familiarizarse con los comandos típicos de Linux, les recomendamos investigar en internet y guardar un .txt con los comandos que más usarán.
    * Ejemplo: comandos para navegar entre carpetas, para crear carpetas, para dar permiso administrativo, abrir el explorador de archivos desde la consola, etc.
* Guardar el proyecto en un directorio "nativo" de WSL, como por ejemplo en /home/<user>.
    * WSL te permite abrir carpetas del disco duro con /mnt/<letra de disco>, sin embargo estos utilizan el formato "NTFS" de windows, el cual es más lento y no permite utilizar ciertas funcionalidades como nodemon, por lo que al hacer un cambio en un archivo, el servidor no se dará cuenta y tendrás que actualizar todo el servidor. Mientras que al utilizar la partición dedicada a WSL, que utiliza "ext4", sí va a funcionar.
    * Al iniciar el proyecto con el comando yarn dev o yarn start, en una partición "ext4" nativa de WSL, el proyecto se va a compilar rápidamente, mientras que si utilizas /mnt/<letra de disco>, se va a demorar, según nuestras pruebas, aproximadamente 37 segundos en compilar.
* Utilizar el IDE Visual Studio Code.
    * Al ser de Microsoft incluye unas opciones que se integran muy bien con WSL, como abrir el directorio donde se encuentra el proyecto si utilizaron los directorios nativos (A estos directorios nativos no se puede acceder con métodos convencionales ya que utilizan particiones "ext4").
    * Al utilizar el ambiente de WSL, permite usar librerías como Eslint.
* Correr PostgreSQL en el mismo WSL.

---
<div align="center">
Hecho con 💖 por Maca Abarca y Fernando Smith
</div>
