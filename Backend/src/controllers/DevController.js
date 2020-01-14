const Dev = require('../models/dev');

module.exports = {

    async store(request, response) {

        let data = {
            name: 'pedro',
            github_username: 'teste',
            bio: 'apsodksaopdkasdpoa',
            avatar_url: 'teste',
            techs: ['teste', 'teste'],
        }

        await Dev.create(data);

        return response.json({ ok: 'ta funcionando' });
    }
};