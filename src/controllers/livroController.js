import livro from "../models/Livros.js";


class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                menssage: `${erro} - falha ao carregar os livros`
            })
        }

    }
    static async listarUmLivro(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                menssage: `${erro} - falha ao carregar os livros`
            })
        }

    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                menssage: "Cadastrado com sucesso",
                livro: novoLivro
            })
        } catch (erro) {
            res.status(500).json({
                menssage: `${erro.menssage} - falha ao cadastrar livro`
            })
        }
    }
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
           await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso!"});
        } catch (erro) {
            res.status(500).json({
                menssage: `${erro} - falha na atualização do livro`
            })
        }

    }
    static async deletandoLivro(req, res) {
        try {
            const id = req.params.id;
           await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso!"});
        } catch (erro) {
            res.status(500).json({
                menssage: `${erro} - falha ao deletar o livro`
            })
        }

    }

}

export default LivroController;