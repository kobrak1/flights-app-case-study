# Flight Booking Web Application

This project is a web application built with React, SCSS, Node.js, Express.js, and MongoDB. It integrates with the [Schiphol Public Flights API](https://api.schiphol.nl/public-flights/flights) to allow users to search for flights based on their input. The application optimizes performance through techniques such as code splitting, lazy loading, and memoization. Input validation and sanitization are implemented to enhance security.

![home_page2](https://github.com/user-attachments/assets/712d2924-994e-4101-8162-066ea2fddc1c)

![flights_page](https://github.com/user-attachments/assets/02d7ac03-7d08-43ad-9826-c95485d46348)

![flights_page_2](https://github.com/user-attachments/assets/39e2b8b2-92ef-4e6b-9958-a5d7fe3d2e3f)


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Optimization](#optimization)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Flight Search**: Users can search for flights by providing input via the search bar.
- **Optimized Performance**: The application uses code splitting, lazy loading, and memoization for performance optimization.
- **Security**: Input sanitization and validation are applied to protect against common attacks such as XSS and SQL injection.
- **Responsive Design**: The UI is built using SCSS to ensure a responsive and user-friendly interface.

## Technologies Used
- **Frontend**: React, SCSS
- **Backend**: Node.js, Express.js, MongoDB
- **API**: Schiphol Public Flights API
- **Optimization Tools**: Code Splitting, Lazy Loading, React.memo, useMemo(), useCallback()

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/schiphol-flights-search.git
    ```

2. Navigate into the project directory:
    ```bash
    cd schiphol-flights-search
    ```

3. Install the dependencies for both the client and server:
    ```bash
    cd client
    npm install
    cd ../api
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the `server` directory with the following variables:
      ```env
      MONGODB_URI=<your-mongodb-uri>
      SCHIPHOL_API_KEY=<your-schiphol-api-key>
      ```

5. Start the development servers:
    ```bash
    # In the server directory
    npm run dev
    ```

    ```bash
    # In the client directory
    npm start
    ```

## Usage

1. Open the application in your browser by navigating to `http://localhost:3000`.
2. Use the search bar to filter flights based on your desired criteria (e.g., location, date, time).
3. The results will be fetched from the Schiphol API and displayed in a list.

## API Integration

This application communicates with the Schiphol Public Flights API to retrieve flight data based on user inputs.

- **API Endpoint**: `https://api.schiphol.nl/public-flights/flights`
- **Headers**: The API requires an API key that should be stored in your environment variables (`SCHIPHOL_API_KEY`).

## Optimization

The application leverages the following techniques for better performance:

- **Code Splitting**: Dynamically loads only the necessary parts of the application.
- **Lazy Loading**: Components are loaded on-demand, reducing the initial load time.
- **Memoization**:
  - `useMemo()`: Used to memoize expensive calculations and prevent unnecessary re-renders.
  - `useCallback()`: Memoizes callback functions to prevent their recreation on every render.
  - `React.memo()`: Used to wrap components and optimize re-rendering based on prop changes.

## Security

The application is built with security best practices, including:

- **Input Validation**: Ensures that all user inputs meet the required formats and constraints.
- **Input Sanitization**: Cleans and escapes potentially harmful inputs to prevent XSS and other attacks.
