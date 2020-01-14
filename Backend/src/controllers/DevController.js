const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Index, show, store, update, destroy

//Index = Mostrar uma lista
//Show = Mostrar um unico valor
//Store = Quando for criar
//Update = Quando for alterar
//Destroy = Quando for deletar

module.exports = { 
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
        
    },

    async ShadowRoot(request, response){

    },

    async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if(!dev){

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
   
    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray;

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

    dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });
    } else { return response.json({ error: "Dev já cadastrado no banco! "}); }
    return response.json(dev);
}};