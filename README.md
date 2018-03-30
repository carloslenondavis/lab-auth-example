![](https://camo.githubusercontent.com/662ee2f98b69b0894d0a1d9117a9c5fb4dfc40aa/687474703a2f2f63646e2e61757468302e636f6d2f696d672f70617373706f72742d62616e6e65722d6769746875622e706e67)

# lab-auth-example
Este es un Laboratorio-101 para construir la autenticación y seguridad basada en Token con passportjs de facebook usando graphql, express, ORM Sequelize y PostgresSQL. Una experiencia enriquecedora y totalmente productiva. puede ser usado con cualquier cliente, pronto tendrán un ejemplo con react y angular como frontend clients;

* Nota: Este solo es un jumping de la implementación sobre la autenticación con express y node.

## Iniciando

Estas son las instrucciones para poder correr el proyecto en tu local. 

### Prerrequisitos

* Tener instalado un editor, para este ejemplo se utilizó [VSCode ^1.20.1](https://code.visualstudio.com/)
* Instalar cualquier bd SQL de preferencia, Para el ejemplo se utilizó [Postgress 10.2](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
* Instalar [Nodejs](https://nodejs.org/es/)
* Instalar [GIT](https://git-scm.com/)
* Tener creado la bd - *code-community* -
* Instalar un cliente HTTP, para este ejemplo se implemento [Postman](https://www.getpostman.com/). Puedes usar el de tu preferencia, sugerencias (insomnia, etc...)

### Installando

Clonar o crear tu propia cuenta del repositorio

```
https://github.com/clenondavis/lab-auth-example.git
```

Una vez clonado el proyecto, ya puedes instalar las dependencias, ejecutando el cli de preferencia el comando

```
npm i
```

Instalar el CLI global de sequelize

```
npm i -g sequelize
```

Instalar el CLI global de nodemon

```
npm i -g nodemon
```

### Configuración

El proyecto tiene un usuario y contraseña por defecto para la conección a la BD, pero puedes personalizarlo

```
Configurar el archivo src/db/config/config.json
* agregar tu usuario y tu password para el acceso de la bd
```

### Server

Para levantar el server con el proyecto, ejecuta el comando. por defecto el server esta en el puerto 7001. Puedes configurar tu propio puerto en el archivo server.js

```
npm start
```

Luego ve a tu navegador y escribe

```
localhost:7001
```

y veras el cliente de graphql.

### Base de Datos

Para generar el modelo de la base, debes correr las migraciones escribiendo el comando del CLI de sequelize

```
sequelize db:migrate
```

Para crear un registro por defecto a la tabla States de la base de datos, debes ejecutar el comando del CLI de sequelize

```
sequelize db:seed:all
```

Para ver los comandos de sequelize en tu consola puede usar el comando

```
sequelize -H
```


## Test

En desarrollo

```
npm test
```

## Documentación

En desarrollo, ya tengo el el lab example para la documentación con JsDoc, solo debo integrarlo a este proyecto.


## Desarrollado con

* [Graphql - documentacion con JS](http://graphql.org/graphql-js/) - Esquemas y consultas
* [Express](http://expressjs.com/es/starter/installing.html) - Infraestructura web sobre Node
* [Sequelize](http://docs.sequelizejs.com/) - ORM
* [graphql-sequelize](https://github.com/mickhansen/graphql-sequelize) - Paquete para conectar los esquemas de graqhql con los models de sequelize
* [express-graphql](https://github.com/graphql/express-graphql) - Middleware para graqhql
* [nodemon](https://github.com/remy/nodemon#nodemon) - Monitorear los cambios en el código y automaticamente reiniciar el server
* [babel](https://babeljs.io/) - Transpilador ES5/Es6
* [passport](https://github.com/jaredhanson/passport) - Librería para la autenticacion con express y node


## Contribuyentes

* La plantilla del readme de este graphql-example fue creado por [Billie Thompson](https://gist.github.com/PurpleBooth)
* El creador y contribuyente activo del paquete de graphql con sequelize [Mick Hansen](https://github.com/mickhansen)


## Colaborador

Tu contribución es importante. Para contribuir o ser colaborador de este graphql-example
* Dale tu estrella a este graphql-example
* Seguí al repositorio para recibir notificaciones de mejoras continuas
* Crear un pull request con la propuesta de cambio, espera y veras tu aporte compartido a la comunidad.
* Ponte en contacto con el autor del laboratorio

Para colaborar con la Comunidad  [JsNi](https://github.com/js-ni) y convertirte en un miembro activo
* Ponte en contacto con [Paulo McNally](https://github.com/paulomcnally) ó [Hosmel Quintana](https://github.com/hosmelq), para que puedan agregarte y asi formar parte de esta grande comunidad de JS-Lovers en Niccaragua

## Versionamiento

Se usa GIT como control de versiones. Para acceder a la última version, ir a las [etiquetas del repositorio](https://github.com/clenondavis/lab-auth-example/tags).

## Authors

* **Carlos Lenon** - *Love what i do* - [clenondavis](https://github.com/clenondavis)

Ver el listado de los [colaboradores](https://github.com/clenondavis/lab-auth-example/graphs/contributors) de este lab-jest-example.

## Licencia

Este proyecto esta bajo la licencia MIT - ver detalle de esta [licencia](https://github.com/clenondavis/lab-jest-example/blob/master/LICENSE)

## Inspiración

* Aportar cada día a nuestra comunidad JsNi
* En Camino a ser Arquitecto en JS
* Aprender de los demás

