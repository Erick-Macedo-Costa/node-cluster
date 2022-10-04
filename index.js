import http from "node:http"
import cluster from "node:cluster"
import { cpus } from "node:os"

const criarFilhos = () => {
    const processos = cpus().length 
    console.log(`\n Servidor iniciado com o PID ${process.pid} \n`);
    console.log(`\Criando ${processos} filhos \n`);
    for (let i = 0; i < processos; i++) {
        cluster.fork()
        
    }
}

const iniciarFilho = () => {
    const PORT = 8000

const server = http.createServer(( req, res) => {
    res.writeHead(200) //ok
    res.end("Pagina do servidor")
})

server.listen(PORT)
        .on("listening",()=> console.log(`\n Processo ${process.pid} em http://localhost:${PORT} \n`))
}

if(cluster.isPrimary)
    criarFilhos()
else iniciarFilho()
