const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async listar(requst,response){
        const ongs = await connection('ong').select('*')
        
        return response.json(ongs)
    },
    
    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body
        const id = crypto.randomBytes(4).toString('HEX') //Gera 4 bytes de caracteres hexadecimal para o id
    
        await connection('ong').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        })
    
        return response.json({id})
    },

    async delete(request, response){
        const id = request.headers.authorization

        const ong = await connection('ong')
        .where('id',id)

        if(ong.id != id){
            return response.status(401).json({error: 'Operation not permited.'})
        }
        await connection('ong').where('id', id).delete()

        return response.status(204).send()
    }

}