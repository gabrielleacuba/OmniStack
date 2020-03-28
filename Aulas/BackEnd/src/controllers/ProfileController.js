const connection = require('../database/connection')

module.exports = {
    async listar(request, response){
        const ong_id = request.headers.authorization

        const casos_especificios = await connection('casos')
        .where('ong_id', ong_id)
        .select('*')

        return response.json(casos_especificios)
    }
}