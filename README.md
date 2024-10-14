# RapidInnovation-Assignments

## Express Backend

This is an Express.js backend application, providing RESTful APIs for managing the server-side logic of the project. 
It is hosted on [Vercel](https://vercel.com), ensuring seamless deployment and scaling.

## Features

- **Express.js** - Lightweight and fast Node.js web application framework.
- **REST API** - Provides endpoints for interacting with the backend.
- **Hosted on Vercel** - Easily deploy and manage the backend using Vercel's serverless architecture.
- **Environment Variables** - Securely manage sensitive configurations.

## Setup

### Prerequisites

- Node.js (v14+)
- NPM
- MongoDB
- Vercel account (for deployment)
- Gmail account (for `nodemailer` setup)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Paresh-95/RapidInnovation-Nodejs.git
   cd RapidInnovation-Nodejs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in api folder and add your environment variables:

   ```env
   PORT=4000 # or your preferred port
   MONGODB_URL=your_database_url
   FRONTEND_URL=your_frontend_url
   MAIL_HOST=smtp.gmail.com
   MAIL_USER=your_gmail_address@gmail.com
   MAIL_PASS=your_generated_app_password
   ```

4. Steps to find the `MAIL_PASS`:

    1. **Enable 2-Step Verification**:  
       Go to [Google Account Security](https://myaccount.google.com/security) and turn on 2-Step Verification.

    2. **Generate App Password**:  
       Under "App Passwords," choose **Mail** and **Other (Nodemailer)**. Click **Generate**.

    3. **Copy and Use**:  
       Copy the 16-character password and add it to your `.env` file.

5. Run the application locally:

   ```bash
   npm run dev
   ```

   The backend will be running on `http://localhost:4000/api/v1`.

## API Endpoints

### Task Management

- `POST /addTask` - Add a new task.
- `GET /getTask/:id` - Retrieve a specific task by ID.
- `GET /getAllTasks` - Fetch all tasks.
- `PUT /updateTask/:id` - Update a task by ID.
- `DELETE /deleteTask/:id` - Delete a task by ID.
- `PATCH /markCompleted/:id` - Mark a task as completed by ID.
- `GET /filterTask` - Filter tasks based on specific criteria.
- `GET /listTask` - List tasks.
- `GET /searchTask` - Search for tasks.
- `GET /generateSummary` - Generate a summary of tasks.

## Testing

You can test the API using the hosted Vercel URL or by using Postman.

- **Vercel URL**: [https://rapid-innovation-nodejs-lpq6xnre2-paresh-95s-projects.vercel.app](https://rapid-innovation-nodejs-lpq6xnre2-paresh-95s-projects.vercel.app)
- **Postman URL**: [http://localhost:4000](http://localhost:4000)

## Postman API Testing

To make testing easier, you can use the Postman documentation:
   
- **Postman Documentation**: [View API Documentation](https://documenter.getpostman.com/view/30984416/2sAXxTbqhL) (localhost)

Follow the instructions in the documentation to test the API endpoints.
