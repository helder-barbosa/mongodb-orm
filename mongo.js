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
    //const createUser = new Pessoa({ nome: 'Marcos Pereira', cargo: 'Gerente' })
    //createUser.save(() => console.log('SAVE'))
    Pessoa.find({}, (err, docs) => {
      console.log(docs)
    })

    Pessoa.remove({
      _id: "60e32c7669a0110be42f6379"
    }, (err, res) => console.log('Removed !'))
  })