# Free API Aggregator Website

This project is a free API aggregator website. It is designed to aggregate data from various APIs and present it in a user-friendly manner.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
NPM
Docker (optional)
```

### Installing

A step by step series of examples that tell you how to get a development environment running

Clone the repository to your local machine

```
git clone https://github.com/yourusername/your-repo-name.git
```

Navigate to the project directory

```
cd your-repo-name
```

Install the dependencies

```
npm install
```

Create a .env file in the root directory and add your environment variables

```
touch .env
```

Start the server

```
npm start
```

Your application should now be running on `http://localhost:3000`

## Running the tests

Explain how to run the automated tests for this system

```
npm test
```

## Deployment

This application can be containerized using Docker. Build the Docker image by running:

```
docker build -t your-image-name .
```

Then, run the Docker container:

```
docker run -p 3000:3000 your-image-name
```

The application should now be running on `http://localhost:3000`

## Built With

* [Node.js](https://nodejs.org/) - The web framework used
* [Express.js](https://expressjs.com/) - Minimalist web application framework
* [Docker](https://www.docker.com/) - Used to containerize the application

## Authors

* **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
