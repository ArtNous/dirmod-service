## Empezando
Service API RESTful para cotizaciones de moneda Argentina.

Este servicio esta construido en ambiente Nodejs y se encarga de revisar el valor de distintas monedas internacionales desde un servicio de tercero.

### Instalación

Clona este repositorio e inmediatamente debes crear un archivo llamado `.env` donde colocaras la variable de entorno API_TOKEN. **Es importante** porque mediante ella se hara la comunicación con el servicio tercero y asi obtener los datos.

Posteriormente debes ejecutar el comando `npm run start` para que el servidor comienza a escuchar peticiones.

### Tests

Lo ideal es que ejecutes las pruebas unitarias antes de comenzar el despliege del servidor.

Ejecuta `npm run test` para verificar que todo este correcto.

#### Eso es todo
