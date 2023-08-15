# ConsultaApp - Aplicación Web de Informes y Consultas

ConsultaApp es una aplicación web desarrollada utilizando Node.js y Express.js que permite a los usuarios ejecutar informes y consultas de manera eficiente y organizada. La aplicación facilita la visualización de resultados filtrados y ofrece opciones para enviar información a través de correos electrónicos y mensajes de WhatsApp.

## Características Principales

- **Autenticación de Usuarios**: La aplicación proporciona una página de inicio de sesión donde los usuarios pueden ingresar sus credenciales. La sesión se mantiene activa para permitir una navegación sin problemas por el sitio.

- **Selección de Informes**: Los usuarios pueden elegir entre una variedad de informes y consultas a través de una interfaz intuitiva. Los informes están organizados en categorías para una fácil identificación.

- **Ejecución de Consultas**: Al seleccionar un informe, los usuarios pueden ejecutar consultas a la base de datos MySQL. La aplicación se conecta a la base de datos y ejecuta los procedimientos almacenados correspondientes.

- **Visualización y Filtrado de Resultados**: Los resultados de las consultas se presentan en la interfaz de usuario. Los usuarios pueden filtrar los resultados según las columnas de las tablas, lo que permite una visualización más enfocada.

- **Comunicación de Resultados**: Los usuarios pueden enviar información a través de correos electrónicos y mensajes de WhatsApp directamente desde la aplicación, basándose en los resultados de las consultas.

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el desarrollo y la colaboración:

- `node_modules`: Directorio que contiene las dependencias del proyecto.
- `public`: Contiene archivos estáticos como hojas de estilo y recursos de imágenes.
- `views`: Almacena plantillas EJS para las vistas HTML.
- `routes`: Define las rutas de la aplicación y vincula a los controladores.
- `models`: Define los modelos de datos para interactuar con la base de datos.
- `controllers`: Contiene la lógica de negocios de la aplicación.
- `config`: Almacena archivos de configuración para diferentes aspectos.
- `middlewares`: Directorio para middlewares personalizados.
- `app.js`: Punto de entrada de la aplicación.
- `package.json`: Archivo de configuración de Node.js.
- `package-lock.json`: Dependencias bloqueadas.
- `README.md`: Este archivo con información sobre el proyecto.

## Iniciar la Aplicación

1. Clona este repositorio: `git clone [URL del repositorio]`
2. Instala las dependencias: `npm install`
3. Inicia el servidor: `npm start`
4. Abre tu navegador y visita: `http://localhost:3000`
