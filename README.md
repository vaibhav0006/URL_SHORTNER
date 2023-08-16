# QuickShort

The QuickShort is URL Shortener built using HTML, CSS, and JavaScript for the frontend, MongoDB as the database, and Express.js with Node.js for the backend. It allows users to submit long URLs and receive shortened versions that redirect to the original long URL when visited.

## Features

- Shorten long URLs into easily shareable short links.
- Click analytics for tracking the number of times a short link is used.
- User-friendly web interface for easy interaction.
- Secure and efficient storage using MongoDB.
- RESTful API for programmatically creating and managing short links.

## Getting Started

### Prerequisites

To run this project locally, you'll need the following installed on your system:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vaibhav0006/URL_SHORTNER.git
```
2. Go to the project directory:

```bash
cd URL_SHORTNER
```
3. Install dependencies:

```bash
  npm install
  cd frontend/
```
4. Set up the MongoDB connection:

Make sure your MongoDB server is running.
Create a .env file in the root directory and add your MongoDB connection string:
```bash
MONGODB_URI=mongodb://localhost:27017/url_shortener_db
```
5. Start the server
```bash
npm start
```
6. Start the Client
```bash
//open now terminal
cd frontend
npm start
```
The application should now be running locally at http://localhost:3000.

## Usage
Once the application is up and running, you can access it through your web browser. The homepage will contain a form where you can submit the long URL you want to shorten. Upon submission, the application will generate a short URL, which you can copy and share.

Additionally, the application provides a RESTful API to programmatically interact with the URL shortening service. Refer to the API documentation section for more details.

## API Documentation
The API documentation for the URL shortener can be found [here](https://docs.github.com/en/rest?apiVersion=2022-11-28).

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or need further assistance, you can contact the project maintainer at vaibhavrajput0006.com
