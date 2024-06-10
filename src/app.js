import express from "express";

const app = express();
app.use(express.json());
const livros = [
    {
        id: 1,
        titulo: "Entendendo algoritimos"
    },
    {
        id: 2,
        titulo: "Codigo limpo"
    }
]
function buscarLivro(id){
    return livros.findIndex((livro) =>{
        return livro.id ===  Number(id);
    } )
}
//endpoints
app.get("/", (req, res) => {
    res.status(200).send('Aqui é a rais do sistema');
});
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});
app.get("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    res.status(200).json(livros[index]);
})
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com secesso!");
})
app.put("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send("Alteração realizada!")
})
app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado!");
})

export default app;