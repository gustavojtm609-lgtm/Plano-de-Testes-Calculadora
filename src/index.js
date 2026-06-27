import express from "express"
import router from "./router/exercicios.js"

const app = express()
app.use(express.json())

app.use('/api', router)

// Esta verificação impede que o servidor suba durante os testes
if (process.env.NODE_ENV !== 'test' && process.env.TEST !== 'true') { 
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    }); 
}

export default app;