# Programación Web



### Profesor: Carlos Ulibarri Ireta

### Alumno: Diego Alejandro Gentner Polanco

### Semestre y Grupo: 4°H



## Práctica #15: POST REQUESTS + JSON

**Instrucciones:**

- En tu directorio de trabajo crea el directorio practica_15.
- Cambiate al directorio “practica_15” e inicializa NPM (npm init -y).
- Instala el paquete “express” desde la línea de comando.
- Instala el paquete “ejs” desde la línea de comando (npm i ejs).
- Instala el paquete “nodemon” desde la línea de comando (npm i nodemon).
- Crea un nuevo archivo en blanco que se llame server.js y copia en el contenido de server.js de practica_14.
- Agregaremos un nuevo endpoint y su correspondiente route handler para “Parsear” peticiones que contienen un objeto JSON en el body. Para este “route handler” agregaremos un parámetro extra, que es una callback a la llamada de express.json(). Lo que sucede en este caso es que estamos indicando al “route handler” que cuando llegue una petición por POST al endpoint “/personjson” , primero ejecute “express.json” que nos ayudará a “parsear” el body y a extraer el objeto que viene en la petición, una vez que el objeto es “parseado”, todas sus llaves (keys) quedan a nuestra disposición mediante la notación del punto, en el objeto “body” de la petición, “req.body.”.
- Ahora, en el directorio “views”, haremos una modificación en el archivo “index.ejs”.
- Haremos 2 modificaciones, la primera en el head, agregaremos el CDN para JQuery, para obtenerlo abrimos una pestaña del navegador y escribiremos el siguiente criterio de búsqueda.
- La segunda modificación es para que en cuanto se cargue la pagina, se haga una llamada al endpoint “/personjson”, después de la etiqueta </form>.
- El archivo de estilos “style.css”, permanece igual.
- Empuja tu código y el archivo de estilos al repositorio.
- NO OLVIDES agregar el archivo .gitignore (conteniendo “node_modules”) debido a que para esta práctica se instalaron 3 paquetes: Express, EJS y Nodemon.


> Las Instrucciones y tareas generadas en esta organización pertenecen al maestro en cuestión. El código a resolver es perteneciente al alumno y propuesto por el profesor el cual se encuentra dentro de la carpeta "src" del repositorio actual.