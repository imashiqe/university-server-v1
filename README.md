# University Management

## Description

This repository contains the backend implementation of a university management system developed using TypeScript, Node.js, and Express.js. It features user authentication and authorization mechanisms for students, faculty, and administrators. The application provides functionality for profile management, academic process management, and user administration. MongoDB is used for data storage, ensuring a secure and efficient platform for managing university operations.

## Features

### Authentication

- **Students**
  - Secure login and logout
  - Password update functionality

- **Faculty**
  - Secure login and logout
  - Password update functionality

- **Admins**
  - Secure login and logout
  - Password update functionality

### Profile Management

- **Students**
  - Manage and update personal profile
  - Edit specific profile fields

- **Faculty**
  - Manage and update personal profile
  - Edit specific profile fields

- **Admins**
  - Manage and update personal profile
  - Edit specific profile fields

### Academic Processes

- **Students**
  - Enroll in courses for specific semesters
  - View class schedules
  - Access grades
  - View notice boards and events

- **Faculty**
  - Manage student grades
  - Access student’s personal and academic information

- **Admins**
  - Manage academic processes including:
    - Semesters
    - Courses
    - Offered Courses
    - Sections
    - Rooms
    - Buildings

### User Management

- **Admins**
  - Create, update, and delete user accounts
  - Block or unblock users
  - Change user passwords

## Technology Stack

- **TypeScript**: Strongly-typed superset of JavaScript
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for flexible data storage

## Initial Setup

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd University-Management
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following configuration:

     ```env
     PORT=3000
     DB_URI=mongodb://localhost:27017/university_db
     JWT_SECRET=your_jwt_secret_key
     ```

     Adjust `PORT`, `DB_URI`, and `JWT_SECRET` as needed.

## Start the Application

1. **Add the development start script to your `package.json`:**

   ```json
   "scripts": {
     "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"
   }
   ```

2. **Run the development server:**

   ```bash
   npm run start:dev
   ```

   This script uses `ts-node-dev` to watch for changes and restart the server as needed.

## API Endpoints

### User Management

- **Create Users**
  - `POST /users/create-student`
  - `POST /users/create-faculty`
  - `POST /users/create-admin`

### Student

- **Retrieve Students**
  - `GET /students`
  - `GET /students/:id`
- **Update/Delete Student**
  - `PATCH /students/:id`
  - `DELETE /students/:id`
- **Profile**
  - `GET /students/my-profile`

### Faculty

- **Retrieve Faculty**
  - `GET /faculties`
  - `GET /faculties/:id`
- **Update/Delete Faculty**
  - `PATCH /faculties/:id`
  - `DELETE /faculties/:id`
- **Profile**
  - `GET /faculties/my-profile`

### Admin

- **Retrieve Admins**
  - `GET /admins`
  - `GET /admins/:id`
- **Update/Delete Admin**
  - `PATCH /admins/:id`
  - `DELETE /admins/:id`
- **Profile**
  - `GET /admins/my-profile`

### Authentication

- **Login**
  - `POST /auth/login`
- **Token Management**
  - `POST /auth/refresh-token`
- **Password Management**
  - `POST /auth/change-password`
  - `POST /auth/forgot-password`
  - `POST /auth/reset-password`

## Data Model

- **User**: Manages authentication and basic user details
- **Student**: Contains details specific to student profiles
- **Faculty**: Contains details specific to faculty profiles
- **Admin**: Contains details specific to admin profiles
- **Academic Semester**: Details about academic terms
- **Academic Faculty**: Faculty details for academic departments
- **Academic Department**: Departments within the academic faculty

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For bug reports or feature requests, open an issue in the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

