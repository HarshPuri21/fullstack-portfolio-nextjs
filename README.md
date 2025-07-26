Full-Stack Personal Portfolio with Next.js and Node.js

This is a complete, full-stack personal portfolio website built to showcase my skills and projects. It features a server-rendered frontend built with Next.js for optimal performance and SEO, and a dedicated Node.js backend to handle dynamic functionality like the contact form.

The project is designed to be deployed on a platform like Vercel.
Architecture & Technology

This project is divided into two main parts: a frontend application and a backend microservice.

    Frontend (Next.js):

        Built with React and Next.js, providing Server-Side Rendering (SSR) for a fast initial page load.

        Styled with Tailwind CSS for a modern, responsive, and mobile-first design.

        Features multiple sections including About Me, Skills, Projects, and a Contact Form.

        The contact form makes an asynchronous API call to the Node.js backend to send messages.

    Backend (Node.js):

        A lightweight microservice built with Node.js and Express.

        Provides a single RESTful API endpoint (/api/contact) to receive data from the frontend's contact form.

        Includes CORS (Cross-Origin Resource Sharing) middleware to securely allow requests from the frontend domain.

        Designed to be easily extendable for integrating with external email APIs like SendGrid or Resend.

Features

    Responsive Design: The UI is fully responsive and looks great on all devices.

    Server-Side Rendering (SSR): Fast performance and SEO-friendly thanks to Next.js.

    Dynamic Project Showcase: Easily updatable list of projects.

    Functional Contact Form: A real, working contact form that communicates with a dedicated backend service.

    Decoupled Architecture: The frontend and backend are separate applications, which is a modern development practice that allows for independent scaling and deployment.

How to Run Locally

You will need to run both the frontend and backend applications simultaneously in separate terminal windows.

1. Backend Server:

# Navigate into the backend folder
cd backend

# Install dependencies
npm install

# Run the server
npm start
# The backend will be running on http://localhost:3002

2. Frontend Application:

# Navigate into the frontend folder
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
# The frontend will be available at http://localhost:3000

Now you can open http://localhost:3000 in your browser to see the portfolio. Submitting the contact form will send a request to your local backend server running on port 3002.
