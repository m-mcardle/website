# ChefGPT 👨‍🍳🤖

## AI Powered Cooking Application

### Description 📚

ChefGPT is a web application that leverages ChatGPT to provide recipes based on the ingredients the user has available to them. Access it [here](https://chef-gpt-m-mcardle.vercel.app/)!

### Infrastructure 🏗️

The front end of this app was written in Svelte and built using SvelteKit. The backend is a Python server that hosts a Flask API that the client will fetch the recipes from. On this server we generate the suggestions by using the OpenAI ChatCompletion SDK and then parse the responses into a consumable format for the front-end. The backend is hosted on Heroku whereas the the frontend is hosted on Vercel.

### Related Concepts / Learnings 💭

* Svelte
* Python
* Flask
* OpenAI/ChatGPT
* Docker
* Vercel
* Heroku
