const { Router } = require('express');
const axios = require('axios');

const DevController = require('./controllers/DevController');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(apiResponse.data);

    return response.json({ message: 'Hello OmniStack' });
},);



routes.post('/devs/cadastro/', DevController.store);

module.exports = routes;