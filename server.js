const bodyParser = require('body-parser')
const express = require('express')
const pg = require('pg-promise')
const app = express()
/*
1 - Configurar as pastas no express usando o set V
1.1 - Configurar onde estão os arquivos de CSS V
1.2 - Configurar onde estão os arquivos de JS
1.3 - Fazer eles funcionarem no site no modelo .ejs
2 - Configurar os caminhos da API
2.1 - Configurar os caminhos GET e POST(Ao invés de carregar outra página, mostrar um pop-up "Email já cadastrado")
3 - Fazer a integração com o banco de dados PostgreSQL
3.1 - Estabelecer e fechar conexão com o banco no POST
*/
//Connections
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}))

function connection(){
    return pg({
        user:'postgres',
        host:'localhost',
        password:'123',
        database:'the_luxury',
        port:'5432'
    })
}
//API
app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(3000,()=>{
    console.log('Ouvindo na porta 3000')
})