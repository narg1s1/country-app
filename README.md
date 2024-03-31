# CountryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1 to provide information about countries around the world. 
It includes features such as displaying country details, editing country information, user authentication, and role-based access control.

## Development server

To run the development server, use `ng serve`. Navigate to `http://localhost:4200/` in your web browser. The application will automatically reload if you make any changes to the source files.

## Code scaffolding

You can generate new components, directives, pipes, services, classes, guards, interfaces, enums, or modules using Angular CLI. For example, run `ng generate component component-name` to generate a new component..

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Authentication System

The application includes an authentication system implemented through the `AuthenticationService`. Users can log in using predefined email and password combinations. The `AuthenticationService` checks the provided credentials against a predefined list of users to authenticate them.

## User Credentials

Admin: `admin@example.com` / adminpassword
Operator: `operator@example.com` / operatorpassword


# Services

## Authentication Service

Located at `src/app/services/authentication.service.ts`, this service handles user authentication and authorization. It provides methods for user login, logout, and checking user roles.

## Country Service
Located at `src/app/services/country.service.ts`, this service handles fetching country data from a REST API (https://restcountries.com). It provides methods for retrieving a list of countries, fetching a specific country by name, and searching countries by name.


# Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Start the development server using ng serve.
5. Access the application in your web browser at `http://localhost:4200`.

## Dependencies

This project utilizes Angular for frontend development and may have additional dependencies listed in the `package.json` file.

## Contributing

Contributions to the project are welcome! If you would like to contribute, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the `MIT License`.