const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose
  .connect('mongodb://localhost/mongo-orm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const PessoaSchema = mongoose.Schema({
      nome: String,
      cargo: String
    })
    const Pessoa = mongoose.model('Pessoa', PessoaSchema)
    const createUser = new Pessoa({ nome: 'Marcos Pereira', cargo: 'Gerente' })
    createUser.save(() => console.log('SAVE'))
  })