# UofG Course Scheduler 🗓

## React Web App + Flask API

### Description 📚

React web application that provides a schedule-building tool for University of Guelph students.

### Infrastructure 🏗️

The front-end of the application was built using React. The course data is fetched from a Flask API which loads its data from parsing the university's website HTML. Traffic to the API and client is managed through NGINX, which serves on HTTPS through a self-signed certificate. The application is hosted on a Microsoft Azure VM and accessible at a public IP address.

Testing for the application was done through Python's `unittest` library, React's `@testing-library`, and Cypress for E2E coverage of the application.

### Related Concepts / Learnings 💭

* Full Stack Development
* React
* Flask APIs
* Python HTML Parser
* NGINX
* Microsoft Azure
* Cypress
