import http from "http"; 

const PORT = 3000;
const rotas = {
    "/": "Aqui é a raiz do sistema",
    "/livros": "Você está na pagina de livros",
    "/autores": "Você está na pagina de Autores"
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end(rotas[req.url]);
})

server.listen(PORT, ()=>{
    console.log("Servidor escutando!");
})