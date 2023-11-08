const bodyParser = require('body-parser')
const express = require('express')
const pgp = require('pg-promise')()
const app = express()
/*
1 - Configurar as pastas no express usando o set V
1.1 - Configurar onde estão os arquivos de CSS V
1.2 - Configurar onde estão os arquivos de JS V
1.3 - Fazer eles funcionarem no site no modelo .ejs V
2 - Configurar os caminhos da API
2.1 - Configurar os caminhos GET e POST(Ao invés de carregar outra página, mostrar um pop-up "Email já cadastrado")
3 - Fazer a integração com o banco de dados PostgreSQL
3.1 - Estabelecer e fechar conexão com o banco no POST
*/
//Connections
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//API
app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/register',(req, res)=>{
    const {name, email, tel} = req.body
    const db = pgp({
        host:'localhost',
        user:'postgres',
        password:'123',
        database:'the_luxury',
        port:'5432'
    })

    async function registerDb(){
        try{
            const result = await db.query({
                text: `SELECT * FROM infos WHERE email = $1 OR cellphone = $2`,
                values: [email, tel]
            })
            if (result.length > 0){
                const msg_error = []
                const email_exist = result.some((row)=>row.email === email)
                const tel_exist = result.some((row)=>row.cellphone === tel)

                if(tel_exist && email_exist){
                    msg_error.push('Ops! Parece que o e-mail e o celular já estão cadastrados :)')
                }else{
                    if (tel_exist){
                        msg_error.push('Ops! Parece que o celular já está cadastrado :)')
                    }
                    if (email_exist){
                        msg_error.push('Ops! Parece que o e-mail já está cadastrado :)')
                    }
                }
                res.render('response', {final_result: `${msg_error}`})
            }else{
                await db.query({
                    text: `INSERT INTO infos (name, email, cellphone) VALUES ($1,$2,$3)`,
                    values: [name, email, tel]
                })
                res.render('response', {final_result: 'Cadastrado com sucesso!'})
            }
        }catch(error){
            res.render('response', {final_result: `${error}`})
        }finally{
            pgp.end()
        }
    }

    registerDb()
})

app.listen(3000,()=>{
    console.log('Ouvindo na porta 3000')
})