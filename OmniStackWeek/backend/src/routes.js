const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', (request, response) => {
    const { github_username } = request.body;

    const response = axios.get('https://api.github.com/users/');

    return response.json({ message: 'Hello Decome'});
});

module.exports = routes;
