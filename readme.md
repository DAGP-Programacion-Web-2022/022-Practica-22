# Programación Web



### Profesor: Carlos Ulibarri Ireta

### Alumno: Diego Alejandro Gentner Polanco

### Semestre y Grupo: 4°H



## Practica #20 : API Parte 2

**Instrucciones:**

- En tu directorio de trabajo crea el directorio practica_20.
- Cambiate al directorio “practica_20” e inicializa NPM (npm init -y).
- Instala el paquete “express” desde la línea de comando.
- Instala el paquete “ejs” desde la línea de comando (npm i ejs).
- Instala el paquete “nodemon” desde la línea de comando (npm i nodemon).
- Instala el paquete “mongoose” desde la línea de comando (npm i mongoose).
- Crea una carpeta llamada “public”.
- Crea una carpeta llamada “models”.
- Crea una carpeta llamada “views”.
- Crea una carpeta llamada “routes”.
- Al nivel de la raíz crea el archivo .gitignore en incluye la referencia a la carpeta “node_modules”.
- A nivel de la raiz, crea un nuevo archivo en blanco que se llame server.js.
- Dentro de la carpeta “routes” crea un nuevo documento en blanco que se llame “persons.js”.
- Dentro de la carpeta “models” crea un nuevo documento en blanco que se llame “person.js".
- Inyectar la dependencia de mongoose.
- Instanciar un nuevo Schema de Mongoose, esta definición debe coincidir con la definición de la colección que tenemos en nuestra base de datos de MongoDB.
- Exportar una instancia de un modelos de mongoose.
- En la carpeta “routes” en el archivo “persons.js” escribiremos nuestra primera ruta, para el método get, en este caso vamos a recuperar todos los documentos contenidos en la colección “persons” y regresarlos al Web browser como un objeto JSON, este módulo, exporta un objeto especial de tipo “router” que contendrá todas las rutas asociadas al modelo “person”.
- Deberás obtener la respuesta “has solicitado el listado de personas”.

> Las Instrucciones y tareas generadas en esta organización pertenecen al maestro en cuestión. El código a resolver es perteneciente al alumno y propuesto por el profesor el cual se encuentra dentro de la carpeta "src" del repositorio actual.