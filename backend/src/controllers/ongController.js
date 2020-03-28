const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    //Método Listar
    async index(request, response){
        const ongs = await connection('ongs').select('*');      
        return response.json(ongs);
     },

    //Método Cadastrar 
    async create (resquest, response){
        const {name, email, whatsapp, city, uf} = resquest.body;
        const id = crypto.randomBytes(4).toString('Hex');
        await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp,
           city,
           uf,
        })

        return response.json({id});
    }
};