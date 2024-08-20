const express = require('express')

const app = express()

const PORT = 3000

app.use(express.static('public')) //o metodo use indica q a gentee quer usar algum comportamento diferente do http
//express.static serve pra justamente servir arquivos estáticos no servidor, no caso, ele ta pegando todos os arquivos da pasta public

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})

app.listen(PORT, () => console.log('servidor inciado'))