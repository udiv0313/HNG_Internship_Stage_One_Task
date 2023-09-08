
# HNG Internship Stage-One-Task

# Stage One Task Readme

## Introduction

This readme provides instructions for completing Stage One task, which involves creating and hosting an endpoint using Node.js and Express.js. The endpoint should accept two GET request query parameters and return specific information in JSON format.

## Prerequisites

Before starting this task, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system.
- [npm](https://www.npmjs.com/): npm is the package manager for Node.js. It should be included with Node.js installation.

## Getting Started

Follow these steps to complete Stage One of the task:

1. **Create a New Project Directory**: Start by creating a new directory for your project. You can do this using the command line:

    ```bash
    mkdir stage-one-task
    cd stage-one-task
    ```

2. **Initialize a Node.js Project**: Initialize a Node.js project in the project directory by running:

    ```bash
    npm init -y
    ```

    This command will create a `package.json` file in your project directory.

3. **Install Express.js**: To use Express.js for creating your endpoint, install it as a dependency in your project:

    ```bash
    npm install express
    ```
4. **Install Nodemon**: Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. To install it in your project:
     ```bash
    npm install nodemon
     ```
     - Don't forget to add it in packge.json
       ```
         "scripts": {
            "start": "nodemon index.js"
       },
       ```

5. **Create an Express Application**: Create a JavaScript file (e.g., `app.js` or `index.js`) where you will define your Express application. You can use [Visual Studio Code (VSCode)](https://code.visualstudio.com/) or any code editor of your choice for this step.

6. **Set Up Express.js Endpoint**:

    - In your JavaScript file, require the Express module:

        ```javascript
        // I use this in the project -> import express from 'express'

        // But this is a good approach.
        const express = require('express');
        const app = express();
        ```

    - Define a route that accepts two GET request query parameters and returns specific information in JSON format. Here's an example route:

        ```javascript
        app.get('/api', (req, res) => {
            
            const slack_name = req.query.slack_name;
            const track = req.query.track;

            // Date object
            const dateTimeObject = new Date();

            const utc_time_format =  dateTimeObject.toISOString().slice(0,19) + 'Z'

            const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
            //getting the current week day.

            const currentWeekDayName = weekdayNames[new Date().getDay()];

            // Condition for query parameter.

            if(!slack_name || !track) {
                return res.status(400).json({error: 'Slack Name & Track are required.'});
            }

            // Fromatting the response.

            const response = {

                "slack_name": slack_name,
                "current_day": currentWeekDayName,
                "utc_time": utc_time_format,
                "track": track,
                "github_file_url": "https://github.com/udiv0313/HNG_Internship_Stage_One_Task/blob/main/index.js",
                "github_repo_url": "https://github.com/udiv0313/HNG_Internship_Stage_One_Task",
                "status_code" : 200
            }

            // Send the JSON Request.
            res.json(response);
        })
        ```

7. **Start the Express Application**:

    - Start the Express application and listen on a port of your choice (e.g., 3000):

        ```javascript
        const PORT = process.env.PORT || 5000; // If Port is mentione that is okay, I not then default PORT is 5000

        app.listen(port, () => {
            console.log(`Server is Running on port: http://localhost:${PORT}`);
        });
        ```

8. **Testing the Endpoint**:

    - You can now run your Express application using the following command:

        ```bash
        npm start
        ```

    - Access your endpoint in a web browser or using tools like [curl](https://curl.se/) or [Postman](https://www.postman.com/) by making GET requests to `http://localhost:3000/api?slack_name=value1&track=value2`. Replace `value1` and `value2` with the your slack_name & track with on what track of internship are you on and pass as query parameters.

9. **Deployment**: For Deployment, I used Render.
- [Render](https://render.com/): Render is a unified cloud to build and run all your apps and websites with free TLS certificate. For more go to the Documentation.
- [DEPLOYED_API_LINK](https://stage-one-ep8e.onrender.com/api?slack_name=Uttkarsh_Dhania&track=backend): To see click on the DEPLOYED_API_LINK.

10. **Customize and expand**: You can customize the logic within the route handler to perform any desired actions based on the query parameters and return the appropriate JSON response.

## Conclusion

I have now completed Stage One task, which involves creating and hosting an endpoint using Node.js and Express.js on render. The endpoint accepts two GET request query parameters and returns specific information in JSON format. You can further expand and customize this endpoint based on your project requirements. I am happy to have feedbacks on it. It is my first API endpoint that I did it myself🎉.
