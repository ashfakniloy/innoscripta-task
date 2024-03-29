## Live demo

[Explore the live demo](https://innoscripta-task-niloy.vercel.app)

## Getting started

[Running the project with docker](#running-the-project-with-docker) | [Running the project with npm](#running-the-project-with-npm)

## Running the project with docker

### Prerequisites

- Docker installed on your machine. You can download and install docker from the [official docker website](https://www.docker.com/products/docker-desktop).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashfakniloy/innoscripta-task.git
   cd innoscripta-task
   ```

### Running the docker container

1.  Build the docker image for the project:

    ```bash
    docker build -t innoscripta-task .
    ```

2.  Run a docker container based on the built image:

    ```bash
    docker run -p 3000:3000 innoscripta-task
    ```

3.  Access the running application in your web browser at [http://localhost:3000](http://localhost:3000/).

## Running the project with npm

### Prerequisites

- Node.js and npm installed. (recommended version for node: latest LTS version, minimum v18.17)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashfakniloy/innoscripta-task.git
   cd innoscripta-task
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   ```

### Building for production

1.  To build the project for production, use the following command:

    `npm run build`

2.  Start the production server:

    `npm start`

3.  Open your web browser and navigate to [http://localhost:3000](http://localhost:3000/) to access the project locally.

## Author

### Ashfak Ahmed Niloy

- Email: ashfakniloy@gmail.com
- Portfolio: https://niloy.vercel.app
- GitHub: https://github.com/ashfakniloy
