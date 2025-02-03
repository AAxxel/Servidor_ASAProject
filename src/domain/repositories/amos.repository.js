const { amos } = require('../../config/database.js').models;

class AmoRepository {
    
    async createAmo(){
        return amos.create(data);
    }

}

module.exports = new AmoRepository();