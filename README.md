# serempre-test
React Single Page Application, la cual permite leer, crear, editar y eliminar tareas, las cuales incluyen información como: el titulo de la tarea, su descripción, tiempo estimado y tiempo trabajado.

## Descripción
ReactJS Single Page App con la siguiente caracteristica:
1. CRUD: Crear, leer, actualizar y eliminar tareas. 


## Librerias/Componentes usados
* create-react-app: Kit de inicio para crear una app reactjs.
* boostwatch: Para estilos y diseño basico.
* react-router-dom: Para el enrutamiento entre las pantallas.
* redux, react-redux: Para la gestión del estado de datos.
* redux-thunk: biblioteca de middleware redux para despachar acciones asincrónicas.
* axios: Para las llamadas a la API REST (json-server).
* sweetalert2: Para la creación de alertas.
* json-server: API REST de prueba para guardas los datos de las tareas.

## Primeros pasos e instalación
Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba. Consulte la implementación para obtener notas sobre cómo implementar el proyecto en un sistema en vivo.

* Primero clone el repositorio en su computador
```
git clone https://github.com/jaimeduque17/serempre-test.git
```
* Abre tu terminal de preferencia
```
$ cd serempre-test
$ npm install
```
* Esto debería instalar todas las dependencias. Una vez hecho
* Correr 
``` 
$ yarn start
or
$ npm start
```
* para iniciar el servidor.
* Abrir (http://localhost:3000) en tu explorar de internet. 
* Esto debería abrir la aplicación de demostración

* Posteriormente abre otra terminal y ejecuta
```
npm install -g json-server
```
* una vez instalada la REST API de pruebas, ejecutar
```
json-server db.json --port 4000
```


## Authors
* **Jaime Duque** - (https://github.com/jaimeduque17)

## License
This project is licensed under the MIT License
