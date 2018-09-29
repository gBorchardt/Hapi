var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    nome: String,
    cpf: String,
    usuario: String,
    senha: String
});

var Users = mongoose.model('user', userSchema);

module.exports = Users;