# ConsultaApp - Web Report and Query Application

ConsultaApp is a web application developed using Node.js and Express.js that allows users to efficiently and organizedly run reports and queries. The application facilitates the visualization of filtered results and offers options to send information through emails and WhatsApp messages.

## Key Features

- **User Authentication**: The application provides a login page where users can enter their credentials. The session is kept active to allow seamless navigation throughout the site.

- **Report Selection**: Users can choose from a variety of reports and queries through an intuitive interface. Reports are organized into categories for easy identification.

- **Query Execution**: Upon selecting a report, users can execute queries to the MySQL database. The application connects to the database and runs the corresponding stored procedures.

- **Results Visualization and Filtering**: Query results are presented in the user interface. Users can filter the results based on table columns, allowing for a more focused visualization.

- **Communication of Results**: Users can send information through emails and WhatsApp messages directly from the application, based on query results.

## Project Structure
The project follows an organized structure to facilitate development and collaboration:

- `node_modules`: Directory containing project dependencies.
- `public`: Contains static files like stylesheets and image resources.
- `views`: Stores EJS templates for HTML views.
- `routes`: Defines application routes and links to controllers.
- `models`: Defines data models for interacting with the database.
- `controllers`: Contains the business logic of the application.
- `config`: Stores configuration files for different aspects.
- `middlewares`: Directory for custom middlewares.
- `app.js`: Entry point of the application.
- `package.json`: Node.js configuration file.
- `package-lock.json`: Locked dependencies.
- `README.md`: This file with information about the project.

## Starting the Application
Clone this repository: `git clone (https://github.com/hcastellon/consultaApp)`
Install dependencies: `npm install`
Start the server: `npm start`
Open your browser and visit: `http://localhost:3000`
