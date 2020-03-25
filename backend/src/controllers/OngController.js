const crypto = require('crypto');
const connection = require('../database/connect');

module.exports = {
    async create(request, response){
         //return response.send('Hello world');
        const {name, email, whattsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whattsapp,
            city,
            uf
        })

        return response.json({id})
    },


    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
   },
};