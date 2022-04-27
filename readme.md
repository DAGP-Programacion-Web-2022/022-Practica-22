# Programación Web



### Profesor: Carlos Ulibarri Ireta

### Alumno: Diego Alejandro Gentner Polanco

### Semestre y Grupo: 4°H



## Práctica #14: Query String

**Instrucciones:**

- En tu directorio de trabajo crea el directorio practica_12.
- Cambiate al directorio “practica_12” e inicializa NPM (npm init -y).
- Instala el paquete “express” desde la línea de comando.
- Instala el paquete “ejs” desde la línea de comando (npm i ejs).
- Instala el paquete “nodemon” desde la línea de comando (npm i nodemon).
- Crea un nuevo archivo en blanco que se llame server.js y copia en el contenido de server.js de practica_11.
- Agrega la siguiente línea, para que nuestra “app” de “Express” utilice “EJS” como motor de vistas.
- Ahora, crea un nuevo directorio llamado “views”. Ese es el nombre del directorio donde debemos guardar las vistas, y todas ellas DEBEN de tener la extensión “.ejs” en lugar de “.htm”.
- Dentro del directorio “views” crea un nuevo archivo de nombre “person.ejs” que tenga la estructura básica de un documento HTML.
- Regresa al archivo “server.js” y ubica la ruta.
- Como podemos apreciar, tenemos acceso a los valores que se pasan en la llamada al método “.render” mediante los caracteres especiales <%=%>. La consideración más importante es la siguiente: debemos asegurarnos que los nombres de los valor que estamos renderizando COINCIDEN con los nombres de las llaves que definimos en el “route handler”.
-  Una vez que hemos terminado la edición de nuestro “route handler” y de nuestro archivo “person.ejs”, es momento de ir a la línea de comando y levantar nuestro servidor
-  Y nuestro server se “levanta”, abre  una la ventana de tu navegador y accede a  localhost:3000/
-  La última consideración de importancia es que los nombres de los parámetros que enviamos en el query string, COINCIDAN con los nombres que definimos en el “route handler”.

> Las Instrucciones y tareas generadas en esta organización pertenecen al maestro en cuestión. El código a resolver es perteneciente al alumno y propuesto por el profesor el cual se encuentra dentro de la carpeta "src" del repositorio actual.